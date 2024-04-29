"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CtaCard() {
    const [size, setSize] = useState<number>(1);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setSize(window.innerWidth < 1400 ? 235 : 380)
        }
    }, []);

    return (
        <div className="bg-white p-8 mx-4 laptop:mx-20 mt-12 rounded-xl relative">
            <div className="flex flex-col laptop:flex-row laptop:items-center gap-10 laptop:gap-[300px]">
                <div className="flex flex-col gap-3 laptop:flex-1">
                    <h3 className="text-3xl laptop:text-[40px] text-grey_15 font-semibold leading-[120%]">
                        <span className="text-orange_50">Together</span>, let&apos;s shape the future of digital innovation
                    </h3>
                    <p className="text-sm laptop:text-base text-grey_30 leading-[150%]">
                        Join us on this exciting learning journey and unlock your potential in design and development.
                    </p>
                </div>
                <div className="bg-orange_50 px-5 py-3 w-fit laptop:h-fit rounded-md">
                    <Link
                        href=""
                        className="text-white text-sm font-semibold leading-[150%]"
                    >
                        Join Now
                    </Link>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div style={{ height: size, width: size }} className="absolute top-44 left-52 laptop:top-[-40%] laptop:left-[60%] opacity-40">
                    <Image
                        src="/assets/svg/abstract-logo.svg"
                        alt="Skillbridge's abstract logo"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    );
}