import HIWCard from "../../ui/HIWCard";
import {
  HIWHeading,
  HIWHeadingContainer,
  HIWSubHeading,
  StyleHowItWork,
  CardContainer,
  DisplaySpace,
} from "./styleHome.jsx";

import { Icon } from "@iconify-icon/react";

import { AiTwotoneSchedule } from "react-icons/ai";

function HowItWorks() {
  return (
    <StyleHowItWork>
      <HIWHeadingContainer>
        <HIWHeading>
          How It <span>Works</span>
        </HIWHeading>
        <HIWSubHeading>
          From concept to ceiling - Here&#39;s how we do it
        </HIWSubHeading>
      </HIWHeadingContainer>
      <CardContainer>
        <DisplaySpace>
          <HIWCard
            icon={<AiTwotoneSchedule />}
            heading="Get In Touch"
            desc="Book an appointment by sharing your contact details or giving us a call."
          />
          <HIWCard
            icon={<Icon icon="clarity:design-line" />}
            heading="Choose a Design"
            desc="Choose the design that fits your style, and our team of professionals will make it happen!"
          />
          <HIWCard
            icon={<Icon icon="line-md:home" />}
            heading="On-Site Evaluation"
            desc="Our team visits your location to take accurate measurements and assess installation needs."
          />
          <HIWCard
            icon={<Icon icon="eva:done-all-fill" />}
            heading="All Set!"
            desc="Your ceiling is now beautifully installed. We take care of the finishing touches and leave your space clean."
          />
        </DisplaySpace>
      </CardContainer>
    </StyleHowItWork>
  );
}

export default HowItWorks;
