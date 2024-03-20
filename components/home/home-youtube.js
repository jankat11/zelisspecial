import Image from "next/image";
import SectionTitle from "../section-title";
import { ReactCompareSlider } from "react-compare-slider";
import { FaYoutube } from "react-icons/fa";

const HomeYoutube = () => {
  return (
    <section className="inside-container px-4">
      <div className="py-24  overflow-x-hidden">
        <div className="pb-6 max-w-5xl xl:max-w-7xl mx-auto">
          <SectionTitle
            first={<FaYoutube fill="#283618" size={24} />}
            second={"KANALIMIZI KEŞFEDİN"}
            third={false}
            classes={"xl:ps-8"}
          />
        </div>
        <div className="flex border flex-col sm:flex-row gap-8 items-center xl:justify-between ">
          <div className=" w-full sm:max-w-[50%]">
            <iframe
              className="w-full aspect-[2/1]"
              id="musicplayer"
              src="https://www.youtube.com/embed/ognDsf-wQck"
            ></iframe>
          </div>
          <div className=" w-full sm:max-w-[50%]">
            <iframe
              className="w-full aspect-[2/1]"
              id="musicplayer"
              src="https://www.youtube.com/embed/UMFuSEs8apA"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeYoutube;

{
  /* <div className=" w-full sm:max-w-[50%]">
<iframe
  className="w-full aspect-[2/1]"
  id="musicplayer"
  src="https://www.youtube.com/embed/QuNhTLVgV2Y"
></iframe>
</div> */
}

{
  /* <ReactCompareSlider
itemOne={
  <Image
    width={800}
    height={400}
    src="/homepage/compare2.jpg"
    alt="Image one"
  />
}
itemTwo={
  <Image
    width={800}
    height={400}
    src="/homepage/compare1.jpg"
    alt="Image two"
  />
}
/> */
}
