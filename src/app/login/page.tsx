import NavigationMenu from "@/components/shared/navigationMenu/NavigationMenu";
import LoginForm from "@/components/login/loginForm/LoginForm";
import Footer from "@/components/shared/footer/Footer";
import Cta from "@/components/shared/cta/Cta";
import TestimonialsCarousel from "@/components/shared/testimonialsCarousel/TestimonialsCarousel";

export default function LogIn() {
    return (
        <>
            <Cta />
            <NavigationMenu />
            <div className="flex flex-col laptop:flex-row laptop:gap-20 laptop:mx-20 laptop:items-center">
                <div className="laptop:order-last laptop:flex-1">
                    <LoginForm />
                </div>
                <div className="laptop:flex-1">
                    <TestimonialsCarousel />
                </div>
            </div>
            <Footer />
        </>
    );
}