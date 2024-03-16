import CoursesCard from "../coursesCard/CoursesCard";
import HomeSection from "../homeSection/HomeSection";

export default function CoursesContainer() {
    return (
        <div className="mt-12">
            <HomeSection
                title="Our Courses"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ratione nisi est natus quidem aliquam modi, aut ipsa similique pariatur a et id explicabo, harum vero sunt. Amet, optio necessitatibus?"
                link="#"
            >
                <CoursesCard />
            </HomeSection>
        </div>
    );
}
