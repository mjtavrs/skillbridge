import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import Tag from "@/components/shared/tag/Tag";

type Props = {
    courseTitle: string,
    courseDescription: string,
    courseLink: string,
    courseImages: Array<StaticImageData>,
    courseTags: Array<string>,
    courseAuthor: string,
    courseCurriculum: Array<string>
}

export default function CourseFullCard({ courseTitle, courseDescription, courseLink, courseImages, courseTags, courseAuthor, courseCurriculum }: Props) {
    return (
        <div className="bg-white p-6 rounded-lg">
            <div className="flex flex-col gap-6">
                <div>
                    <h3 className="text-lg text-grey_15 font-semibold mb-1 leading-[150%]">
                        {courseTitle}
                    </h3>
                    <p className="text-sm text-grey_35 mb-5 leading-[150%]">
                        {courseDescription}
                    </p>
                    <div className="bg-white_99 border-[1px] border-white_95 px-4 py-3 rounded-md inline-block">
                        <Link
                            href={courseLink}
                            className="text-sm text-grey_15 font-medium leading-[150%]"
                        >
                            View Course
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between">
                    {
                        courseImages.map((image, index) => (
                            <div className="relative h-[110px] w-[110px]" key={index}>
                                <Image
                                    src={image}
                                    alt={`${courseTitle} course image`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-4 mb-10">
                    <div className="flex gap-2">
                        {
                            courseTags.map((tag, index) => (
                                <Tag
                                    title={tag}
                                    key={index}
                                />
                            ))
                        }
                    </div>
                    <h4 className="text-grey_15 font-medium">
                        By {courseAuthor}
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
                    {
                        courseCurriculum.map((item, index) => (
                            <div
                                key={index}
                                className={`${index === 0 ? "pb-5" : index === courseCurriculum.length - 1 ? "pt-5" : "border-y-[1px] border-white_95 py-5"}`}
                            >
                                <h3 className="text-3xl text-grey_15 font-extrabold leading-[150%]">
                                    0{index + 1}
                                </h3>
                                <p className="text-sm text-grey_20 font-medium leading-[150%]">
                                    {item}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}