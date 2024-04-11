"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import TestimonialsCard from "@/components/home/testimonialsCard/TestimonialsCard";
import testimonials from "@/data/testimonialsData";

type Props = {
    currentIndex: number
}

export default function MapTestimonials({ currentIndex }: Props) {

    const [visibleIndex, setVisibleIndex] = useState(0);

    useEffect(() => {
        setVisibleIndex(currentIndex);
    }, [currentIndex]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {testimonials.map((testimonial, index) => (
                <TestimonialsCard
                    key={index}
                    userTestimonial={testimonial.testimonial}
                    userPicture={testimonial.profile_pic}
                    userFullName={testimonial.name}
                    isVisible={index === visibleIndex}
                />
            ))}
        </motion.div>
    );
}