"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import MapTestimonials from "../mapTestimonials/MapTestimonials";

export default function TestimonialsCarousel() {
    return (
        <div className="mt-12 mx-4">
            <div className="flex flex-col gap-1">
                <h2 className="font-medium text-3xl text-grey_15 leading-[150%]">
                    Students Testimonials
                </h2>
                <p className="text-sm text-grey_35 leading-[150%]">
                    Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                </p>
            </div>
            <div className="mt-10 mb-5">
                <MapTestimonials />
            </div>
            <div className="flex items-center justify-center gap-3 text-xl text-grey_15">
                <div className="bg-white border-[1px] border-white_95 rounded-md p-3">
                    <FaArrowLeft
                    />
                </div>
                <div className="bg-white border-[1px] border-white_95 rounded-md p-3">
                    <FaArrowRight
                    />
                </div>
            </div>
        </div>
    )
}