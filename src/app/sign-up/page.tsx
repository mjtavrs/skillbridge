import NavigationMenu from "@/components/shared/navigationMenu/NavigationMenu";
import FormContainer from "@/components/shared/formContainer/FormContainer";
import SignUpForm from "@/components/signUp/signUpForm/SignUpForm";
import Footer from "@/components/shared/footer/Footer";
import Cta from "@/components/shared/cta/Cta";

export default function LogIn() {
    return (
        <>
            <Cta />
            <NavigationMenu />
            <FormContainer>
                <SignUpForm />
            </FormContainer>
            <Footer />
        </>
    );
}