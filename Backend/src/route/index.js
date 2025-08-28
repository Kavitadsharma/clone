const UserRouter = require('./user');


module.exports=(app)=>{
    app.use('/api/v1/user', UserRouter);
}