import PricesCard from "../../home/pricesCard/PricesCard";

export default function PricesContainer() {
    return (
        <div className="bg-white flex flex-col gap-8 p-5 mt-10 rounded-xl laptop:mt-12 laptop:p-12 laptop:flex-row">
            <PricesCard
                planCategory="Free"
                planPrice="0"
                availableFeatures={[
                    "Access to selected free courses.",
                    "Limited course materials and resources.",
                    "Basic community support.",
                    "No certification upon completion.",
                    "Ad-supported platform."
                ]}
                unavailableFeatures={[
                    "Access to exclusive Pro Plan community forums.",
                    "Early access to new courses and updates."
                ]}
            />
            <PricesCard
                planCategory="Pro"
                planPrice="79"
                availableFeatures={[
                    "Access to selected free courses.",
                    "Limited course materials and resources.",
                    "Basic community support.",
                    "No certification upon completion.",
                    "Ad-supported platform.",
                    "Access to exclusive Pro Plan community forums.",
                    "Early access to new courses and updates."
                ]}
                unavailableFeatures={[]}
            />
        </div>
    );
}