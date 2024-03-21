import Image from "next/image";

const HomeVitra = () => {
  return (
    <section className="mb-28  px-0 ">
      <div className="relative z-10">
        <div className="relative z-10 translate-y-[90%]">
          <svg viewBox="0 0 900 100" className="border-t border-white">
            <path
              d="M0 34L11.5 39.5C23 45 46 56 69 56.7C92 57.3 115 47.7 138.2 43.7C161.3 39.7 184.7 41.3 207.8 44.3C231 47.3 254 51.7 277 50C300 48.3 323 40.7 346 42.5C369 44.3 392 55.7 415.2 59.3C438.3 63 461.7 59 484.8 55.2C508 51.3 531 47.7 554 44.2C577 40.7 600 37.3 623 39.5C646 41.7 669 49.3 692.2 55C715.3 60.7 738.7 64.3 761.8 62.8C785 61.3 808 54.7 831 52.8C854 51 877 54 888.5 55.5L900 57L900 0L888.5 0C877 0 854 0 831 0C808 0 785 0 761.8 0C738.7 0 715.3 0 692.2 0C669 0 646 0 623 0C600 0 577 0 554 0C531 0 508 0 484.8 0C461.7 0 438.3 0 415.2 0C392 0 369 0 346 0C323 0 300 0 277 0C254 0 231 0 207.8 0C184.7 0 161.3 0 138.2 0C115 0 92 0 69 0C46 0 23 0 11.5 0L0 0Z"
              fill="#fff"
              strokeLinecap="round"
              strokeLinejoin="miter"
            ></path>
          </svg>
        </div>
        <div className="w-full limited-edition z-20">
          <p className="hero-text pb-0  inside-container text-xl sm:text-3xl ">
            BİR MUTFAK MASALI
          </p>
          <button className="button-secondary rounded-full text-sm tracking-wider">
            daha fazla bilgi edinin
          </button>
        </div>
        <video
          className="object-cover  aspect-square md:aspect-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="homepage/sefin.mp4" type="video/mp4" />
          <source src="homepage/sefin.webm" type="video/webm" />
          Your browser is not supported
        </video>
      </div>

      <div className="w-full py-8 md:py-0  relative flex flex-col justify-center items-center bg-secondaryLight">
        <p className=" text-center md:pt-8 md:text-lg text-white xl:pt-16 "> ürünlerimizle ilgili bilgi alabilir ve sipariş verebilirsiniz.</p>
        <a href="" className=" font-medium text-lg md:text-xl underline text-white relative z-20  rounded-full mt-4">
          iletişime geçin
        </a>
      </div>
      
    </section>
  );
};
export default HomeVitra;

