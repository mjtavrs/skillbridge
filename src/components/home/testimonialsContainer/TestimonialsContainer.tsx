import TestimonialsCard from "../testimonialsCard/TestimonialsCard";
import HomeSection from "../homeSection/HomeSection";

import sarah from "../../../../public/assets/png/covers/testimonials/sarah.png";
import jason from "../../../../public/assets/png/covers/testimonials/jason.png";
import emily from "../../../../public/assets/png/covers/testimonials/emily.png";
import michael from "../../../../public/assets/png/covers/testimonials/michael.png";

export default function TestimonialsContainer() {
    return (
        <div className="mt-12">
            <HomeSection
                title="Our Testimonials"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, assumenda. Aut ipsa, obcaecati omnis rerum error eaque, dicta cum, nihil expedita voluptates commodi? Totam facilis ea earum culpa, officiis eum!"
            >
                <TestimonialsCard
                    userTestimonial="The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!"
                    userPicture={sarah}
                    userFullName="Sarah L"
                />
                <TestimonialsCard
                    userTestimonial="The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!"
                    userPicture={jason}
                    userFullName="Jason M"
                />
                <TestimonialsCard
                    userTestimonial="The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!"
                    userPicture={emily}
                    userFullName="Emily R"
                />
                <TestimonialsCard
                    userTestimonial="I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!"
                    userPicture={michael}
                    userFullName="Michael K"
                />
            </HomeSection>
        </div>
    );
}