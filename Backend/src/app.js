const path = require('path');
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
// const xss = require('xss-clean');
const hpp = require('hpp');

const requestLogger = require('./Middleware/request-logger');
const Response = require('./util/response');
const AppError = require('./util/app-error');
const router = require('./route');
const { gEnv } = require('./util/env');
const { Router } = require('express');


const app = express();
app.set('trust proxy', 1)
app.get('/ip', (request, response) => response.send(request.ip))
app.get('/x-forwarded-for', (request, response) => response.send(request.headers['x-forwarded-for']))

app.disable('etag').disable('x-powered-by');

app.use('/static', express.static(path.join(__dirname, '../public')));

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.options(
  '/api',
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

//Logs request to the console
if (gEnv('NODE_ENV') !== 'production') {
  app.use(requestLogger);
}

// Secure Headers
app.use(helmet());

// Rate limiting on a route
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP, please try after sometime',
});

app.use('/api', limiter);

// // Body parser
app.use(express.json({ limit: '100kb' }));

// // Url encoder
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// // Sanitize Data sending before mongodb
// app.use(mongoSanitize({
//   onSanitize: ({ key }) => {
//     console.warn(`Sanitized: ${key}`);
//   }
// }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // Secure from cross-site scripting
// app.use(xss());

// // Prevent from parameter pollution
app.use(
  hpp({
    whitelist: [],
  })
);

// // Response compressor
app.use(compression());

// Initialize Routes
router(app);



// Route not found Error
// app.all('*', (req, res, next) => {
//   next(new AppError(`Route ${req.originalUrl} not found`, 404));
// });
// Debug middleware
app.use((req, res, next) => {
  console.log("==== Incoming Request ====");
  console.log("Method:", req.method);
  console.log("URL:", req.originalUrl);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  console.log("==========================");
  next();
});


// Global Error handler
app.use(Response.sendError);

module.exports = app;