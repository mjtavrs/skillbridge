import { ReactNode } from "react";

type Props = {
    pageTitle: string,
    pageDescription: string
}

export default function PageHero({ pageTitle, pageDescription }: Props) {
    return (
        <div className="border-t-[1px] border-white_95 mx-4">
            <div className="border-b-[1px] border-white_90 mt-12 pb-8">
                <h1 className="text-3xl text-grey_15 font-semibold leading-[150%]">
                    {pageTitle}
                </h1>
                <p className="text-sm text-grey_35 mt-4 leading-[150%]">
                    {pageDescription}
                </p>
            </div>
        </div>
    );
}