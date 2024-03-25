import AboutCard from "../aboutCard/AboutCard";

import { FaMasksTheater, FaShieldHalved } from "react-icons/fa6";
import { FaCrown, FaMedal } from "react-icons/fa";

export default function AchievementsContainer() {
    return (
        <>
            <div className="flex flex-col gap-1">
                <h2 className="text-2xl text-grey_20 font-medium leading-[150%]">
                    Achievements
                </h2>
                <p className="text-sm text-grey_35 leading-[150%]">
                    Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements
                </p>
            </div>
            <div className="flex flex-col gap-5 mt-12">
                <AboutCard
                    info={[
                        {
                            icon: < FaCrown />,
                            title: "Trusted by Thousands",
                            description: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals."
                        }
                    ]}
                />
                <AboutCard
                    info={[
                        {
                            icon: < FaMedal />,
                            title: "Award-Winning Courses",
                            description: "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies."
                        }
                    ]}
                />
                <AboutCard
                    info={[
                        {
                            icon: < FaMasksTheater />,
                            title: "Positive Student Feedback",
                            description: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials."
                        }
                    ]}
                />
                <AboutCard
                    info={[
                        {
                            icon: < FaShieldHalved />,
                            title: "Industry Partnerships",
                            description: "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies"
                        }
                    ]}
                />
            </div>
        </>
    );
}