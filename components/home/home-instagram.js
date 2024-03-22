import SectionTitle from "../section-title";
import InstagramModal from "../instagram-modal";
import { FaInstagram } from "react-icons/fa";

const data = [
  {
    image: "/homepage/insta1.png",
    description:
      "",
    hash: "#truff #kek #çikolata #krema #fıstık #fındık #kahve #",
  },
  {
    image: "/homepage/insta2.png",
    description:
      "",
    hash: "#pide #susamlı #yumurtalı #",
  },
];

const HomeInstagram = () => {
  return (
    <section className="">
      <div className="flex  gap-4">
        {data.map((imageItem, i) => (
          <div key={i}>
            <InstagramModal imageItem={imageItem} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default HomeInstagram;
