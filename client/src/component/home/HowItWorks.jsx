import HIWCard from "../../ui/HIWCard";
import {
  HIWHeading,
  HIWHeadingContainer,
  HIWSubHeading,
  StyleHowItWork,
  CardContainer,
  DisplaySpace,
} from "./styleHome.jsx";

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
            icon={<AiTwotoneSchedule />}
            heading="Get In Touch"
            desc="Book an appointment by sharing your contact details or giving us a call."
          />
          <HIWCard
            icon={<AiTwotoneSchedule />}
            heading="Get In Touch"
            desc="Book an appointment by sharing your contact details or giving us a call."
          />
          <HIWCard
            icon={<AiTwotoneSchedule />}
            heading="Get In Touch"
            desc="Book an appointment by sharing your contact details or giving us a call."
          />
        </DisplaySpace>
      </CardContainer>
    </StyleHowItWork>
  );
}

export default HowItWorks;
