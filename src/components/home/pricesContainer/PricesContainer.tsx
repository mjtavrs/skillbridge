import PricesCard from "../pricesCard/PricesCard";

export default function PricesContainer() {

    return (
        <div className="mt-12 mx-4">
            <div className="bg-white p-5 rounded-xl">
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
        </div>
    );
}