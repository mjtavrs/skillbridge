import CurriculumCard from "@/components/openCourse/curriculumCard/CurriculumCard";
import NavigationMenu from "@/components/shared/navigationMenu/NavigationMenu";
import PageHero from "@/components/shared/pageHero/PageHero";
import Footer from "@/components/shared/footer/Footer";
import Video from "@/components/shared/video/Video";
import Cta from "@/components/shared/cta/Cta";

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
            <div className="mx-4">
                <CurriculumCard
                    moduleNumber="01"
                    moduleTitle="Introduction to UI/UX Design"
                    moduleClasses={[
                        { title: "Understanding UI/UX Design Principles", duration: "45 Minutes" },
                        { title: "Importance of User-Centered Design", duration: "1 Hour" },
                        { title: "The Role of UI/UX Design in Product Development", duration: "45 minutes" }
                    ]}
                />
            </div>
            <Footer />
        </>
    );
}