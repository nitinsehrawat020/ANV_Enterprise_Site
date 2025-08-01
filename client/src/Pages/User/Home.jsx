import { Main } from ".";
import ContactUs from "../../component/home/ContactUs";
import DesignSection from "../../component/home/DesignSection";
import HeroSection from "../../component/home/HeroSection";
import HowItWorks from "../../component/home/HowItWorks";
import StatsSection from "../../component/home/StatsSection";

function Home() {
  return (
    <Main>
      <HeroSection />
      <StatsSection />
      <DesignSection />
      <HowItWorks />
      <ContactUs />
    </Main>
  );
}

export default Home;
