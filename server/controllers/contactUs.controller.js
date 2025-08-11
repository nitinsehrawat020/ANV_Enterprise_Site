import { sendMail } from "../config/sendMail.js";
import contactUsModel from "../models/contactUs.module.js";
import { getContactUsMailTemplate } from "../utils/contactUsMailTemplate.js";

export async function submitContactUs(req, res) {
  try {
    const { fullName, phoneNumber, email, message } = req.body;
    if (!fullName || !phoneNumber || !email || !message)
      return res.status(400).json({
        message: "kindly provide all field",
        success: false,
        error: true,
      });

    const newContactUs = new contactUsModel({
      fullName,
      phoneNumber,
      email,
      message,
    });

    await sendMail({
      sendTo: "anventerprises11@gmail.com",
      subject: "new Contact Us submitted",
      html: getContactUsMailTemplate({
        name: fullName,
        email,
        phone: phoneNumber,
        message,
      }),
    });

    newContactUs.save();

    return res.status(200).json({
      message: "form successfully submitted ",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
}
