import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
    userTestimonial: string,
    userPicture: StaticImageData,
    userFullName: string
}

export default function TestimonialsCard() {
    return (
        <div className="flex flex-col">
            <div className="bg-white border-[1px] border-white_95 border-b-0 p-8 rounded-t-xl">
                <div>
                    <p className="text-sm text-grey_30 leading-[150%]">
                        The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!
                    </p>
                </div>
            </div>
            <div className="bg-white_99 border-[1px] border-white_95 py-5 px-8 rounded-b-xl">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative h-[50px] w-[50px]">
                            <Image
                                src="/assets/png/covers/testimonials/sarah.png"
                                alt="User picture"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>
                        <h3 className="text-grey_20 font-semibold leading-[150%]">
                            Sarah L
                        </h3>
                    </div>
                    <div className="bg-white_97 border-[1px] border-white_95 p-4 rounded-md">
                        <Link
                            href="#"
                            className="text-grey_15 text-sm font-medium leading-[150%]"
                        >
                            Read Full Story
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}