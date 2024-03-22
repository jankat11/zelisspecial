import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { BiDownArrow } from "react-icons/bi";

const categories = [
  "KURU TATLI",
  "YAŞ TATLI & PASTA",
  "BÖREK VE ÇÖREKLER",
  "ARA SICAK",
  "SULU YEMEK",
  "ŞEFİN TAVSİYESİ",
  "ÇORBA",
];

const SidebarContent = ({ handleMenuClick }) => {
  return (
    <section className="  text-lg font-raleway font-semibold">
      <li className="py-4 flex items-baseline" onClick={handleMenuClick}>
        <a className="nav-link">ÇEŞİTLERİMİZ</a>
        <BiDownArrow size={17} fill="#fff" className="p-0 m-2" />
      </li>
      <ul className="px-4 text-base">
        {categories.map((category, i) => (
          <li className="py-2" key={i} onClick={handleMenuClick}>
            <a className="nav-link">{category}</a>
          </li>
        ))}
      </ul>
      <ul className="mt-6 py-6 pt-8 border-t border-white/40">
        <li onClick={handleMenuClick}>
          <Link href="" className="nav-link  whitespace-nowrap ">
            <span>HAKKINDA</span>
          </Link>
        </li>
        <li className="py-6" onClick={handleMenuClick}>
          <a className="nav-link">
            <span>SİPARİŞ</span>
          </a>
        </li>
        {/*  <li className="" onClick={handleMenuClick}>
          <a className="nav-link lowercase">info@design4theplanet.com</a>
        </li> */}
      </ul>
    </section>
  );
};
export default SidebarContent;
