import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    title: string,
    description: string,
    link: string,
    children: ReactNode
}

export default function HomeSection({ title, description, link, children }: Props) {
    return (
        <div className="mx-4 laptop:mx-20">
            <div className="laptop:flex laptop:gap-72 laptop:items-center">
                <div>
                    <h2 className="font-semibold text-3xl text-grey_15 mb-1">
                        {title}
                    </h2>
                    <p className="text-sm text-grey_35 mb-5 leading-[150%]">
                        {description}
                    </p>
                </div>
                <div className="bg-white_99 border-[1px] border-white_95 py-3 px-5 w-fit">
                    <Link
                        href={`${link}`}
                        className="font-medium text-grey_15 text-sm"
                    >
                        View All
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-5 mt-10">
                {children}
            </div>
        </div>
    );
}