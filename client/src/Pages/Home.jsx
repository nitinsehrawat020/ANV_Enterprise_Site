import HeroSection from "../component/home/heroSection/HeroSection";
import ShopingSection from "../component/home/ShopingSection/ShopingSection";
import Appointment from "../component/home/appointment/Appointment";
import { Main } from ".";
import Faq from "../component/home/faq/Faq";
import Axios from "../util/Axios";
import SummaryApi from "../common/SummaryApi";
function Home() {
  return (
    <>
      <Main>
        <HeroSection />
        <ShopingSection />
        <Appointment />
        <Faq />
      </Main>
    </>
  );
}

export default Home;
