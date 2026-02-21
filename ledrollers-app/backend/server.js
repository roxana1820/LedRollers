const express =require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.post("/send-order", async (req, res) => {
  const { fullName, address, phone, size, quantity, note, product } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Нова поръчка от сайта",
      html: `
        <h2>Нова поръчка</h2>
        <p><strong>Продукт:</strong> ${product}</p>
        <p><strong>Име:</strong> ${fullName}</p>
        <p><strong>Адрес:</strong> ${address}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Размер:</strong> ${size}</p>
        <p><strong>Брой:</strong> ${quantity}</p>
        <p><strong>Бележка:</strong> ${note}</p>
      `,
    });

    res.status(200).json({ message: "Email изпратен успешно!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Грешка при изпращане" });
  }
});

app.post("/send-contact", async (req,res) => {
  const {name,email,message} = req.body;

  if(!name || name.trim().split(" ").length < 2) {
    return req.status(400).json({message: "Моля въведете две имена"});
  }
  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Невалиден имейл адрес." });
  }

  if (!message || message.trim().length < 5) {
    return res.status(400).json({ message: "Съобщението е твърде кратко." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Ново запитване от сайта",
      html: `
        <h2>Ново запитване</h2>
        <p><strong>Име:</strong> ${name}</p>
        <p><strong>Имейл:</strong> ${email}</p>
        <p><strong>Съобщение:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ message: "Запитването е изпратено успешно!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Грешка при изпращане" });
  }
});

app.listen(5000, () => {
  console.log("Server работи на http://localhost:5000");
});