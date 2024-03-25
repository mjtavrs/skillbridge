import PricingContainer from "@/components/pricing/pricingContainer/PricingContainer";
import NavigationMenu from "@/components/shared/navigationMenu/NavigationMenu";
import PageHero from "@/components/shared/pageHero/PageHero";
import Footer from "@/components/shared/footer/Footer";
import Cta from "@/components/shared/cta/Cta";

export default function Pricing() {
    return (
        <>
            <Cta />
            <NavigationMenu />
            <PageHero
                pageTitle="Our Pricings"
                pageDescription="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
            />
            <PricingContainer />
            <Footer />
        </>
    );
}