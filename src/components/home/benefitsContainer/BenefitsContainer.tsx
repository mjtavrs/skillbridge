import BenefitsCard from "../benefitsCard/BenefitsCard";
import HomeSection from "../homeSection/HomeSection";
import benefitsData from "@/data/benefitsData";

export default function BenefitsContainer() {
    return (
        <div className="mt-12">
            <HomeSection
                title="Benefits"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quia nulla iure? Officiis inventore debitis, animi illum asperiores natus in rem accusantium, reprehenderit tempora excepturi, quasi beatae hic perferendis eligendi?"
                link="#"
                colNumber={3}
            >
                {
                    benefitsData.map((benefit, index) => (
                        <BenefitsCard
                            key={index}
                            benefitNumber={`0${index + 1}`}
                            benefitTitle={benefit.title}
                            benefitDescription={benefit.description}
                        />
                    ))
                }
            </HomeSection>
        </div>
    );
}