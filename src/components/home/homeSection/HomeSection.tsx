import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    title: string,
    description: string,
    link: string,
    children: ReactNode
}

export default function HomeSection() {
    return (
        <div className="mx-4">
            <h2 className="font-semibold text-3xl text-grey_15 mb-1">
                Benefits
            </h2>
            <p className="text-sm text-grey_35 mb-5 leading-[150%]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias est sed voluptatem deserunt cupiditate dolore excepturi, beatae architecto laudantium nobis necessitatibus laborum totam at ipsam perspiciatis rerum sequi nisi ducimus.
            </p>
            <div className="bg-white_99 border-[1px] border-white_95 py-3 px-5 mb-10 inline-block">
                <Link
                    href="#"
                    className="font-medium text-grey_15 text-sm"
                >
                    View All
                </Link>
            </div>
        </div>
    );
}