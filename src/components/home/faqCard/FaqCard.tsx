"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { FaPlus, FaArrowRight } from "react-icons/fa6";

type Props = {
    FaqTitle: string,
    FaqAnswer: string,
    FaqLink: string,
    FaqLinkTitle: string
}

export default function FaqCard() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="border-[1px] border-white_95 p-6 rounded-xl">
            <div className="overflow-hidden">
                <div className="flex items-center gap-8">
                    <h3 className="text-grey_15 font-medium leading-[150%]">
                        Can I enroll in multiple courses at once?
                    </h3>
                    <div
                        className="bg-orange_95 p-3 inline-block h-11 rounded-md"
                        onClick={toggleAnswer}
                    >
                        <motion.div
                            initial={false}
                            animate={{
                                rotate: isOpen ? -45 : 0
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaPlus
                                className="text-xl text-grey_15"
                            />
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={false}
                    animate={{
                        height: isOpen ? "20px" : 0
                    }}
                >
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, height: isOpen ? "auto" : 0, overflow: "hidden" }}
                    animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="flex flex-col gap-5 border-t-[1px] border-white_95 pt-5">
                        <p className="text-sm text-grey_30 leading-[150%]">
                            Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.
                        </p>
                        <div className="bg-white_97 flex items-center border-[1px] border-white_95 px-5 py-3 rounded-md">
                            <h4 className="text-sm text-grey_20 font-medium leading-[150%]">
                                Enrollment Process for Different Courses
                            </h4>
                            <Link
                                href="#"
                            >
                                <div className="bg-white p-3 rounded-[9999px]">
                                    <FaArrowRight
                                        className="text-xl text-grey_30"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}