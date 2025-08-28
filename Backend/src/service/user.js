const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../model/user');
const AppError = require('../util/app-error');
const { gEnv } = require('../util/env');


class UserService {
  constructor() {
    this.model = UserModel;
  

  }



 
  async register(payload) {
    const { email, name, phone, password } = payload;
    let usercheck = await this.model.findOne({ email })
    if (usercheck) {
      throw new AppError('user already exists', 401);
    }
     const hash = bcrypt.hashSync(password, 8);
    const user = await this.model.create({ email, name, phone, password: hash });
    return {
      user
    }

  }
   async login(payload) {
     const { email, password } = payload;
         const user = await this.model.findOne({ email });
    if (!user) {
      throw new AppError('Invalid user. Please try again.', 401);
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      throw new AppError('Invalid user. Please try again.', 401);
    }

    const usercred = { userId: user._id };
    const secretKey = gEnv('JWT_SECRET');
    const options = { expiresIn: '7d' };
    const token = jwt.sign(usercred, secretKey, options);

    return { token: token, user };
  }

  

  

}

module.exports = new UserService();