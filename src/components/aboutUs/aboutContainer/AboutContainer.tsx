import AchievementsContainer from "../achievementsContainer/AchievementsContainer";
import GoalsContainer from "@/components/aboutUs/goalsContainer/GoalsContainer";

export default function AboutContainer() {
    return (
        <div className="flex flex-col gap-12 mx-4 laptop:mx-20 mt-12">
            <AchievementsContainer />
            <GoalsContainer />
        </div>
    );
}