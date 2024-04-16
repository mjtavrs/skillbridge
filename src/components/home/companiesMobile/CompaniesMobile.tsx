import Image from "next/image";

export default function CompaniesMobile() {
    return (
        <div className="bg-white_99 border-[1px] border-white_95 p-3 mx-4 laptop:mx-20 my-8 rounded-lg">
            <div className="border-r-[1px] border-white_95 py-5 px-8 inline-block">
                <Image
                    src="assets/svg/logos/zapier.svg"
                    alt="Zapier official logo"
                    height="0"
                    width="48"
                    className=""
                />
            </div>
            <div className="border-r-[1px] border-white_95 py-5 px-8 inline-block">
                <Image
                    src="assets/svg/logos/spotify.svg"
                    alt="Zapier official logo"
                    height="0"
                    width="70"
                    className=""
                />
            </div>
            <div className="border-r-[1px] border-white_95 py-5 px-8 inline-block">
                <Image
                    src="assets/svg/logos/zoom.svg"
                    alt="Zapier official logo"
                    height="0"
                    width="49"
                    className=""
                />
            </div>
        </div>
    );
}