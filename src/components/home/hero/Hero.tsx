import Link from "next/link";
import CtaHome from "../ctaHome/CtaHome";

export default function Hero() {
    return (
        <div>
            <h1><CtaHome /></h1>
            <div className="flex flex-col px-4">
                <div className="mx-8 text-center">
                    <h2 className="mb-2 text-2xl text-grey_15 font-medium leading-[150%]">
                        with Online Design and Development Courses.
                    </h2>
                    <h4 className="text-sm text-grey_15 leading-[150%]">
                        Learn from Industry Experts and Enhance Your Skills.
                    </h4>
                </div>
                <div className="flex justify-center items-center gap-3 mt-16">
                    <Link
                        href="#"
                        className="bg-orange_50 py-4 px-5 text-sm text-white font-semibold rounded-md"
                    >
                        Explore Courses
                    </Link>
                    <Link
                        href="#"
                        className="bg-white py-4 px-5 border-[1px] border-white_95 text-grey_15 font-medium rounded-md"
                    >
                        View Pricing
                    </Link>
                </div>
            </div>
        </div>
    );
}