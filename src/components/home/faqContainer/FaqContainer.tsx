import Link from "next/link";
import FaqCard from "../faqCard/FaqCard";
import faqData from "@/data/faqData";

export default function FaqContainer() {
    return (
        <div className="bg-white mt-12 sm:mx-4 laptop:mx-20 sm:p-6 laptop:p-20 rounded-xl">
            <div className="laptop:flex laptop:gap-20">
                <div>
                    <h2 className="font-semibold text-3xl laptop:text-4xl text-grey_15 mb-2">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-sm laptop:text-base text-grey_35 mb-5 leading-[150%]">
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
                <div className="flex flex-col gap-5">
                    {
                        faqData.map((faq, index) => (
                            <FaqCard
                                key={index}
                                faqTitle={faq.title}
                                faqAnswer={faq.answer}
                                faqLinkTitle={faq.linkTitle}
                                faqLink={faq.link}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}