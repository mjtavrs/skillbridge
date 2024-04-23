import { ReactNode } from "react";

type ClassData = {
    icon: ReactNode,
    title: string,
    description: string
}

type Props = {
    info: Array<ClassData>
}

export default function AboutCard({ info }: Props) {
    return (
        <>
            {
                info.map(({ icon, title, description }, index) => (
                    <div
                        className="bg-white flex flex-col gap-6 p-8 rounded-xl"
                        key={index}
                    >
                        <div className="bg-orange_97 border-[1px] border-orange_90 p-4 rounded-md w-fit">
                            <span className="text-orange_50 text-2xl">
                                {icon}
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-grey_15 text-lg laptop:text-xl font-medium leading-[150%]">
                                {title}
                            </h3>
                            <p className="text-grey_35 text-sm laptop:text-base leading-[150%]">
                                {description}
                            </p>
                        </div>
                    </div>
                ))
            }
        </>
    );
}