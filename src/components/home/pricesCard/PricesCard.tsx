import Link from "next/link";

import { IoMdCheckmark } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";

type Props = {
    planCategory: string,
    planPrice: string,
    availableFeatures: Array<string>,
    unavailableFeatures: Array<string>
}

export default function PricesCard({ planCategory, planPrice, availableFeatures, unavailableFeatures }: Props) {
    return (
        <div className="bg-white_99 border-[1px] border-white_95 rounded-xl laptop:flex-1">
            <div className="flex flex-col gap-8 py-8 px-5">
                <h4 className="bg-orange_97 border-[1px] border-orange_90 text-grey_15 text-center font-medium py-2 leading-[169%] rounded-sm">
                    {planCategory} Plan
                </h4>
                <h2 className="text-grey_15 text-5xl text-center font-semibold leading-[73%]">
                    ${planPrice}
                    <span className="text-sm font-medium">
                        /month
                    </span>
                </h2>
                <div className="flex flex-col">
                    <div className="bg-white border-[1px] border-white_95 p-5 rounded-t-md">
                        <h3 className="text-grey_15 text-lg text-center font-medium mb-5 leading-[150%]">
                            Available Features
                        </h3>
                        <div className="flex flex-col gap-5">
                            {
                                availableFeatures.map((feature) => (
                                    <div className="flex gap-2 border-[1px] border-white_95 p-3 rounded-md" key="">
                                        <div className="bg-orange_95 text-grey_15 p-1 h-6 inline-block rounded-sm">
                                            <IoMdCheckmark />
                                        </div>
                                        <p className="text-sm leading-[150%]">
                                            {feature}
                                        </p>
                                    </div>
                                ))
                            }
                            {
                                unavailableFeatures.map((feature) => (
                                    <div className="flex gap-2 border-[1px] border-white_95 p-3 rounded-md" key="">
                                        <div className="text-grey_15 border-[1px] border-white_95 p-1 h-6 inline-block rounded-sm">
                                            <FaXmark />
                                        </div>
                                        <p className="text-sm leading-[150%]">
                                            {feature}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="bg-orange_50 text-center py-5 rounded-b-md">
                        <Link
                            href="#"
                            className="text-white font-semibold leading-[150%]"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}