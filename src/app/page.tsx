import CtaHome from "@/components/home/ctaHome/CtaHome";
import Cta from "@/components/shared/cta/Cta";
import NavigationMenu from "@/components/shared/navigationMenu/NavigationMenu";

export default function Home() {
  return (
    <>
      <Cta />
      <NavigationMenu />
      <CtaHome />
    </>
  );
}
