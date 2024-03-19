import Image from "next/image";
import SectionTitle from "../SectionTitle";
import { ReactCompareSlider } from "react-compare-slider";

const CompareImages = () => {
  return (
    <section className="inside-container border px-0 md:px-4">
      <div className="py-24  overflow-x-hidden">
        <div className="pb-6 max-w-5xl xl:max-w-7xl mx-auto">
          <SectionTitle
            first={"THE HEALING POVER OF ART"}
            second={"HAKKINDA"}
            third={true}
            link={"/our-story"}
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-4 items-center xl:justify-between ">
          <ReactCompareSlider
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
          />
          <div className=" w-full sm:max-w-[50%]">
            <iframe
              className="w-full aspect-[2/1]"
              id="musicplayer"
              src="https://www.youtube.com/embed/QuNhTLVgV2Y"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CompareImages;
