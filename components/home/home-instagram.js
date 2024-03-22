import SectionTitle from "../section-title";
import InstagramModal from "../instagram-modal";
import { FaInstagram } from "react-icons/fa";

const data = [
  {
    image: "/homepage/insta1.png",
    description:
      "Hayat dönüştürünce güzel! İleri dönüştürülmüş kağıt hamurundan tepsi. Toksik olmayan doğa dostu boya ve cila kullanılarak elde üretilmiştir. Recycling is out, upcycling is in… Upcycled and hand-made papier-maché tray. Coloured and varnished with non-toxic materials.",
    hash: "#upcycle #papiermache #papiermaché #homedecor #gift #ecofriendly",
  },
  {
    image: "/homepage/insta2.png",
    description:
      "Atık kumaşlardan elde üretilmiş yastık kılıfları. Pillow cases made out of waste fabrics.",
    hash: "#handmade #pillowcase #homedecor #gift #ileridönüşüm #elyapımı #evdekorasyonu #yastık #hediye",
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
