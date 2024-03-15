import { MdOutlineArrowOutward } from "react-icons/md";

type Props = {
    benefitNumber: string,
    benefitTitle: string,
    benefitDescription: string
}

export default function BenefitsCard({ benefitNumber, benefitTitle, benefitDescription }: Props) {
    return (
        <div className="bg-white p-8 rounded-xl">
            <div>
                <h3 className="text-5xl text-grey_15 text-right font-bold mb-8 leading-6">
                    {benefitNumber}
                </h3>
                <h2 className="text-xl text-grey_20 font-semibold mb-3 leading-[150%]">
                    {benefitTitle}
                </h2>
                <p className="text-sm text-grey_30 mb-8 leading-[150%]">
                    {benefitDescription}
                </p>
            </div>
            <div className="flex justify-end">
                <div className="bg-white_99 border-[1px] border-white_95 p-4 inline-block">
                    <MdOutlineArrowOutward
                        className="text-orange_50 text-2xl"
                    />
                </div>
            </div>
        </div>
    );
}