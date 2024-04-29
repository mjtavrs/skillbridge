import PricesContainer from "@/components/shared/pricesContainer/PricesContainer";
import FaqContainer from "@/components/home/faqContainer/FaqContainer";
import MonthlyYearlyPricesButton from "@/components/shared/monthlyYearlyPricesButton/MonthlyYearlyPricesButton";

export default function PricingContainer() {
    return (
        <div className="mt-12 laptop:mt-20">
            <div className="hidden laptop:block">
                <MonthlyYearlyPricesButton />
            </div>
            <div className="laptop:mx-20">
                <PricesContainer />
            </div>
            <FaqContainer />
        </div>
    );
}