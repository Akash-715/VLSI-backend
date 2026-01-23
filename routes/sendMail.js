import nodemailer from "nodemailer";
import { text } from "express";


const sendMail = async (userEmail , name , message , phone) => {


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
});



    const adminMail = {
        from: process.env.MAIL_USERNAME,
        to: "siliconvista.org.enquiry@gmail.com",
        replyTo: userEmail, 
        subject: "New Enquiry from Website",
        html: `
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${userEmail}</p>
            <p><b>Phone:</b> ${phone} </p>
            <p><b>Message:</b> ${message}</p>
        `
    }

    const userMail = {
        from: process.env.MAIL_USERNAME,
        to: userEmail,
        subject: "Thanks for contacting us – We’ll get back to you shortly",
        text: `We’ve received your enquiry`
    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);
}


export default sendMail;
