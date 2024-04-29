import MonthlyYearlyPricesButton from "@/components/shared/monthlyYearlyPricesButton/MonthlyYearlyPricesButton";
import PricesContainer from "@/components/shared/pricesContainer/PricesContainer";

export default function Prices() {
    return (
        <div className="mt-12 mx-4 laptop:mx-20">
            <div className="laptop:flex laptop:items-end laptop:justify-between">
                <div className="laptop:w-2/3">
                    <h2 className="font-semibold text-3xl text-grey_15 mb-1">
                        Our Pricing
                    </h2>
                    <p className="text-sm text-grey_35 mb-5 leading-[150%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptas cupiditate consequuntur quidem quos quas dolor natus tempore cum ratione, quaerat iusto voluptate obcaecati soluta fugit exercitationem eius laudantium suscipit!
                    </p>
                </div>
                <MonthlyYearlyPricesButton />
            </div>
            <PricesContainer />
        </div>
    );
}