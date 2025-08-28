const { Schema, model } = require('mongoose');
const { hashSync } = require('bcrypt');

const adminSchema = new Schema(
  {
    email: {
      type: String,
    },
    password:String,
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);



const Admin = model('Admin', adminSchema);

module.exports = Admin;