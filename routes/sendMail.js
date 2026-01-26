import fetch from "node-fetch";

const sendMail = async (userEmail, name, message, phone) => {
  const payload = {
    access_key: process.env.WEB3FORMS_KEY,
    ajax: true,

    // ADMIN EMAIL (must be Web3Forms verified email)
    email: "akashms7117@gmail.com",

    subject: "New Enquiry from Website",

    from_name: name,
    from_email: userEmail,

    message: `
      Name: ${name}
      Email: ${userEmail}
      Phone: ${phone}
      Message: ${message}
    `,

    reply_to: userEmail,

    autoresponse: `
      Hi ${name},

      Thank you for contacting SiliconVista!
      We received your enquiry and will respond shortly.

      Regards,
      SiliconVista Team
    `,
  };

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();
  console.log("WEB3FORMS RESULT:", result);

  return result;
};

export default sendMail;
