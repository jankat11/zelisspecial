import Image from "next/image";
import SectionTitle from "../section-title";
import { ReactCompareSlider } from "react-compare-slider";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineRestaurant } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";

const HomeYoutube = () => {
  return (
    <section className="inside-container px-4">
      <div className="py-24  overflow-x-hidden">
        <div className="flex    flex-col sm:flex-row gap-8 items-center xl:justify-between ">
          <div className=" w-full sm:max-w-[50%]">
            <div className="pb-6">
              <SectionTitle
                first={<IoRestaurantOutline fill="#3f2613" size={24} />}
                second={"BİR MUTFAK MASALI"}
                third={false}
                link={"/our-story"}
              />
            </div>
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
          </div>
          <div className=" w-full sm:max-w-[50%]">
            <div className="pb-6">
              <SectionTitle
                first={<FaYoutube fill="#3f2613" size={24} />}
                second={"KANALIMIZI KEŞFEDİN"}
                third={false}
              />
            </div>
            <iframe
              className="w-full aspect-[2/1]"
              id="musicplayer"
              src="https://www.youtube.com/embed/ognDsf-wQck"
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