/* const HomeVitra = () => {
  return (
    <section className="  px-0 ">
      <div className="relative overflow-hidden cursor-pointer ">
        <div className="relative z-10 translate-y-[90%]">
          <svg viewBox="0 0 900 100" className="border-t border-white">
            <path
              d="M0 41L8.3 39.3C16.7 37.7 33.3 34.3 50 36.3C66.7 38.3 83.3 45.7 100 46.8C116.7 48 133.3 43 150 45C166.7 47 183.3 56 200 55.3C216.7 54.7 233.3 44.3 250 43.2C266.7 42 283.3 50 300 50.3C316.7 50.7 333.3 43.3 350 44C366.7 44.7 383.3 53.3 400 53.2C416.7 53 433.3 44 450 43.3C466.7 42.7 483.3 50.3 500 52.2C516.7 54 533.3 50 550 47.2C566.7 44.3 583.3 42.7 600 44.3C616.7 46 633.3 51 650 54.2C666.7 57.3 683.3 58.7 700 59.8C716.7 61 733.3 62 750 57.3C766.7 52.7 783.3 42.3 800 39.2C816.7 36 833.3 40 850 40.7C866.7 41.3 883.3 38.7 891.7 37.3L900 36L900 0L891.7 0C883.3 0 866.7 0 850 0C833.3 0 816.7 0 800 0C783.3 0 766.7 0 750 0C733.3 0 716.7 0 700 0C683.3 0 666.7 0 650 0C633.3 0 616.7 0 600 0C583.3 0 566.7 0 550 0C533.3 0 516.7 0 500 0C483.3 0 466.7 0 450 0C433.3 0 416.7 0 400 0C383.3 0 366.7 0 350 0C333.3 0 316.7 0 300 0C283.3 0 266.7 0 250 0C233.3 0 216.7 0 200 0C183.3 0 166.7 0 150 0C133.3 0 116.7 0 100 0C83.3 0 66.7 0 50 0C33.3 0 16.7 0 8.3 0L0 0Z"
              fill="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="miter"
            ></path>
          </svg>
        </div>
        <div className="w-full limited-edition">
          <p className="hero-text  inside-container relative z-30 sm:left-16 xl:left-0 text-left text-3xl sm:text-3xl md:text-4xl xl:text-5xl">
            şefin tavsiyesi
          </p>
        </div>
        <Image
          src={"/homepage/bsd.jpg"}
          width={2000}
          height={2000}
          alt="vitra"
          className="object-cover filter sm:object-center md:aspect-[2/1] lg:aspect-[27/10] aspect-[6/5] object-right home-prod-img"
        />
        <div className="relative z-10 -translate-y-[90%]">
          <svg viewBox="0 0 900 100" className="">
            <path
              d="M0 57L8.3 58.7C16.7 60.3 33.3 63.7 50 61.7C66.7 59.7 83.3 52.3 100 51.2C116.7 50 133.3 55 150 53C166.7 51 183.3 42 200 42.7C216.7 43.3 233.3 53.7 250 54.8C266.7 56 283.3 48 300 47.7C316.7 47.3 333.3 54.7 350 54C366.7 53.3 383.3 44.7 400 44.8C416.7 45 433.3 54 450 54.7C466.7 55.3 483.3 47.7 500 45.8C516.7 44 533.3 48 550 50.8C566.7 53.7 583.3 55.3 600 53.7C616.7 52 633.3 47 650 43.8C666.7 40.7 683.3 39.3 700 38.2C716.7 37 733.3 36 750 40.7C766.7 45.3 783.3 55.7 800 58.8C816.7 62 833.3 58 850 57.3C866.7 56.7 883.3 59.3 891.7 60.7L900 62L900 101L891.7 101C883.3 101 866.7 101 850 101C833.3 101 816.7 101 800 101C783.3 101 766.7 101 750 101C733.3 101 716.7 101 700 101C683.3 101 666.7 101 650 101C633.3 101 616.7 101 600 101C583.3 101 566.7 101 550 101C533.3 101 516.7 101 500 101C483.3 101 466.7 101 450 101C433.3 101 416.7 101 400 101C383.3 101 366.7 101 350 101C333.3 101 316.7 101 300 101C283.3 101 266.7 101 250 101C233.3 101 216.7 101 200 101C183.3 101 166.7 101 150 101C133.3 101 116.7 101 100 101C83.3 101 66.7 101 50 101C33.3 101 16.7 101 8.3 101L0 101Z"
              fill="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="miter"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};
export default HomeVitra; */




{/* <div className="relative bottom-[1px] z-20 flex">
        <svg className="relative left-[1px]" viewBox="0 0 900 100">
          <path
            d="M0 4L50 15.8C100 27.7 200 51.3 300 58.7C400 66 500 57 600 61C700 65 800 82 850 90.5L900 99L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z"
            fill="#a98360"
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
        </svg>
        <svg className="svg-undervideo-second-part" viewBox="0 0 900 100">
          <path
            d="M0 4L50 15.8C100 27.7 200 51.3 300 58.7C400 66 500 57 600 61C700 65 800 82 850 90.5L900 99L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z"
            fill="#a98360"
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
        </svg>
      </div> */}