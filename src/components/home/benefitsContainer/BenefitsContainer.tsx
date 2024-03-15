import BenefitsCard from "../benefitsCard/BenefitsCard";
import HomeSection from "../homeSection/HomeSection";

export default function BenefitsContainer() {
    return (
        <div className="mt-12">
            <HomeSection
                title="Benefits"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quia nulla iure? Officiis inventore debitis, animi illum asperiores natus in rem accusantium, reprehenderit tempora excepturi, quasi beatae hic perferendis eligendi?"
                link="#"
            >
                <BenefitsCard
                    benefitNumber="01"
                    benefitTitle="Flexible Learning Schedule"
                    benefitDescription="Fit your coursework around your existing commitments and obligations."
                />
                <BenefitsCard
                    benefitNumber="02"
                    benefitTitle="Expert Instruction"
                    benefitDescription="Learn from industry experts who have hands-on experience in design and development."
                />
                <BenefitsCard
                    benefitNumber="03"
                    benefitTitle="Diverse Course Offerings"
                    benefitDescription="Explore a wide range of design and development courses covering various topics."
                />
                <BenefitsCard
                    benefitNumber="04"
                    benefitTitle="Updated Curriculum"
                    benefitDescription="Access courses with up-to-date content reflecting the latest trends and industry practices."
                />
            </HomeSection>
        </div>
    );
}