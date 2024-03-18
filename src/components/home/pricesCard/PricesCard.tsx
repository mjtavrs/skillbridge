import Link from "next/link";

export default function PricesCard() {
    return (
        <div className="bg-white_99 border-[1px] border-white_95 rounded-xl">
            <div className="flex flex-col gap-8 py-8 px-5">
                <h4 className="bg-orange_97 border-[1px] border-orange_90 text-grey_15 text-center font-medium py-2 leading-[169%] rounded-sm">
                    Free Plan
                </h4>
                <h2 className="text-grey_15 text-5xl text-center font-semibold leading-[73%]">
                    $0
                    <span className="text-sm font-medium">
                        /month
                    </span>
                </h2>
                <div className="flex flex-col">
                    <div className="bg-white border-[1px] border-white_95 p-5 rounded-t-md">
                        <h3 className="text-grey_15 text-lg font-medium mb-5 leading-[150%]">
                            Available Features
                        </h3>
                        <div className="flex flex-col gap-5">

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