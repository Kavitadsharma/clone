const { gEnv }=require("../util/env")
const AppError=require("../util/app-error")
const nodemailer=require("nodemailer")
class sendingblue{
    async sendMail(email,sub,emailContent){
        const transporter = nodemailer.createTransport({
            host: 'smtp-relay.brevo.com',
            port: 587,
            auth: {
              user: "kavitadsharma8.com",
              pass: gEnv('pass'),
            },
          })
    
          const mailOptions = {
            from: 'office@clone.in',
            to: email,
            subject: sub,
            html: emailContent,
          };
    
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              console.error(err);
              throw new AppError({ msg: 'Email sending failed' });
            } 
          });

    }
}
module.exports=new sendingblue()