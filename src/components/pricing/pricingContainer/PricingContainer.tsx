import PricesContainer from "@/components/shared/pricesContainer/PricesContainer";
import FaqContainer from "@/components/home/faqContainer/FaqContainer";

export default function PricingContainer() {
    return (
        <div className="mt-12">
            <PricesContainer />
            <FaqContainer />
        </div>
    );
}