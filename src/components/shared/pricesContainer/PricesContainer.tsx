import PricesCard from "../../home/pricesCard/PricesCard";

export default function PricesContainer() {
    return (
        <div className="mx-4">
            <div className="flex justify-center mb-10">
                <div className="bg-white p-3 rounded-lg inline-block">
                    <div className="flex">
                        <div className="bg-orange_50 text-white py-3 px-6 rounded-md">
                            <p className="text-sm font-medium">Monthly</p>
                        </div>
                        <div className="text-grey_30 py-3 px-6 rounded-md">
                            <p className="text-sm font-medium">Yearly</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white flex flex-col gap-8 p-5 rounded-xl">
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