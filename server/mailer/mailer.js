const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const SendMail = async (text) => {
  try {
    const info = await transporter.sendMail({
      from: "autoMailerForIlya@yandex.ru",
      to: "crew665@yandex.ru",
      subject: "Alarm about invite",
      text,
      html: `<p>${text}</p>`,
    });
    console.log("Message sent:", info.messageId);
  } catch (error) {
    console.log("Error sending email:", error.message);
  }
};

module.exports = SendMail;
