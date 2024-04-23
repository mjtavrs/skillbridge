import ColOrganizer from "@/components/shared/colOrganizer/ColOrganizer";
import AboutCard from "../aboutCard/AboutCard";
import aboutCardsData from "@/data/aboutCardsData";

export default function AchievementsContainer() {
    return (
        <div className="flex flex-col gap-10 laptop:gap-14">
            <div className="flex flex-col gap-1">
                <h2 className="text-2xl laptop:text-3xl text-grey_20 font-medium leading-[150%]">
                    Achievements
                </h2>
                <p className="text-sm laptop:text-base text-grey_35 leading-[150%]">
                    Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements.
                </p>
            </div>
            <ColOrganizer
                colNumber={2}
            >
                {
                    aboutCardsData.map((card, index) => (
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