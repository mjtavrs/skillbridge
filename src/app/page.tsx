import Companies from "@/components/home/companies/Companies";
import Hero from "@/components/home/hero/Hero";
import Cta from "@/components/shared/cta/Cta";
import NavigationMenu from "@/components/shared/navigationMenu/NavigationMenu";

export default function Home() {
  return (
    <>
      <Cta />
      <NavigationMenu />
      <Hero />
      <Companies />
    </>
  );
}
