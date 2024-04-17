type Props = {
    pageTitle: string,
    pageDescription: string
}

export default function PageHero({ pageTitle, pageDescription }: Props) {
    return (
        <div className="border-t-[1px] border-white_95 mx-4">
            <div className="border-b-[1px] border-white_90 mt-12 pb-8">
                {/* Necessary a new div so the borders would obey their original sizes */}
                <div className="laptop:flex laptop:gap-20 laptop:mx-16">
                    <h1 className="text-3xl text-grey_15 font-semibold leading-[150%] laptop:flex-1">
                        {pageTitle}
                    </h1>
                    <p className="text-sm text-grey_35 sm:mt-4 leading-[150%] laptop:mt-0 laptop:flex-1">
                        {pageDescription}
                    </p>
                </div>
            </div>
        </div>
    );
}