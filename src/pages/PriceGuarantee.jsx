import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

const PriceGuarantee = () => {
  return (
    <div>
      <Header />
      <div className="mt-20 sm:ml-[50px] ml-[20px] sm:mr-[50px] mr-[20px] p-10 space-y-10">
        {/* top text section starts */}
        <section>
          <div className="flex flex-col space-y-5 w-full">
            <h4 className="w-2/3 font-bold text-4xl">Prices and price tags</h4>
            <p className="w-2/3">
              At IKEA you get low prices every day! Find all you need to know
              about a product on the price tag in store or on the product pages
              of this website. Whether it's what a product is made from, its
              size assembled or packaged, the how-to-care instructions, or of
              course the price.
            </p>
            <br /> {/* This line break creates a gap */}
            <p className="w-2/3">
              "To design a desk which costs $1,000 is easy for a furniture
              designer, but to design a functional and good desk which costs $50
              can only be done by the very best." - Ingvar Kamprad, founder of
              IKEA
            </p>
          </div>
        </section>
        {/* top text section ends */}
        <hr />
        {/* text and image section starts */}
        <section>
          <div className="flex flex-col space-y-5 w-full">
            <div>
              <h3 className="font-bold text-lg">
                Our prices are the same in store or online
              </h3>
            </div>
            <div className="flex w-full justify-between">
              <div className="w-1/2 space-y-4">
                <p>
                  When you check-out you will see the delivery costs and have
                  the option to add assembly. (Remember, IKEA products are
                  designed to be easy to assemble, so if you don't want to pay
                  why not give it a try?)
                </p>
                <p>
                  And if you are an IKEA Family member, you can buy some
                  products at a special price.
                </p>
                <p>
                  We reserve the right to adjust our prices according to any
                  alteration of GST or any other changes beyond our reasonable
                  control, e.g. major currency fluctuations.
                </p>
                <p>
                  We try our best to ensure that the information on this website
                  is correct at all times. Please also note that some articles
                  may vary slightly in size and colour.
                </p>
              </div>
              <div>
                <img src="https://www.ikea.com/images/df/f6/dff696a5fff1917bfb078a9ab30cc7ac.jpg?f=l" alt=""/>
              </div>
            </div>
          </div>
        </section>
        {/* text and image section ends */}
        <hr />
        {/* last image section starts */}
        <section>
          <div className="flex flex-col space-y-5 w-full">
            <div>
              <h4 className="font-bold text-xl">In store price tags </h4>
            </div>
            <div className="flex space-x-2">
              <div>
                <img src="https://www.ikea.com/images/51/33/51333ade6e31c4e9e11a8d63a22c34c1.png?f=s" alt=""/>
              </div>
              <div>
                <img src="https://www.ikea.com/images/40/87/4087fc25dec3dc2826a7e3d2fed97e80.png?f=s" alt=""/>
              </div>
              <div>
                <img src="https://www.ikea.com/images/f5/6e/f56efea354e8cb3a7c07ed1daf97531b.png?f=s" alt=""/>
              </div>
            </div>
          </div>
        </section>
        {/* last image section ends */}
      </div>
      <Footer/>
    </div>
  );
};

export default PriceGuarantee;
