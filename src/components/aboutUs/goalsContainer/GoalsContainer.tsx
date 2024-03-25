import AboutCard from "../aboutCard/AboutCard";

import { BsFillPuzzleFill } from "react-icons/bs";
import { PiBackpackFill } from "react-icons/pi";
import { BiSolidBook } from "react-icons/bi";
import { HiLightBulb } from "react-icons/hi";

export default function GoalsContainer() {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-1">
                <h2 className="text-2xl text-grey_20 font-medium leading-[150%]">
                    Our Goals
                </h2>
                <p className="text-sm text-grey_35 leading-[150%]">
                    At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
                </p>
            </div>
            <div className="flex flex-col gap-5">
                <AboutCard
                    info={[
                        {
                            icon: < PiBackpackFill />,
                            title: "Provide Practical Skills",
                            description: "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field."
                        }
                    ]}
                />
                <AboutCard
                    info={[
                        {
                            icon: < BiSolidBook />,
                            title: "Foster Creative Problem-Solving",
                            description: "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation."
                        }
                    ]}
                />
                <AboutCard
                    info={[
                        {
                            icon: < BsFillPuzzleFill />,
                            title: "Promote Collaboration and Community",
                            description: "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together."
                        }
                    ]}
                />
                <AboutCard
                    info={[
                        {
                            icon: < HiLightBulb />,
                            title: "Stay Ahead of the Curve",
                            description: "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills."
                        }
                    ]}
                />
            </div>
        </div>
    );
}