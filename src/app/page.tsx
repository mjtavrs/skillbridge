import BenefitsContainer from "@/components/home/benefitsContainer/BenefitsContainer";
import NavigationMenu from "@/components/shared/navigationMenu/NavigationMenu";
import HomeVideo from "../../public/assets/png/covers/homeVideo.png";
import Companies from "@/components/home/companies/Companies";
import Video from "@/components/shared/video/Video";
import Hero from "@/components/home/hero/Hero";
import Cta from "@/components/shared/cta/Cta";
import CoursesContainer from "@/components/home/coursesContainer/CoursesContainer";

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
    </>
  );
}
