import {
  ContactForm,
  ContactHeading,
  ContactImageContainer,
  ContactSubHeading,
  FeildAndLabelGroup,
  FieldGroup,
  FormContainer,
  FornAndImageConatiner,
  StyleInput,
  StyleLabel,
  StyleSubmit,
  StyleTextArea,
} from "./styleHome";
import { ContactHeadingContainer } from "./styleHome";
import { StyleContactUs } from "./styleHome";

import { TbPhoneCalling } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";

function ContactUs() {
  return (
    <StyleContactUs>
      <ContactHeadingContainer>
        <ContactHeading>
          Let&#39;s Bring Your <span>Vision To Vision</span>
        </ContactHeading>
        <ContactSubHeading>
          Let&#39;s talk! Share your details and we&#39;ll get back to you
          shortly
        </ContactSubHeading>
      </ContactHeadingContainer>

      <FornAndImageConatiner>
        <ContactImageContainer>
          <span>
            <p>
              <TbPhoneCalling />
            </p>
            <p>
              <a
                href="tel:+919212233109"
                style={{ color: "white", textDecoration: "none" }}
              >
                (+91)-9212233109
              </a>
            </p>
          </span>
          <span>
            <p>
              <IoIosMail />
            </p>
            <p>
              <a
                href="mailto:anventerprises11@gmail.com"
                style={{ color: "white", textDecoration: "none" }}
              >
                anventerprises11@gmail.com
              </a>
            </p>
          </span>
          <span>
            <p>
              <BsInstagram />
            </p>
            <p>
              <a
                href="https://www.instagram.com/anventerprises"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", textDecoration: "none" }}
              >
                anventerprises
              </a>
            </p>
          </span>
          <span>
            <p>
              <FaSquareWhatsapp />
            </p>
            <p>
              <a
                href="https://wa.me/919212233109"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", textDecoration: "none" }}
              >
                Chat With Us
              </a>
            </p>
          </span>
        </ContactImageContainer>
        <FormContainer>
          <ContactForm>
            <FieldGroup>
              <FeildAndLabelGroup>
                <StyleLabel>Full Name</StyleLabel>
                <StyleInput type="text" />
              </FeildAndLabelGroup>
              <FeildAndLabelGroup>
                <StyleLabel>Phone Number</StyleLabel>
                <StyleInput type="text" />
              </FeildAndLabelGroup>
              <FeildAndLabelGroup>
                <StyleLabel>Email</StyleLabel>
                <StyleInput type="text" />
              </FeildAndLabelGroup>
              <FeildAndLabelGroup>
                <StyleLabel>Message</StyleLabel>
                <StyleTextArea cols="6" rows="4" type="text" />
              </FeildAndLabelGroup>
            </FieldGroup>
            <StyleSubmit type="submit">
              Send <LuSend />
            </StyleSubmit>
          </ContactForm>
        </FormContainer>
      </FornAndImageConatiner>
    </StyleContactUs>
  );
}

export default ContactUs;
