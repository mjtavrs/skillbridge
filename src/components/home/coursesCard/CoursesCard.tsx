import Image, { StaticImageData } from "next/legacy/image";
import Link from "next/link";

import Tag from "@/components/shared/tag/Tag";

type Props = {
    cover: string,
    tags: Array<string>
    author: string,
    title: string,
    description: string,
}

export default function CoursesCard({ cover, tags, author, title, description }: Props) {
    return (
        <div className="bg-white border-[1px] border-white_95 p-6 rounded-xl">
            <div className="flex flex-col gap-6">
                <div className="relative sm:h-44 laptop:h-64 w-full">
                    <Image
                        src={cover}
                        alt="Course cover"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                    />
                </div>
                <div className="laptop:flex laptop:justify-between">
                    <div className="flex gap-3 mb-3">
                        {
                            tags.map((tag) => (
                                <Tag
                                    key=""
                                    title={tag}
                                />
                            ))
                        }
                    </div>
                    <h4 className="text-grey_15 font-medium">
                        By {author}
                    </h4>
                </div>
                <div>
                    <h3 className="text-grey_15 text-lg laptop:text-xl font-semibold mb-3 leading-[150%]">
                        {title}
                    </h3>
                    <p className="text-grey_30 text-sm laptop:text-base leading-[150%]">
                        {description}
                    </p>
                </div>
                <div className="bg-white_97 border-[1px] border-white_95 text-center py-3 rounded-md">
                    <Link
                        href="#"
                        className="text-grey_15 text-sm font-medium leading-[150%]"
                    >
                        Get it Now
                    </Link>
                </div>
            </div>
        </div>
    );
}