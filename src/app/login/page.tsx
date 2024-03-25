import NavigationMenu from "@/components/shared/navigationMenu/NavigationMenu";
import Footer from "@/components/shared/footer/Footer";
import Cta from "@/components/shared/cta/Cta";
import Form from "@/components/shared/form/Form";

export default function LogIn() {
    return (
        <>
            <Cta />
            <NavigationMenu />
            <Form />
            <Footer />
        </>
    );
}