"use client";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import HomeInstagram from "./home-instagram";
import InstagramTitle from "../instagram-title";
import { createPortal } from "react-dom";
import { useRef, useState, useEffect } from "react";
import { ReactCompareSlider } from "react-compare-slider";

const HomeYoutube = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [element, setElement] = useState(null);
  const overlayRef = useRef(null);
  const cardRef = useRef(null);
  const handleClose = () => setIsModalOpen(false);

  const handleOverlayClick = (event) => {
    if (event.target === overlayRef.current) {
      handleClose();
    }
  };

  const handleCardClick = (event) => {
    if (event.target === cardRef.current) {
      event.stopPropagation();
    }
  };

  useEffect(() => {
    setElement(document.getElementById("modal"));
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isModalOpen]);

  return (
    <>
      <div className="pt-16 mb-12">
        <section className="inside-container px-4">
          <div className="  overflow-x-hidden">
            <div className="flex  flex-col md:flex-row gap-4 h-full xl:justify-between overflow-x-hidden">
              <div onClick={() => setIsModalOpen(true)} className="md:w-1/2 w-full relative overflow-x-hidden group">
                <div className="home-instagram-logo">
                  <FaYoutube fill="white" size={42} />
                </div>
                <Image
                  width={1000}
                  height={500}
                  src="/homepage/yt-cover.png"
                  alt="youtube"
                  className="home-instagram-img object-cover aspect-[2/1]"
                />
              </div>
              <div className=" w-full">
                <HomeInstagram />
              </div>
            </div>
          </div>
        </section>
      </div>
      {element &&
        createPortal(
          <div
            ref={overlayRef}
            onClick={handleOverlayClick}
            className={`modal-overlay ${isModalOpen ? "flex" : "hidden"}`}
          >
            <div ref={cardRef} onClick={handleCardClick} className="modal-card">
              <div className="card h-full lg:h-auto lg:card-side bg-white shadow-xl overflow-y-auto">
                <InstagramTitle
                  handleClose={handleClose}
                  classes={"lg:hidden"}
                  type="youtube"
                />
                <figure>
                  <iframe
                    className="h-full  w-screen md:w-full md:min-w-[700px] aspect-video"
                    id="musicplayer"
                    src="https://www.youtube.com/embed/ognDsf-wQck"
                  ></iframe>
                </figure>
                <div className="card-body p-0 lg:w-96">
                  <InstagramTitle
                    handleClose={handleClose}
                    classes={"hidden lg:block"}
                    type="youtube"
                  />
                  <div className="p-6 ">
                    <div className="text-sm pb-6   text-gray-500">
                      Yapılışı; 100gr tereyağ, 1sb un kavrulur 1lt süt, 1,25 sb
                      şeker ilave edilir kaynatılır 3-4 ad dövülmüş damla sakızı
                      eklenir ve birkaç dakika daha kaynatılarak ve ateşten
                      alınır Kuplara dökülür ve soğumaya bırakılır( İsteğe göre
                      kup yerine tepside soğutulur, dilimlenerek servis
                      edilebilir) Fıstık ya da fındıkla servis edilir Afiyet
                      olsun...🙂
                      {/* <div className="mt-4">{"imageItem.hash"}</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          element
        )}
    </>
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

{
  /* <iframe
  className="w-full h-full aspect-[2/1] md:aspect-auto"
  id="musicplayer"
  src="https://www.youtube.com/embed/ognDsf-wQck"
  autoPlay
  ></iframe>;
  */
}

{
  /* <svg viewBox="0 0 900 100">
  <path
    d="M0 33L10.7 37C21.3 41 42.7 49 64.2 49C85.7 49 107.3 41 128.8 42C150.3 43 171.7 53 193 57.3C214.3 61.7 235.7 60.3 257 58.7C278.3 57 299.7 55 321.2 51.3C342.7 47.7 364.3 42.3 385.8 43.5C407.3 44.7 428.7 52.3 450 57.2C471.3 62 492.7 64 514.2 61.8C535.7 59.7 557.3 53.3 578.8 47.3C600.3 41.3 621.7 35.7 643 32.7C664.3 29.7 685.7 29.3 707 33C728.3 36.7 749.7 44.3 771.2 49C792.7 53.7 814.3 55.3 835.8 53.5C857.3 51.7 878.7 46.3 889.3 43.7L900 41L900 101L889.3 101C878.7 101 857.3 101 835.8 101C814.3 101 792.7 101 771.2 101C749.7 101 728.3 101 707 101C685.7 101 664.3 101 643 101C621.7 101 600.3 101 578.8 101C557.3 101 535.7 101 514.2 101C492.7 101 471.3 101 450 101C428.7 101 407.3 101 385.8 101C364.3 101 342.7 101 321.2 101C299.7 101 278.3 101 257 101C235.7 101 214.3 101 193 101C171.7 101 150.3 101 128.8 101C107.3 101 85.7 101 64.2 101C42.7 101 21.3 101 10.7 101L0 101Z"
    fill="#fdeed9"
    strokeLinecap="round"
    strokeLinejoin="miter"
  ></path>
</svg> */
}
