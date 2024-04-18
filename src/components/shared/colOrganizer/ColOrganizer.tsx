"use client";
import { useEffect, useState, ReactNode } from "react";

type Props = {
    colNumber: number,
    children: ReactNode
}

export default function ColOrganizer({ colNumber, children }: Props) {

    const [columns, setColumns] = useState<number>(1);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setColumns(window.innerWidth < 1400 ? 1 : colNumber)
        }
    }, []);

    const customStyles = {
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: "20px",
        marginTop: "40px"
    };

    return (
        <div style={customStyles}>
            {children}
        </div>
    );
}