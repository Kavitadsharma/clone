const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true , unique:true},
  phone: { type: Number },
  password:{type:String, required: true},
  otp:{type:Number},
  role:{type:String, default:'Student'}

},{
  
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;