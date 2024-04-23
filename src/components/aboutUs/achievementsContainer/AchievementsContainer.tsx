import ColOrganizer from "@/components/shared/colOrganizer/ColOrganizer";
import AboutCard from "../aboutCard/AboutCard";
import achievementsCardsData from "@/data/achievementsCardsData";
import HeaderContainer from "../headerContainer/HeaderContainer";

export default function AchievementsContainer() {
    return (
        <div className="flex flex-col gap-10 laptop:gap-14">
            <HeaderContainer
                title="Achievements"
                description="Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements."
            />
            <ColOrganizer
                colNumber={2}
            >
                {
                    achievementsCardsData.map((card, index) => (
                        <AboutCard
                            key={index}
                            info={[
                                {
                                    icon: card.icon,
                                    title: card.title,
                                    description: card.description
                                }
                            ]}
                        />
                    ))
                }
            </ColOrganizer>
        </div>
    );
}