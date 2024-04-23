import ColOrganizer from "@/components/shared/colOrganizer/ColOrganizer";
import AboutCard from "../aboutCard/AboutCard";
import goalsCardsData from "@/data/goalsCardsData";
import HeaderContainer from "../headerContainer/HeaderContainer";

export default function GoalsContainer() {
    return (
        <div className="flex flex-col gap-10 laptop:gap-14">
            <HeaderContainer
                title="Our Goals"
                description="At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact."
            />
            <ColOrganizer
                colNumber={2}
            >
                {
                    goalsCardsData.map((goal, index) => (
                        <AboutCard
                            key={index}
                            info={[
                                {
                                    icon: goal.icon,
                                    title: goal.title,
                                    description: goal.description
                                }
                            ]}
                        />
                    ))
                }
            </ColOrganizer>
        </div>
    );
}