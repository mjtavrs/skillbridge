import Link from "next/link";

import Tag from "@/components/shared/tag/Tag";

export default function CourseFullCard() {
    return (
        <div className="bg-white p-6 rounded-lg">
            <div className="flex flex-col gap-6">
                <div>
                    <h3 className="text-lg text-grey_15 font-semibold mb-1 leading-[150%]">
                        Web Design Fundamentals
                    </h3>
                    <p className="text-sm text-grey_35 mb-5 leading-[150%]">
                        Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.
                    </p>
                    <div className="bg-white_99 border-[1px] border-white_95 px-4 py-3 rounded-md inline-block">
                        <Link
                            href="#"
                            className="text-sm text-grey_15 font-medium leading-[150%]"
                        >
                            View Course
                        </Link>
                    </div>
                </div>
                {/* <div>
                    Images will come here
                </div> */}
                <div className="flex flex-col gap-4 mb-10">
                    <div className="flex gap-2">
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
            </div>
            <div className="border-[1px] border-white_95 rounded-lg">
                <div className="border-b-[1px] border-white_95 px-5 py-3">
                    <h4 className="text-grey_15 font-semibold leading-[150%]">
                        Curriculum
                    </h4>
                </div>
                <div className="p-6">
                    <div className="pb-5">
                        <h3 className="text-3xl text-grey_15 font-extrabold leading-[150%]">
                            01
                        </h3>
                        <p className="text-sm text-grey_20 font-medium leading-[150%]">
                            Introduction to HTML
                        </p>
                    </div>
                    <div className="border-y-[1px] border-white_95 py-5">
                        <h3 className="text-3xl text-grey_15 font-extrabold leading-[150%]">
                            02
                        </h3>
                        <p className="text-sm text-grey_20 font-medium leading-[150%]">
                            Styling with CSS
                        </p>
                    </div>
                    <div className="border-y-[1px] border-white_95 py-5">
                        <h3 className="text-3xl text-grey_15 font-extrabold leading-[150%]">
                            03
                        </h3>
                        <p className="text-sm text-grey_20 font-medium leading-[150%]">
                            Introduction to Responsive Design
                        </p>
                    </div>
                    <div className="border-y-[1px] border-white_95 py-5">
                        <h3 className="text-3xl text-grey_15 font-extrabold leading-[150%]">
                            04
                        </h3>
                        <p className="text-sm text-grey_20 font-medium leading-[150%]">
                            Design Principles for Web
                        </p>
                    </div>
                    <div className="pt-5">
                        <h3 className="text-3xl text-grey_15 font-extrabold leading-[150%]">
                            05
                        </h3>
                        <p className="text-sm text-grey_20 font-medium leading-[150%]">
                            Building a Basic Website
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}