import NavigationMenu from "@/components/shared/navigationMenu/NavigationMenu";
import FormContainer from "@/components/shared/formContainer/FormContainer";
import LoginForm from "@/components/login/loginForm/LoginForm";
import Footer from "@/components/shared/footer/Footer";
import Cta from "@/components/shared/cta/Cta";

export default function LogIn() {
    return (
        <>
            <Cta />
            <NavigationMenu />
            <FormContainer>
                <LoginForm />
            </FormContainer>
            <Footer />
        </>
    );
}