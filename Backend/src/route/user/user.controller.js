const BaseController = require('../baseController');
const userService = require('../../service/user');

class userController extends BaseController {
  constructor() {
    super();
    this.service = userService;
  }


  register() {
    return this.asyncWrapper(async (req) => {
        const { body: data } = req;
      const user = await this.service.register(data);
      return {
        data: user,
        message: "user added"
      }

    });

  }
  login(){
    return this.asyncWrapper(async(req)=>{
      const {body:data}= req;
      const user = await this.service.login(data);
      return {
        data: user,
        message: "user login successfully"
      }
    })
  }
  
}

module.exports = new userController();