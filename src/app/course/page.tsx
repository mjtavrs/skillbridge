import CurriculumCard from "@/components/openCourse/curriculumCard/CurriculumCard";
import NavigationMenu from "@/components/shared/navigationMenu/NavigationMenu";
import ColOrganizer from "@/components/shared/colOrganizer/ColOrganizer";
import PageHero from "@/components/shared/pageHero/PageHero";
import Footer from "@/components/shared/footer/Footer";
import Video from "@/components/shared/video/Video";
import Cta from "@/components/shared/cta/Cta";

import curriculumInfo from "@/data/curriculumExampleData";

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
            <div className="flex flex-col gap-5 mx-4 laptop:mx-20">
                <ColOrganizer colNumber={2}>
                    {
                        curriculumInfo.map((curriculum, index) => (
                            <CurriculumCard
                                key={index}
                                moduleNumber={curriculum.classNumber}
                                moduleTitle={curriculum.classTitle}
                                moduleClasses={curriculum.classes}
                            />
                        ))
                    }
                </ColOrganizer>
            </div>
            <Footer />
        </>
    );
}