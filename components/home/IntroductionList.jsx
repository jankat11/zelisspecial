/* import { shopifyFetch, storefront } from "@/utils"; */

import IntroductionItem from "../IntroductionItem";

const IntroductionList = () => {
  return (
    <section
      id="home-store"
      className="relative z-20  inside-container px-0 md:px-4"
    >
      <div className="grid relative md:grid-cols-3 gap-8">
        <IntroductionItem
          title={"kuru tatlı"}
          introImage={"/homepage/intro2.jpg"}
        />
        <IntroductionItem
          title={"yaş tatlı & pasta"}
          introImage={"/homepage/intro4.jpg"}
        />
        <IntroductionItem
          title={"börek & çörek"}
          introImage={"/homepage/intro5.jpg"}
        />
      </div>
      {/*       <p className="introTitle inside-container ">
        <span className=" ">W</span>e value our planet and are dedicated to
        contributing to its well-being by upcycling waste materials and turning
        them into one of a kind gadgets, utensils and art objects.
      </p> */}
    </section>
  );
};
export default IntroductionList;

{
  /*           <div className="overflow-hidden sm:rounded-sm">
            <ReactCompareImage
              leftImage="homepage/yastik.png"
              rightImage="homepage/yumak.png"
            />
            </div> */
}

/* const products = `
    query Products {
      products(first: 6) {
        edges {
          node {
            title
            handle
            tags
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 1) {
              edges {
                node {
                  transformedSrc
                  altText
                }
              }
            }
          }
        }
      }
    }
    `;
    */
{
  /* <div className="grid relative sm:top-24 p-4 sm-p-0 sm:grid-cols-3  sm:mx-8">
          <div className="home-images-container sm:top-12 sm:left-24 z-30 ">
            <div className="product-layer"></div>
            <Image
            src="/homepage/p3.png"
              width={900}
              height={900}
              alt="plates"
              className="home-images relative "
              />
              </div>
              
              <div className="home-images-container z-20 ">
              <div className="product-layer"></div>
              <Image
              src="/homepage/p4.png"
              width={900}
              height={900}
              alt="plates"
              className="home-images object-bottom"
            />
          </div>
          <div className="home-images-container sm:right-24 sm:bottom-12 ">
            <div className="product-layer"></div>
            <Image
              src="/homepage/ekose2.png"
              width={900}
              height={900}
              alt="plates"
              className="home-images object-bottom"
              />
              </div>
        </div> */
}

{
  /* <div className="carousel carousel-center  p-4 py-0 space-x-4 sm:space-x-0 border-none">
                    <div className="carousel-item w-2/5 md:w-[28%] border-none">
                      <div className="sm:p-4 ">
                      <Image
                      src={"/plates/p1.png"}
                      style={{ width: "700px", height: "auto" }}
                          quality={100}
                          width={700}
                          height={825}
                          className="rounded-md shadow"
                          alt="photo"
                        />
                        <div className="homeproducts-info">
                          <p>büyük tabak</p>
                          <p>500tl</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item  w-2/5 md:w-[28%] ">
                      <div className="sm:p-4 ">
                        <Image
                          src={"/plates/p2.png"}
                          style={{ width: "700px", height: "auto" }}
                          quality={100}
                          width={700}
                          height={825}
                          className="rounded-md object-cover shadow"
                          alt="photo"
                        />
                        <div className="homeproducts-info">
                        <p>büyük tabak</p>
                          <p>500tl</p>
                          </div>
                          </div>
                          </div>
                    <div className="carousel-item  w-2/5 md:w-[28%] ">
                    <div className="sm:p-4 ">
                    <Image
                    src={"/plates/p3.png"}
                    style={{ width: "700px", height: "auto" }}
                          quality={100}
                          width={700}
                          height={825}
                          className="rounded-md object-cover shadow"
                          alt="photo"
                          />
                        <div className="homeproducts-info">
                          <p>büyük tabak</p>
                          <p>500tl</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item  w-2/5 md:w-[28%]">
                      <div className="sm:p-4 ">
                        <Image
                          src={"/plates/p4.png"}
                          style={{ width: "700px", height: "auto" }}
                          quality={100}
                          width={700}
                          height={825}
                          className="rounded-md object-cover shadow"
                          alt="photo"
                        />
                        <div className="homeproducts-info">
                          <p>büyük tabak</p>
                          <p>500tl</p>
                        </div>
                      </div>
                      </div>
                    </div> */
}
{
  /* <div className="mt-24">
              <div className="overflow-hidden sm:rounded-sm flex flex-col sm:flex-row justify-around gap-4 xl:gap-12  mx-auto">
                  <ReactCompareImage
                    leftImage="homepage/comp1.png"
                    rightImage="homepage/comp2.png"
                    sliderPositionPercentage={0.3}
                  />
                  <ReactCompareImage
                  leftImage="homepage/comp3.png"
                  rightImage="homepage/comp4.png"
                  sliderPositionPercentage={0.3}
                  />
                </div>
              </div> */
}

/*   useEffect(() => {
                storefront(products);
              }, []); */

/*               <div className="introTitle flex flex-col md:gap-8 sm:flex-row items-center md:py-36 xl:py-44">
              <div className="flex relative">
                <p className="md:pl-10 relative lg:left-8 lg:pl-0">
                  <span className=" ">W</span>e value our planet and are dedicated to
                  contributing to its well-being by upcycling waste materials and
                  turning them into one of a kind gadgets, utensils and art objects.
                </p>
                <div className="border-r-2 opacity-70 -right-12 xl:-right-16 top-0 border-primary/30 h-full absolute"></div>
              </div>
              <Image
                src="/brand3.png"
                width={700}
                height={500}
                quality={100}
                className="lg:pl-32 md:px-16 lg:px-16 relative lg:right-12 xl:right-8 md:h-48 hidden md:block xl:h-64 w-auto opacity-60"
                alt="brand"
              />
            </div> */
