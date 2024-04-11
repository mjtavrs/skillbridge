"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";

import MapTestimonials from "../mapTestimonials/MapTestimonials";
import testimonials from "@/data/testimonialsData";

export default function TestimonialsCarousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    }

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
                <MapTestimonials
                    currentIndex={currentIndex}
                />
            </div>
            <div className="flex items-center justify-center gap-3 text-xl text-grey_15">
                <div className="bg-white border-[1px] border-white_95 rounded-md p-3">
                    <FaArrowLeft
                        onClick={prevTestimonial}
                    />
                </div>
                <div className="bg-white border-[1px] border-white_95 rounded-md p-3">
                    <FaArrowRight
                        onClick={nextTestimonial}
                    />
                </div>
            </div>
        </div>
    )
}