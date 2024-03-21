import Image from "next/image";

const HomeVitra = () => {
  return (
    <section className="  px-0 ">
      <div className="relative overflow-hidden ">
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
        <div className="w-full limited-edition z-20">
          <p className="hero-text  inside-container relative z-30 sm:left-16 xl:left-0 text-left text-3xl sm:text-3xl md:text-4xl xl:text-5xl">
            BİR MUTFAK MASALI
          </p>
          <button className="button-secondary rounded-full text-sm tracking-wider">
            zeliş&apos;in mutfağı hakkında daha fazla bilgi edin
          </button>
        </div>
        <video className="object-cover  aspect-[6/5] md:aspect-video" autoPlay muted loop >
          <source src="homepage/sefin.mp4" type="video/mp4" />
          <source type="video/webm" />
          Your browser is not supported
        </video>
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