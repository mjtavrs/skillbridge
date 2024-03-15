import NavigationMenu from "@/components/shared/navigationMenu/NavigationMenu";
import Companies from "@/components/home/companies/Companies";
import Video from "@/components/shared/video/Video";
import Hero from "@/components/home/hero/Hero";
import Cta from "@/components/shared/cta/Cta";

import HomeVideo from "../../public/assets/png/covers/homeVideo.png";
import HomeSection from "@/components/home/homeSection/HomeSection";

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
      <div className="mb-12"></div>
      <HomeSection />
    </>
  );
}
