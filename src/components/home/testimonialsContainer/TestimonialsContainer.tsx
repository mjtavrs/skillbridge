import MapTestimonials from "@/components/shared/mapTestimonials/MapTestimonials";
import HomeSection from "../homeSection/HomeSection";

export default function TestimonialsContainer() {
    return (
        <div className="mt-12">
            <HomeSection
                title="Our Testimonials"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, assumenda. Aut ipsa, obcaecati omnis rerum error eaque, dicta cum, nihil expedita voluptates commodi? Totam facilis ea earum culpa, officiis eum!"
                link="#"
                colNumber={2}
            >
                <MapTestimonials />
            </HomeSection>
        </div>
    );
}