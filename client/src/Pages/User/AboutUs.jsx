import AboutUsBanner from "../../component/aboutUs/AboutUsBanner";
import BannerSection from "../../component/aboutUs/BannerSection";
import OurValues from "../../component/aboutUs/OurValues";
import { StyleAboutUs } from "../../component/aboutUs/styleAboutUs";

function AboutUs() {
  return (
    <StyleAboutUs>
      <AboutUsBanner />
      <BannerSection />
      <OurValues />
    </StyleAboutUs>
  );
}

export default AboutUs;
