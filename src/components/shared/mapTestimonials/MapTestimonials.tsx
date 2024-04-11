import TestimonialsCard from "@/components/home/testimonialsCard/TestimonialsCard";
import testimonials from "@/data/testimonialsData";

export default function MapTestimonials() {
    return (
        <>
            {
                testimonials.map((testimonial, index) => (
                    <TestimonialsCard
                        key={index}
                        userTestimonial={testimonial.testimonial}
                        userPicture={testimonial.profile_pic}
                        userFullName={testimonial.name}
                    />
                ))
            }
        </>
    )
}