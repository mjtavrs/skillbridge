import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    title: string,
    description: string,
    children: ReactNode
}

export default function HomeSection({ title, description, children }: Props) {
    return (
        <div className="mx-4">
            <h2 className="font-semibold text-3xl text-grey_15 mb-1">
                {title}
            </h2>
            <p className="text-sm text-grey_35 mb-5 leading-[150%]">
                {description}
            </p>
            <div className="bg-white_99 border-[1px] border-white_95 py-3 px-5 mb-10 inline-block">
                <Link
                    href="#"
                    className="font-medium text-grey_15 text-sm"
                >
                    View All
                </Link>
            </div>
            <div className="flex flex-col gap-5">
                {children}
            </div>
        </div>
    );
}