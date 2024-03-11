import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 960 150"
        className="w-full bg-white relative -z-10 translate-y-[30%] "
      >
        <path
          d="M0 102L11.5 101.3C23 100.7 46 99.3 68.8 93.8C91.7 88.3 114.3 78.7 137.2 79.7C160 80.7 183 92.3 205.8 92.5C228.7 92.7 251.3 81.3 274.2 79C297 76.7 320 83.3 342.8 87.3C365.7 91.3 388.3 92.7 411.2 85.7C434 78.7 457 63.3 480 57.7C503 52 526 56 548.8 59.8C571.7 63.7 594.3 67.3 617.2 65C640 62.7 663 54.3 685.8 51.5C708.7 48.7 731.3 51.3 754.2 51.5C777 51.7 800 49.3 822.8 51.2C845.7 53 868.3 59 891.2 60.2C914 61.3 937 57.7 948.5 55.8L960 54L960 151L948.5 151C937 151 914 151 891.2 151C868.3 151 845.7 151 822.8 151C800 151 777 151 754.2 151C731.3 151 708.7 151 685.8 151C663 151 640 151 617.2 151C594.3 151 571.7 151 548.8 151C526 151 503 151 480 151C457 151 434 151 411.2 151C388.3 151 365.7 151 342.8 151C320 151 297 151 274.2 151C251.3 151 228.7 151 205.8 151C183 151 160 151 137.2 151C114.3 151 91.7 151 68.8 151C46 151 23 151 11.5 151L0 151Z"
          fill="#283618"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg>
    <div className="footer footer-center p-10  text-white rounded bg-secondary">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Terms</a>
      </nav>
      <nav>
        <SocialIcons classes="" color="#fff" size={25} />
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by design4theplanet</p>
      </aside>
    </div>
    </div>
  );
};
export default Footer;
