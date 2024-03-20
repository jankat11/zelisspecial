import Image from "next/image";
import IntroductionTitle from "./introduction-title";


const IntroductionItem = ({ introImage, title, isRight }) => {
  return (
    <div
      className={`md:aspect-square group md:relative md:overflow-hidden aspect-square`}
    >
      <Image
        src={introImage}
        width={900}
        height={900}
        alt="plates"
        className="four-images  md:relative object-cover object-center aspect-square md:aspect-square home-prod-img"
      />

      <IntroductionTitle title={title} isRight={isRight} />
    </div>
  );
};
export default IntroductionItem;
