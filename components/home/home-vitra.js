import Image from "next/image";
import Link from "next/link";

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
          <Link href="/our-story">
            <button className="button-secondary rounded-full text-sm tracking-wider">
              daha fazla bilgi edinin
            </button>
          </Link>
        </div>
        <video
          className="object-cover min-h-[480px] md:aspect-video"
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
      <div className="w-full py-8 md:py-0  relative bottom-[1px] flex flex-col justify-center items-center bg-secondaryLight">
        <p className=" text-center md:pt-8 md:text-lg text-white xl:pt-16 "> ürünlerimizle ilgili bilgi alabilir ve sipariş verebilirsiniz.</p>
        <a href="" className=" font-medium text-lg md:text-xl underline text-white relative z-20  rounded-full mt-4">
          iletişime geçin
        </a>
      </div>
      <Image 
        src="/homepage/bottom.png"
        width={2500}
        height={100}
        alt="hero"
        className="w-full relative bottom-[2px] z-20"
      />
      

    </section>
  );
};
export default HomeVitra;


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