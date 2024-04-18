"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { CiClock2 } from "react-icons/ci";

type ClassData = {
    title: string,
    duration: string
}

type Props = {
    classes: Array<ClassData>
}

export default function CurriculumClass({ classes }: Props) {

    const [selectedItems, setSelectedItems] = useState(Array(classes.length).fill(false));

    const selectClass = (index: number) => {
        const newSelectedItems = [...selectedItems];
        newSelectedItems[index] = !selectedItems[index];
        setSelectedItems(newSelectedItems);
    }

    const variants = {
        selected: {
            borderWidth: "1px",
            borderColor: "#ffd499",
            boxShadow: "0 0 0 3px rgba(255, 244, 229, 1)"
        },
        unselected: {
            borderWidth: "1px",
            borderColor: "#f1f1f3",
            boxShadow: "none"
        }
    }

    const durationVariants = {
        selected: {
            backgroundColor: "#ffeacc"
        },
        unselected: {
            backgroundColor: "#f7f7f8"
        }
    }

    return (
        <>
            {
                classes.map(({ title, duration }, index) => (
                    <motion.div
                        onClick={() => selectClass(index)}
                        initial={false}
                        animate={selectedItems[index] ? "selected" : "unselected"}
                        variants={variants}
                        className="flex flex-col laptop:flex-row laptop:items-center gap-6 p-6 rounded-md"
                        key={index}
                    >
                        <div className="laptop:flex-1">
                            <h4 className="text-grey_20 font-medium leading-[150%]">
                                {title}
                            </h4>
                            <p className="text-grey_35 text-sm leading-[150%]">
                                Lesson 0{index + 1}
                            </p>
                        </div>
                        <motion.div
                            initial={false}
                            animate={selectedItems[index] ? "selected" : "unselected"}
                            variants={durationVariants}
                            className="bg-white_97 flex items-center gap-1 p-3 text-grey_35 text-sm rounded-md w-fit laptop:h-10"
                        >
                            <div>
                                <CiClock2
                                    className="text-xl"
                                />
                            </div>
                            <p>{duration}</p>
                        </motion.div>
                    </motion.div>
                ))
            }
        </>
    );
}