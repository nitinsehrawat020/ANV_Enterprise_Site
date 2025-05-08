import FaqSection from "./FaqSection";
import GetDetailsForm from "./GetDetailsForm";
import { StyledFaq } from "./StyleFaq";

function Faq() {
  return (
    <StyledFaq>
      <GetDetailsForm />
      <FaqSection />
    </StyledFaq>
  );
}

export default Faq;
