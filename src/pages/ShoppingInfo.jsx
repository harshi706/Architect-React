import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

const discoverMore = [
    "Customer service",
    "Frequently Asked Questions",
    "We can help you shop"
]

const ShoppingInfo = () => {
  return (
    <div>
      <Header />
      <div className="mt-20 sm:ml-[50px] ml-[20px] sm:mr-[50px] mr-[20px] p-10 space-y-10">
        <h1 className="font-bold text-4xl">Shopping at AYATRIO</h1>
        <section>
          <div className="flex w-full justify-between space-x-2">
            <div className="flex w-1/2">
              <div className="space-y-10">
                <p className="font-bold text-lg">
                  There are a few ways to shop at IKEA. Some of them let you
                  shop from the comfort of your own home – although we’ll always
                  have your favorite Swedish delicacy available at our
                  restaurant for those that choose to visit the IKEA store.{" "}
                </p>
                <p className="font-bold text-lg">
                  Discover how to shop at IKEA and how IKEA can come to you,
                  whether you’re looking for any support buy online, over the
                  phone, or plan your dream home.
                </p>
              </div>
            </div>
            <div className="flex w-1/2">
              <div>
                <img src="https://www.ikea.com/images/47/a5/47a5903aaf7d1c233ef9d16c3c7aa640.png?f=l" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="font-bold text-xl mb-10">
            AYATRIO stores and order and collection point
          </h2>
          <div className="flex w-full justify-between space-x-5">
            <div className="flex w-1/2">
              <div>
                <img src="https://www.ikea.com/images/bb/99/bb993818c7cbcae700212d260d717bbe.png?f=l" />
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <div className="space-y-5">
                <p className="">
                  From the colour of your kitchen cabinets to the height of your
                  houseplant, with IKEA, you’re in complete control. At our
                  stores, you can get inspired, touch and feel our products, get
                  professional help from one of our IKEA co-workers and get
                  inspired.
                </p>
                <p className="">
                  At our larger stores, you can buy products to take home the
                  same day or collect products ordered online. They have
                  everything you need for a family day out, from veggie balls to
                  a playroom for the little ones.
                </p>
                <p>
                  In smaller city-stores, you can touch and try products from
                  our range, order for delivery or collection and buy selected
                  products to take home the same day.
                </p>
                <p className="font-semibold">IKEA Large store </p>
                <p>
                  New to IKEA - At the entrance, you will be greeted by our
                  friendly co-worker. Reach out to them for any information you
                  need. We like to make visiting IKEA both fun for kids and
                  easier for grown-ups. Visit Småland supervised play area
                  located near the entrance where your kids can play for free
                  for 45 minutes while you can enjoy shopping in-store.
                </p>
                <p>
                  Before you start shopping, take a yellow bag or basket to
                  carry the items you like from the showroom area, pick the blue
                  map and pencil or use the IKEA App to navigate and create your
                  shopping list.
                </p>
                <p>
                  {" "}
                  Head to the showroom area on first floor to start your
                  shopping journey at IKEA and get inspired by the number of
                  room settings.
                </p>
                <p>
                  {" "}
                  Like something? Make a note, click a picture of the product
                  tag or add to your shopping list on our website or app on your
                  phone.
                </p>
                <p>
                  {" "}
                  You can also use our self-service points located all over the
                  store to create your shopping list and easily find product
                  locations. Self-service points can also be used to create and
                  place order for large furniture.
                </p>
                <p>
                  {" "}
                  Follow the arrows on the floor to navigate your way through
                  the store or locate a specific area on the map or navigation
                  boards placed all over the store.
                </p>
                <p>
                  {" "}
                  Did you know that our prices are always lower than the MRP?
                  Our price signs, tags, and labels will tell you everything you
                  need to know. You will get product name, details, and price
                  along with where to pick up the item·
                </p>
                <ul className="p-4 space-y-2">
                  <li>
                    &#8226; Red tag means you can pick it up at Market Hall or
                    the self-serve furniture area using the location info
                    mentioned on the tag·
                  </li>
                  <li>
                    &#8226; Yellow tag means you need to contact our co-workers
                    at the info counter
                  </li>
                </ul>
                <p>
                  Feeling Hungry? Take a break at the restaurant and relish our
                  Swedish as well as local cuisines
                </p>
                <p>
                  Step down to the ground floor and exchange your shopping bag
                  with a basket trolley. Proceed to the market hall, explore our
                  product range and pick items as you move.
                </p>
                <p>
                  Go to the self-serve area to pick up the furniture you have
                  chosen in the showroom – refer your notes for exact location
                  (Aisle and Rack numbers)
                </p>
                <p>
                  You can take it home with you or book delivery and/or assembly
                  services with one of our coworkers in the store.{" "}
                </p>
                <p>
                  Proceed to the billing counter to make the payment for your
                  purchase. Carry your own bags or buy our re-usable IKEA bags
                  at the counter.
                </p>
                <p>
                  Collect your pickup orders from our Customer Service Area or
                  head there if you have any queries / returns and exchanges or
                  need to book any services you might have missed.
                </p>
                <p>
                  Grab a quick bite or take away items from your Swedish Bistro
                  and Swedish Food Market while on your way out.
                </p>
              </div>
              <div className="flex flex-col space-y-10 items-start mt-10">
                <button className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">
                  find you nearest AYATRIO store
                </button>
                <button className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">
                  Click & Collect
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div>
              <h2 className="font-bold text-xl mb-10">Know your store</h2>
            </div>
            <div className="flex w-1/2 flex-col space-y-8">
              <ul>
                <li>
                  &#8226;
                  <strong>Showroom:</strong> Furniture IKEA stores are huge home
                  furnishings exhibitions. Stretch out on a bed, see how many
                  people you can fit on a sofa, or let your children choose
                  furniture for their rooms. Our room settings are built
                  entirely from IKEA products and will give you inspired ideas
                  for furnishing, lighting, and decorating your home. All
                  products at the store have a price tag, which shows important
                  information about size, color, material, measurements,
                  features, and care. Tags on large items tell you where to pick
                  them up in the self-serve furniture area. If you need, you can
                  talk to our sales co-workers who can answer your questions or
                  offer you additional home furnishing advice.
                </li>
              </ul>

              <ul>
                <li>
                  &#8226;
                  <strong>Market hall: Home Accessories</strong> The market hall
                  is just what it sounds like: many different specialty shops
                  gathered together. You'll find everything from rugs to
                  textiles to picture frames and clocks. You'll also see all
                  kinds of home lighting, everything you need for your kitchen
                  and countless unique gifts you can give to others - or keep
                  for yourself.
                </li>
              </ul>

              <ul>
                <li>
                  &#8226;
                  <strong>Self-serve</strong> This is where you pick up the
                  flat-packed furnishing items you saw earlier in the room
                  settings. Picking up your purchases is an important part of
                  IKEA’s approach to customer involvement. Specifically, if you
                  can do simple things like pick up your purchases and assemble
                  them at home, we'll keep prices low. Of course, there is
                  always someone available to give you a hand if you need it.
                  There are also plenty of trolleys available to help you bring
                  your purchases to your car. Or you can bring your car to your
                  purchases by pulling up to our customer loading area.
                </li>
              </ul>

              <ul>
                <li>
                  &#8226;
                  <strong>IKEA City store</strong> Welcome to our City stores,
                  located in the heart of the city - in a shopping mall or
                  complex, these stores are designed specifically for small
                  space living, easy and fast access for our customers.
                  <br />
                  <p>
                    You will experience 2 floors with a mix of furniture and
                    home furnishing accessories​.The majority of the take-away
                    products available are home furnishing accessories. There
                    are more than 5000 products on display for you to see, touch
                    and order. You can order to deliver at home or use Click and
                    Collect – Check the product tag or contact our co-workers
                    for more info.
                  </p>
                  <br />
                  <p>
                    Prepare your shopping list anytime and access it easily
                    in-store through IKEA.in or the IKEA app. Use your mobile
                    device to scan the QR codes on products that are on display.
                    Then add them to your online cart to order for pick-up or
                    delivery.
                  </p>
                  <br />
                  <p>
                    There is no parking area dedicated to the IKEA City stores.
                  </p>
                  <p>Limited paid parking is available at IKEA Worli.</p>
                  <p> Paid parking in the mall is available for IKEA R-city.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div>
            <div>
              <h2 className="font-bold text-xl mb-10">AYATRIO.com</h2>
            </div>
            <div className="flex space-x-7">
              <div className="flex w-1/2">
                <img src="https://www.ikea.com/images/9e/43/9e433e3e936c8533905ff94c318a182f.png?f=l" />
              </div>
              <div className="flex w-1/2">
                <div className="flex-col space-y-10">
                  <p>
                    Let us come to you with online shopping at IKEA.com. Browse
                    and get inspired, order for delivery or collection, manage
                    your IKEA Family membership and lots more, all from the
                    comfort of your home. You can even use IKEA.in for in-store
                    shopping – try creating a shopping list and checking stock
                    availability before visiting an IKEA store.{" "}
                  </p>
                  <button className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">
                    check stock availability
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div>
            <div>
              <h2 className="font-bold text-xl mb-10">AYATRIO Apps</h2>
            </div>
            <div className="flex space-x-7">
              <div className="flex w-1/2">
                <img src="https://www.ikea.com/images/67/bf/67bf1800c4cb51aea95058e2efeee29b.png?f=l" />
              </div>
              <div className="flex w-1/2">
                <div className="flex-col space-y-10">
                  <p>
                    From planning to buying, our mobile apps can inspire you and
                    make shopping easier. Browse products, make shopping lists,
                    check your IKEA Family account and much more.
                  </p>
                  <button className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">
                    Download AYATRIO App
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div>
            <div>
              <h2 className="font-bold text-xl mb-10">
                Helping you plan and shop wherever you are
              </h2>
            </div>
            <div className="flex space-x-7">
              <div className="flex w-1/2">
                <img src="https://www.ikea.com/images/d8/b4/d8b462fbcfee4913cd2f8a87447ffb39.png?f=l" />
              </div>
              <div className="flex w-1/2">
                <div className="flex-col space-y-10">
                  <p>
                    From designing your dream home or business to buying
                    furniture for it, our IKEA co-workers can help you. We have
                    a range of planning and design services you can access from
                    the comfort of your own home, and a team who can help you
                    when you’re ready to get started.
                  </p>
                  <p>Discover our range and find one that works for you.</p>
                  <button className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">
                    Our services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div>
            <div>
              <h2 className="font-bold text-xl mb-10">We can help you shop</h2>
            </div>
            <div className="flex space-x-7">
              <div className="flex w-1/2">
                <img src="https://www.ikea.com/images/95/fb/95fb094637e719106582980fcc605290.jpg?f=l" />
              </div>
              <div className="flex w-1/2">
                <div className="flex-col space-y-10">
                  <p>
                    At IKEA there are many different ways to shop, via remote
                    order service, you can call us from the comfort of your home
                    and we will help you shop all in your wishlist and more.
                  </p>
                  <button className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">
                    Know more about Remote order service
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div>
            <h2 className="font-bold text-xl mb-10">Need Something else?</h2>
            <h2 className="font-bold text-xl mb-10">
              Our customer support can help you in anything, from planning to
              buying.
            </h2>
            <button className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">Contact us</button>
          </div>
        </section>
        <section>
          <div>
            <div>
              <h2 className="font-bold text-xl mb-10">
              AYATRIO for Business
              </h2>
            </div>
            <div className="flex space-x-7">
              <div className="flex w-1/2">
                <img src="https://www.ikea.com/images/b0/3d/b03d90c888a8c109900cebdffc4646c2.png?f=l" />
              </div>
              <div className="flex w-1/2">
                <div className="flex-col space-y-10">
                  <p>
                  For a better everyday work life, IKEA for Business has a range of personalized services and design tools. 
                  </p>
                  <p>If there’s anything you need help with when it comes to furnishing your business premises, you can discuss your ideas with design professionals, check out the online planning tools or visit the IKEA for Business team in store.</p>
                  <p>We have inspiration for a range of industries including retail, office, residential interiors, hospitality furnishing for restaurants, cafés and accommodation.</p>
                  <button className="bg-black text-white rounded-3xl p-3 px-4 text-sm font-semibold">
                    AYATRIO for business
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
            <div className="flex space-y-7">
            <p>Discover more</p>
            <hr/>
            </div>
            {
                discoverMore.map((item)=>{
                    return(
                        <div className="flex p-7 border-b-2 hover:underline cursor-pointer">
                            <h3 className="text-lg font-bold">{item}</h3>
                            <hr/>
                        </div>
                    )
                })
            }
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default ShoppingInfo;
