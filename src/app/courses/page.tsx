import CoursesFullContainer from "@/components/courses/coursesFullContainer/CoursesFullContainer";
import Cta from "@/components/shared/cta/Cta";
import Footer from "@/components/shared/footer/Footer";
import NavigationMenu from "@/components/shared/navigationMenu/NavigationMenu";
import PageHero from "@/components/shared/pageHero/PageHero";


export default function Courses() {
    return (
        <>
            <Cta />
            <NavigationMenu />
            <PageHero
                pageTitle="Online Courses on Design and Development"
                pageDescription="Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey."
            />
            <CoursesFullContainer />
            <Footer />
        </>
    );
}