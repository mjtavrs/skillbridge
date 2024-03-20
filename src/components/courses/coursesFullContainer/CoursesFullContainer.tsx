import CourseFullCard from "../courseFullCard/CourseFullCard";

import webDesignFundamentals1 from "../../../../public/assets/png/covers/coursesPage/webDesignFundamentals/1.png";
import webDesignFundamentals2 from "../../../../public/assets/png/covers/coursesPage/webDesignFundamentals/2.png";
import webDesignFundamentals3 from "../../../../public/assets/png/covers/coursesPage/webDesignFundamentals/3.png";

export default function CoursesFullContainer() {
    return (
        <div className="pt-12 mx-4">
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
        </div>
    );
}