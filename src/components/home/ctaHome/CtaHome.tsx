import Image from "next/image";
import { FaBolt } from "react-icons/fa6";

export default function CtaHome() {
    return (
        <div className="flex items-center gap-3 bg-white_99 border-[1px] border-white_95 rounded-lg mx-4 mt-12 mb-4 p-4 relative laptop:w-fit">
            <Image
                src="assets/svg/lines.svg"
                alt="Lines for the CTA"
                height="43"
                width="39"
                className="top-[-20px] left-[-10px] absolute"
            />
            <FaBolt
                className="bg-orange_95 text-grey_15 text-5xl p-3 rounded-md"
            />
            <p className="font-semibold laptop:text-4xl text-grey_10">
                <span className="text-orange_50">Unlock</span> Your Creative Potential
            </p>
        </div>
    );
}