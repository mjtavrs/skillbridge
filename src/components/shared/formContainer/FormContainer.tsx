import { ReactNode } from "react";
import TestimonialsCarousel from "../testimonialsCarousel/TestimonialsCarousel";

type Props = {
    children: ReactNode
}

export default function FormContainer({ children }: Props) {
    return (
        <div className="flex flex-col laptop:flex-row laptop:gap-20 laptop:mx-20 laptop:items-center">
            <div className="laptop:order-last laptop:flex-1">
                {children}
            </div>
            <div className="laptop:flex-1">
                <TestimonialsCarousel />
            </div>
        </div>
    );
}