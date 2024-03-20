import CourseFullCard from "../courseFullCard/CourseFullCard";

import webDesignFundamentals1 from "../../../../public/assets/png/covers/coursesPage/webDesignFundamentals/1.png";
import webDesignFundamentals2 from "../../../../public/assets/png/covers/coursesPage/webDesignFundamentals/2.png";
import webDesignFundamentals3 from "../../../../public/assets/png/covers/coursesPage/webDesignFundamentals/3.png";

import uiUxDesign1 from "../../../../public/assets/png/covers/coursesPage/uiUxDesign/1.png";
import uiUxDesign2 from "../../../../public/assets/png/covers/coursesPage/uiUxDesign/2.png";
import uiUxDesign3 from "../../../../public/assets/png/covers/coursesPage/uiUxDesign/3.png";

import mobileAppDevelopment1 from "../../../../public/assets/png/covers/coursesPage/mobileAppDevelopment/1.png";
import mobileAppDevelopment2 from "../../../../public/assets/png/covers/coursesPage/mobileAppDevelopment/2.png";
import mobileAppDevelopment3 from "../../../../public/assets/png/covers/coursesPage/mobileAppDevelopment/3.png";

import graphicDesignBeginners1 from "../../../../public/assets/png/covers/coursesPage/graphicDesignBeginners/1.png";
import graphicDesignBeginners2 from "../../../../public/assets/png/covers/coursesPage/graphicDesignBeginners/2.png";
import graphicDesignBeginners3 from "../../../../public/assets/png/covers/coursesPage/graphicDesignBeginners/3.png";

import frontEndWebDevelopment1 from "../../../../public/assets/png/covers/coursesPage/frontEndWebDevelopment/1.png";
import frontEndWebDevelopment2 from "../../../../public/assets/png/covers/coursesPage/frontEndWebDevelopment/2.png";
import frontEndWebDevelopment3 from "../../../../public/assets/png/covers/coursesPage/frontEndWebDevelopment/3.png";

export default function CoursesFullContainer() {
    return (
        <div className="flex flex-col gap-5 pt-12 mx-4">
            <CourseFullCard
                courseTitle="Web Design Fundamentals"
                courseDescription="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."
                courseLink="#"
                courseImages={[
                    webDesignFundamentals1,
                    webDesignFundamentals2,
                    webDesignFundamentals3
                ]}
                courseTags={[
                    "4 Weeks",
                    "Beginner"
                ]}
                courseAuthor="John Smith"
                courseCurriculum={[
                    "Introduction to HTML",
                    "Styling with CSS",
                    "Introduction to Responsive Design",
                    "Design Principles for Web",
                    "Building a Basic Website"
                ]}
            />
            <CourseFullCard
                courseTitle="UI/UX Design"
                courseDescription="Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques."
                courseLink="#"
                courseImages={[
                    uiUxDesign1,
                    uiUxDesign2,
                    uiUxDesign3
                ]}
                courseTags={[
                    "6 Weeks",
                    "Intermediate"
                ]}
                courseAuthor="Emily Johnson"
                courseCurriculum={[
                    "Introduction to UI/UX Design",
                    "User Research and Personas",
                    "Wireframing and Prototyping",
                    "Visual Design and Branding",
                    "Usability Testing and Iteration"
                ]}
            />
            <CourseFullCard
                courseTitle="Mobile App Development"
                courseDescription="Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin."
                courseLink="#"
                courseImages={[
                    mobileAppDevelopment1,
                    mobileAppDevelopment2,
                    mobileAppDevelopment3
                ]}
                courseTags={[
                    "8 Weeks",
                    "Intermediate"
                ]}
                courseAuthor="David Brown"
                courseCurriculum={[
                    "Introduction to Mobile App Development",
                    "Fundamentals of Swift Programming (iOS)",
                    "Fundamentals of Kotlin Programming (Android)",
                    "Building User Interfaces",
                    "App Deployment and Testing"
                ]}
            />
            <CourseFullCard
                courseTitle="Graphic Design for Beginners"
                courseDescription="Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media."
                courseLink="#"
                courseImages={[
                    graphicDesignBeginners1,
                    graphicDesignBeginners2,
                    graphicDesignBeginners3
                ]}
                courseTags={[
                    "10 Weeks",
                    "Beginner"
                ]}
                courseAuthor="Sarah Thompson"
                courseCurriculum={[
                    "Introduction to Graphic Design",
                    "Typography and Color Theory",
                    "Layout Design and Composition",
                    "Image Editing and Manipulation",
                    "Designing for Print and Digital Media"
                ]}
            />
            <CourseFullCard
                courseTitle="Front-End Web Development"
                courseDescription="Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites."
                courseLink="#"
                courseImages={[
                    frontEndWebDevelopment1,
                    frontEndWebDevelopment2,
                    frontEndWebDevelopment3
                ]}
                courseTags={[
                    "10 Weeks",
                    "Intermediate"
                ]}
                courseAuthor="Michael Adams"
                courseCurriculum={[
                    "HTML Fundamentals",
                    "CSS Styling and Layouts",
                    "JavaScript Basics",
                    "Building Responsive Websites",
                    "Introduction to Bootstrap and React"
                ]}
            />
        </div>
    );
}