import Image from "next/image";
import Link from "next/link";

export default function CtaCard() {
    return (
        <div className="bg-white p-8 mx-4 mt-12 rounded-xl relative">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                    <h3 className="text-3xl text-grey_15 font-semibold leading-[120%]">
                        <span className="text-orange_50">Together</span>, let&apos;s shape the future of digital innovation
                    </h3>
                    <p className="text-sm text-grey_30 leading-[150%]">
                        Join us on this exciting learning journey and unlock your potential in design and development.
                    </p>
                </div>
                <div className="bg-orange_50 px-5 py-3 w-fit rounded-md">
                    <Link
                        href=""
                        className="text-white text-sm font-semibold leading-[150%]"
                    >
                        Join Now
                    </Link>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div style={{ width: 235, height: 235 }} className="absolute top-44 left-52 opacity-40">
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