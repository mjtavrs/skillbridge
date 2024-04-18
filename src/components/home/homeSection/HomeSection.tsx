"use client";
import ColOrganizer from "@/components/shared/colOrganizer/ColOrganizer";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    title: string,
    description: string,
    link: string,
    colNumber: number,
    children: ReactNode
}

export default function HomeSection({ title, description, link, colNumber, children }: Props) {
    return (
        <div className="mx-4 laptop:mx-20">
            <div className="laptop:flex laptop:items-end laptop:justify-between">
                <div className="laptop:w-2/3">
                    <h2 className="font-semibold text-3xl text-grey_15 mb-1">
                        {title}
                    </h2>
                    <p className="sm:pb-5 laptop:pb-0 text-sm text-grey_35 leading-[150%]">
                        {description}
                    </p>
                </div>
                <div className="bg-white_99 border-[1px] border-white_95 px-5 py-3 w-fit">
                    <Link
                        href={`${link}`}
                        className="font-medium text-grey_15 text-sm"
                    >
                        View All
                    </Link>
                </div>
            </div>
            <ColOrganizer colNumber={colNumber}>
                {children}
            </ColOrganizer>
        </div>
    );
}