import CoursesCard from "../coursesCard/CoursesCard";
import HomeSection from "../homeSection/HomeSection";
import coursesData from "@/data/coursesData";

export default function CoursesContainer() {
    return (
        <div className="mt-12">
            <HomeSection
                title="Our Courses"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ratione nisi est natus quidem aliquam modi, aut ipsa similique pariatur a et id explicabo, harum vero sunt. Amet, optio necessitatibus?"
                link="#"
                colNumber={2}
            >
                {
                    coursesData.map((course, index) => (
                        <CoursesCard
                            key={index}
                            cover={course.coverImage}
                            tags={course.tags}
                            author={course.author}
                            title={course.title}
                            description={course.description}
                        />
                    ))
                }
            </HomeSection>
        </div>
    );
}
