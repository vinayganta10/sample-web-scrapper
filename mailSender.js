import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host:"smtp.ethereal.email",
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});


const mail = {
  from: "21b81a33c6.cvr@gmail.com",
  to: "aggvinayganta10@gmail.com",
  subject: "Mail demo",
  text: "Hello vinay!",
};

async function sendMail(){
    transporter.sendMail(mail, (err) => {
        if (err) throw err;
        else console.log("Mail sent successfully");
    });   
}

await sendMail();