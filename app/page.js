import Hero from "../components/home/hero";
import IntroductionList from "../components/home/introduction-list";
/* import Map from "@/components/map/Map"; */
import HomeProducts from "@/components/home/home-products";
import HomeVitra from "@/components/home/home-vitra";
import HomeInstagram from "@/components/home/home-instagram";
import HomeYoutube from "@/components/home/home-youtube";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroductionList />
      <HomeVitra />
      <div className="lg:pb-32 lg:pt-24 md:pb-8">
        <IntroductionList sublist={true} />
      </div>
      <HomeYoutube />
    </>
  );
}

{
  /* <HomeProducts products={"newArrivals"} title={"NEW ARRIVALS"} /> */
}
{
  /*  <HomeProducts products={"plates"}  title={"PLATES"} /> */
}
{
  /*    <HomeProducts products={"bags"} title={"BAGS"} /> */
}
