const sendMail = async (userEmail, name, message, phone) => {
  const payload = {
    access_key: process.env.WEB3FORMS_KEY,

    subject: "New Enquiry from Website",
    from_name: name,
    from_email: userEmail,

    // ADMIN WILL GET THE ENQUIRY
    email: "siliconvista.org.enquiry@gmail.com",

    // User's actual message
    message: `
      Name: ${name}
      Email: ${userEmail}
      Phone: ${phone}
      Message: ${message}
    `,

    // AUTO-RESPONSE FOR USER
    reply_to: userEmail,
    autoresponse: `
      Hi ${name},

      Thank you for contacting SiliconVista!
      We’ve received your enquiry and will get back to you shortly.

      Regards,
      SiliconVista Team
    `
  };

  await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
};

export default sendMail;
