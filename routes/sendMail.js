import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (userEmail , name , message , phone) => {

  await resend.emails.send({
    from:"SiliconVista <onboarding@resend.dev>",
    to:"siliconvista.org.enquiry@gmail.com",
    subject: "New Enquiry from Website",
    html: `
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${userEmail}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Message:</b> ${message}</p>
    `,
    reply_to: userEmail
  });

  //User email

  await resend.emails.send({
    from:"SiliconVista <onboarding@resend.dev>",
    to:userEmail,
    subject: "Thanks for contacting us – We’ll get back to you shortly",
    html:`
      <p>Hi ${name},</p>
      <p>Thank you for contacting SiliconVista!</p>
      <p>We’ve received your enquiry and will get back to you shortly.</p>        
    `
  });

};


export default sendMail;
