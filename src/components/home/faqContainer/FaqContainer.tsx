import Link from "next/link";
import FaqCard from "../faqCard/FaqCard";

export default function FaqContainer() {
    return (
        <div className="bg-white mt-12 mx-4 p-6 rounded-xl">
            <div>
                <h2 className="font-semibold text-3xl text-grey_15 mb-2">
                    Frequently Asked Questions
                </h2>
                <p className="text-sm text-grey_35 mb-5 leading-[150%]">
                    Still you have any questions? Contact our Team via support@skillbridge.com
                </p>
                <div className="border-[1px] border-white_95 px-5 py-4 mb-10 inline-block rounded-md">
                    <Link
                        href="#"
                        className="text-sm text-grey_15 font-medium"
                    >
                        See All FAQs
                    </Link>
                </div>
            </div>
            <FaqCard />
        </div>
    );
}