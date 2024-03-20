import NavigationMenu from "@/components/shared/navigationMenu/NavigationMenu";
import Footer from "@/components/shared/footer/Footer";
import Cta from "@/components/shared/cta/Cta";
import PageHero from "@/components/shared/pageHero/PageHero";
import Video from "@/components/shared/video/Video";

import UiUxCover from "../../../public/assets/png/covers/coursesPage/uiUxDesign/1.png";

export default function Course() {
    return (
        <>
            <Cta />
            <NavigationMenu />
            <PageHero
                pageTitle="UI/UX Design Course"
                pageDescription="Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum."
            />
            <div className="my-12">
                <Video
                    cover={UiUxCover}
                />
            </div>
            {/* Curriculum info will come here */}
            <Footer />
        </>
    );
}