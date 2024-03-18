import CoursesCard from "../coursesCard/CoursesCard";
import HomeSection from "../homeSection/HomeSection";

import webDesignCover from "../../../../public/assets/png/covers/coursesCovers/webDesignCover.png";

export default function CoursesContainer() {
    return (
        <div className="mt-12">
            <HomeSection
                title="Our Courses"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ratione nisi est natus quidem aliquam modi, aut ipsa similique pariatur a et id explicabo, harum vero sunt. Amet, optio necessitatibus?"
                link="#"
            >
                <CoursesCard
                    cover={webDesignCover}
                    tags={["4 Weeks", "Beginner"]}
                    author="John Smith"
                    title="Web Design Fundamentals"
                    description="Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."
                />
                <CoursesCard
                    cover={webDesignCover}
                    tags={["6 Weeks", "Intermediate"]}
                    author="Emily Johnson"
                    title="UI/UX Design"
                    description="Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques."
                />
                <CoursesCard
                    cover={webDesignCover}
                    tags={["8 Weeks", "Intermediate"]}
                    author="David Brown"
                    title="Mobile App Development"
                    description="Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin."
                />
                <CoursesCard
                    cover={webDesignCover}
                    tags={["10 Weeks", "Intermediate"]}
                    author="Michael Adams"
                    title="Front-End Web Development"
                    description="Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites."
                />
                <CoursesCard
                    cover={webDesignCover}
                    tags={["6 Weeks", "Advanced"]}
                    author="Jennifer Wilson"
                    title="Advanced JavaScript"
                    description="Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence."
                />
            </HomeSection>
        </div>
    );
}
