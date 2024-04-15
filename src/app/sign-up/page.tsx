import TestimonialsCarousel from "@/components/shared/testimonialsCarousel/TestimonialsCarousel";
import NavigationMenu from "@/components/shared/navigationMenu/NavigationMenu";
import SignUpForm from "@/components/signUp/signUpForm/SignUpForm";
import Footer from "@/components/shared/footer/Footer";
import Cta from "@/components/shared/cta/Cta";

export default function LogIn() {
    return (
        <>
            <Cta />
            <NavigationMenu />
            <SignUpForm />
            <TestimonialsCarousel />
            <Footer />
        </>
    );
}