import { Router } from "express";
import { submitContactUs } from "../controllers/contactUs.controller.js";

const contactUsRoute = new Router();
contactUsRoute.post("/submit-contactUs-form", submitContactUs);

export default contactUsRoute;
