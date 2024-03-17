import Image from "next/image";

const Hero = () => {
  /*   const storeRef = useRef(); */

  /*   const handleClick = () => {
    storeRef.current.scrollIntoView({ behavior: "smooth" });
  }; */

  return (
    <section className="h-screen md:h-auto  m-0 p-0  relative ">
      <div className="lg:w-full relative z-10 h-screen bg-[#A9A193]">
        <Image
          src={"/hero.jpg"}
          width={2500}
          height={2500}
          priority
          alt="hero"
          className="object-cover object-top w-screen h-screen home-prod-img -z-10"
        />
      </div>
      <div className=" w-full z-20 top-[100%] absolute -translate-y-[210%] xs:-translate-y-[140%] sm:-translate-y-[130%] md:-translate-y-[120%] lg:-translate-y-[100%] xl:-translate-y-[95%]">
        <svg viewBox="0 0 900 600">
          <path
            d="M0 410L11.5 409.3C23 408.7 46 407.3 69 408.7C92 410 115 414 138.2 419.2C161.3 424.3 184.7 430.7 207.8 431C231 431.3 254 425.7 277 425.8C300 426 323 432 346 437.7C369 443.3 392 448.7 415.2 449.5C438.3 450.3 461.7 446.7 484.8 439.3C508 432 531 421 554 420.5C577 420 600 430 623 441C646 452 669 464 692.2 459.3C715.3 454.7 738.7 433.3 761.8 431.8C785 430.3 808 448.7 831 459.2C854 469.7 877 472.3 888.5 473.7L900 475L900 601L888.5 601C877 601 854 601 831 601C808 601 785 601 761.8 601C738.7 601 715.3 601 692.2 601C669 601 646 601 623 601C600 601 577 601 554 601C531 601 508 601 484.8 601C461.7 601 438.3 601 415.2 601C392 601 369 601 346 601C323 601 300 601 277 601C254 601 231 601 207.8 601C184.7 601 161.3 601 138.2 601C115 601 92 601 69 601C46 601 23 601 11.5 601L0 601Z"
            fill="#fff"
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
        </svg>
        <div className=" absolute top-[100%] z-30 w-full ">
          <div className="flex flex-col inside-container relative bottom-4 items-center lg:items-start lg:justify-center  gap-2">
            <p className="hero-text text-secondary pt-0 py-4 font-semibold">
              Zelİş&apos;İn mutfağından lezzetler
            </p>
            <p className="text-center pb-4">
              tamamen ev yapımı, doğal, sağlılı, lezzet dolu yemeklerimizi
              keşfedin ve sipariş verin.
            </p>
            <a className="">
              <button className="button-primary w-full ">
                <div className="flex justify-center items-center gap-1">
                  <span className="font-light text-sm tracking-wider">
                    çeşitlerimizi görün
                  </span>{" "}
                </div>
              </button>
            </a>
          </div>
        </div>
        <div className="w-full lg:hidden h-[22rem] bg-white absolute z-10 -translate-y-1"></div>
      </div>

      {/* <SlArrowDown size={17} className="p-0 m-0" /> */}
    </section>
  );
};
export default Hero;

/*   useEffect(() => {
  let innerHeight = window.innerHeight;
  window.onresize = () => setHeight(window.innerHeight);
  setHeight(innerHeight);
}, [height, innerHeight]); */

{
  /*  <p className="hero-text  pt-0 py-4">
<span className="font-serif text-3xl sm:text-4xl md:text-5xl">t</span>he healing pover of art
</p> */
}
