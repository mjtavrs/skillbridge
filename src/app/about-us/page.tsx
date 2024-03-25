import AboutContainer from "@/components/aboutUs/aboutContainer/AboutContainer";
import NavigationMenu from "@/components/shared/navigationMenu/NavigationMenu";
import PageHero from "@/components/shared/pageHero/PageHero";
import Footer from "@/components/shared/footer/Footer";
import Cta from "@/components/shared/cta/Cta";


export default function AboutUs() {
    return (
        <>
            <Cta />
            <NavigationMenu />
            <PageHero
                pageTitle="About Skillbridge"
                pageDescription="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."
            />
            <AboutContainer />
            <Footer />
        </>
    );
}