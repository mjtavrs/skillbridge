import CourseFullCard from "../courseFullCard/CourseFullCard";
import coursesFullData from "@/data/coursesFullData";

export default function CoursesFullContainer() {
    return (
        <div className="flex flex-col gap-5 pt-12 mx-4 laptop:mx-20">
            {
                coursesFullData.map((course, index) => (
                    <CourseFullCard
                        key={index}
                        courseTitle={course.title}
                        courseDescription={course.description}
                        courseLink={course.link}
                        courseImages={course.images}
                        courseTags={course.tags}
                        courseAuthor={course.author}
                        courseCurriculum={course.curriculum}
                    />
                ))
            }
        </div>
    );
}