import CoursesCard from "../coursesCard/CoursesCard";
import HomeSection from "../homeSection/HomeSection";

import webDesignCover from "../../../../public/assets/png/covers/coursesCovers/webDesignCover.png";
import uiUxCover from "../../../../public/assets/png/covers/coursesCovers/uiUxCover.png";
import mobileAppDevCover from "../../../../public/assets/png/covers/coursesCovers/mobileAppDevCover.png";
import graphicDesignCover from "../../../../public/assets/png/covers/coursesCovers/graphicDesignCover.png";
import frontEndWebCover from "../../../../public/assets/png/covers/coursesCovers/frontEndWebCover.png";
import advancedJavascriptCover from "../../../../public/assets/png/covers/coursesCovers/advancedJavascriptCover.png";

export default function CoursesContainer() {
    return (
        <div className="mt-12">
            <HomeSection
                title="Our Courses"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ratione nisi est natus quidem aliquam modi, aut ipsa similique pariatur a et id explicabo, harum vero sunt. Amet, optio necessitatibus?"
            >
                <CoursesCard
                    cover={webDesignCover}
                    tags={["4 Weeks", "Beginner"]}
                    author="John Smith"
                    title="Web Design Fundamentals"
                    description="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."
                />
                <CoursesCard
                    cover={uiUxCover}
                    tags={["6 Weeks", "Intermediate"]}
                    author="Emily Johnson"
                    title="UI/UX Design"
                    description="Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques."
                />
                <CoursesCard
                    cover={mobileAppDevCover}
                    tags={["8 Weeks", "Intermediate"]}
                    author="David Brown"
                    title="Mobile App Development"
                    description="Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin."
                />
                <CoursesCard
                    cover={graphicDesignCover}
                    tags={["10 Weeks", "Beginner"]}
                    author="Sarah Thompson"
                    title="Graphic Design for Beginners"
                    description="Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media."
                />
                <CoursesCard
                    cover={frontEndWebCover}
                    tags={["10 Weeks", "Intermediate"]}
                    author="Michael Adams"
                    title="Front-End Web Development"
                    description="Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites."
                />
                <CoursesCard
                    cover={advancedJavascriptCover}
                    tags={["6 Weeks", "Advanced"]}
                    author="Jennifer Wilson"
                    title="Advanced JavaScript"
                    description="Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence."
                />
            </HomeSection>
        </div>
    );
}
