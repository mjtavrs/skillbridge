"use client";
import Link from "next/link";
import { useState, useEffect, ReactNode } from "react";

type Props = {
    title: string,
    description: string,
    link: string,
    colNumber: number,
    children: ReactNode
}

export default function HomeSection({ title, description, link, colNumber, children }: Props) {

    const [columns, setColumns] = useState<number>(1);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setColumns(window.innerWidth < 1400 ? 1 : colNumber)
        }
    }, []);

    const customStyles = {
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: "20px",
        marginTop: "40px"
    };

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
            <div style={customStyles}>
                {children}
            </div>
        </div>
    );
}