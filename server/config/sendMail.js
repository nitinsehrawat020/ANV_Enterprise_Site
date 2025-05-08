import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.RESEND_API) {
  throw new Error("RESEND_API is required");
}
const resend = new Resend(process.env.RESEND_API);

const sendMail = async ({ sendTo, subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "ANV Enterprise <onboarding@resend.dev>",
      to: [sendTo],
      subject: subject,
      html: html,
    });
    if (error) {
      return console.error({ error });
    }
    console.log({ data });
  } catch (error) {
    console.log(error);
  }
};

export default sendMail;
