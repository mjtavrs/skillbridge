import TestimonialsContainer from "@/components/home/testimonialsContainer/TestimonialsContainer";
import BenefitsContainer from "@/components/home/benefitsContainer/BenefitsContainer";
import CoursesContainer from "@/components/home/coursesContainer/CoursesContainer";
import PricesContainer from "@/components/home/pricesContainer/PricesContainer";
import NavigationMenu from "@/components/shared/navigationMenu/NavigationMenu";
import FaqContainer from "@/components/home/faqContainer/FaqContainer";
import HomeVideo from "../../public/assets/png/covers/homeVideo.png";
import Companies from "@/components/home/companies/Companies";
import Footer from "@/components/shared/footer/Footer";
import Video from "@/components/shared/video/Video";
import Hero from "@/components/home/hero/Hero";
import Cta from "@/components/shared/cta/Cta";

export default function Home() {
  return (
    <>
      <Cta />
      <NavigationMenu />
      <Hero />
      <Companies />
      <Video
        cover={HomeVideo}
      />
      <BenefitsContainer />
      <CoursesContainer />
      <TestimonialsContainer />
      <PricesContainer />
      <FaqContainer />
      <Footer />
    </>
  );
}
