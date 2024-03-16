import Image from "next/image";
import Link from "next/link";

import Tag from "@/components/shared/tag/Tag";

export default function CoursesCard() {
    return (
        <div className="bg-white border-[1px] border-white_95 p-6 rounded-xl">
            <div className="flex flex-col gap-6">
                <div className="relative h-44 w-full">
                    <Image
                        src="/assets/png/covers/coursesCovers/webDesignCover.png"
                        alt="Course cover"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                    />
                </div>
                <div>
                    <div className="flex gap-3 mb-3">
                        <Tag
                            title="4 Weeks"
                        />
                        <Tag
                            title="Beginner"
                        />
                    </div>
                    <h4 className="text-grey_15 font-medium">
                        By John Smith
                    </h4>
                </div>
                <div>
                    <h3 className="text-grey_15 text-lg font-semibold mb-3 leading-[150%]">
                        Web Design Fundamentals
                    </h3>
                    <p className="text-grey_30 text-sm leading-[150%]">
                        Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.
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