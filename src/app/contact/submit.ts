"use server";
import { formDataToObj } from "./utils";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

async function sendMail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `Contact ${name}`,
    from: email,
    html: `
      <div>${message}</div>
      </br>
      <p>보낸사람 : ${email}</p>
    `,
  };
  return transporter.sendMail(mailData);
}

async function onSubmit(prev: any, formData: FormData) {
  const formdata = formDataToObj(formData);

  return sendMail(formdata)
    .then(() => {
      return {
        message: "done",
      };
    })
    .catch(() => {
      return {
        message: "fail",
      };
    });
}
export default onSubmit;
