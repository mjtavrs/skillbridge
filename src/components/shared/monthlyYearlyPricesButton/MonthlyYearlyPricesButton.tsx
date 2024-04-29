export default function MonthlyYearlyPricesButton() {
    return (
        <div className="flex justify-center">
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
    );
}