import React, { useState } from "react";
import "./Item.css";
const Item = () => {
  const [imgColor, setImgColor] = useState("red");
    const [widthstate,setwidthstate]=useState(0);
    const [heightstate,setheightstate]=useState(0);
    const [pricestate,setpricestate]=useState(0);
    const [coststate,setcoststate]=useState(7000);
    const [rollstate,setrollstate]=useState(0);

  const imgSets = {
    red: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/36a7d256-5bf5-4eb8-a73a-26c483bd7329/superfly-9-elite-mercurial-dream-speed-fg-high-top-football-boot-1SKm9k.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7e262f53-c243-462b-83e5-ea547d0d9472/superfly-9-elite-mercurial-dream-speed-fg-high-top-football-boot-1SKm9k.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/afcc0d47-2541-410a-9048-71e26bcae111/superfly-9-elite-mercurial-dream-speed-fg-high-top-football-boot-1SKm9k.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/36a7d256-5bf5-4eb8-a73a-26c483bd7329/superfly-9-elite-mercurial-dream-speed-fg-high-top-football-boot-1SKm9k.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7e262f53-c243-462b-83e5-ea547d0d9472/superfly-9-elite-mercurial-dream-speed-fg-high-top-football-boot-1SKm9k.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/afcc0d47-2541-410a-9048-71e26bcae111/superfly-9-elite-mercurial-dream-speed-fg-high-top-football-boot-1SKm9k.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a3fd8fcc-04df-4316-b9ba-1603d04fc5cb/superfly-9-elite-mercurial-dream-speed-fg-high-top-football-boot-1SKm9k.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d56436e0-a6f3-4101-81f3-5779f46aee20/superfly-9-elite-mercurial-dream-speed-fg-high-top-football-boot-1SKm9k.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c43b56c6-9a43-4cce-9c3c-81f2466b0e5a/superfly-9-elite-mercurial-dream-speed-fg-high-top-football-boot-1SKm9k.png",
    ],
    blue: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1e4673c-ca2e-48a2-8527-bd9a92e3d20e/zoom-mercurial-superfly-9-elite-km-fg-high-top-football-boot-RbvQKW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/137cd799-0bbe-4b4a-af8e-4d24ea4e71ef/zoom-mercurial-superfly-9-elite-km-fg-high-top-football-boot-RbvQKW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/722b1721-b5e5-464e-91d2-cf597ebc1ec1/zoom-mercurial-superfly-9-elite-km-fg-high-top-football-boot-RbvQKW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/22598587-c4b5-446b-bc01-69bf80681cdf/zoom-mercurial-superfly-9-elite-km-fg-high-top-football-boot-RbvQKW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/990689bb-506e-4435-9b9d-0a4ea4296125/zoom-mercurial-superfly-9-elite-km-fg-high-top-football-boot-RbvQKW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e2818c6c-2df0-4860-88dc-2f10abcc5a36/zoom-mercurial-superfly-9-elite-km-fg-high-top-football-boot-RbvQKW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e2818c6c-2df0-4860-88dc-2f10abcc5a36/zoom-mercurial-superfly-9-elite-km-fg-high-top-football-boot-RbvQKW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/137cd799-0bbe-4b4a-af8e-4d24ea4e71ef/zoom-mercurial-superfly-9-elite-km-fg-high-top-football-boot-RbvQKW.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1e4673c-ca2e-48a2-8527-bd9a92e3d20e/zoom-mercurial-superfly-9-elite-km-fg-high-top-football-boot-RbvQKW.png",
    ],
    green: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/51971fe1-512d-4cb5-8c2b-67c44c19de09/mercurial-vapor-15-elite-low-top-football-boot-9Mbrnv.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6a16c51c-d2e3-430b-8e47-b0aed425ad2b/mercurial-vapor-15-elite-low-top-football-boot-9Mbrnv.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b49ed36-ab47-4da1-aeb2-9b530f73de29/mercurial-vapor-15-elite-low-top-football-boot-9Mbrnv.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e7c2768b-2762-47c6-b4a3-313499358ce8/mercurial-vapor-15-elite-low-top-football-boot-9Mbrnv.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/751088e3-bb53-41c1-9929-97929df146ab/mercurial-vapor-15-elite-low-top-football-boot-9Mbrnv.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aefbcd20-56e5-4971-8fd3-d96ec3ddcdda/mercurial-vapor-15-elite-low-top-football-boot-9Mbrnv.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/83ccaa96-74f6-4ece-b7c0-09a96f827894/custom-mercurial-vapor-15-elite-shoes-by-you.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/966c4711-775f-4235-ac9b-f9b185bfb37a/custom-mercurial-vapor-15-elite-shoes-by-you.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3e0c3f4d-676a-4d97-8df1-4427a9111ba4/custom-mercurial-vapor-15-elite-shoes-by-you.png",
    ],
  };

  const [selectedImage, setSelectedImage] = useState(imgSets[imgColor][0]);
  const priceCal = ()=>{
  setpricestate((widthstate*heightstate/50)*coststate);
setrollstate((widthstate*heightstate/50));
  }
  const changeColor = (color) => {
    setImgColor(color);
    setSelectedImage(imgSets[color][0]);
    priceCal()
    if (color==="red") {
        setcoststate(7000)
      }
      else if(color==="blue") {
        setcoststate(8000)
      }
      else{
        setcoststate(3000)
      }
  };

  return (
    <>
      <div className="main h-[100vh] w-full">
        <div className="flex top-6 m-[10%] justify-evenly gap-12">
          <div className="left h-[50%] w-[70%] flex flex-row">
            <div className="prevImg h-full flex flex-col w-fit gap-[0.8rem] mx-2">
              {imgSets[imgColor].map((image, i) => (
                <div
                  key={i}
                  className="smallImgBox w-[60px] h-[60px] rounded-lg bg-slate-300"
                  onMouseEnter={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt=""
                    className="smallImg w-full h-full rounded-lg"
                  />
                </div>
              ))}
            </div>
            <div className="mainImg h-[650px] rounded-lg w-[500px]">
              <img
                src={selectedImage}
                alt=""
                className="mainImage object-cover rounded-lg h-[650px] w-[500px]"
              />
            </div>
          </div>
          <div className="right mt-3  overflow-y-auto w-1/2 h-[100vh]">
   
            <div className="textHolders flex flex-col">
              <h1 className="text-2xl font-bold mb-2">Football Shoe</h1>
              <h3 className="mb-2 font-semibold">
                Collection: Metropolitan Stories Travel Styles
              </h3>
              <h3 className="mb-4 font-semibold">Pattern Number: 77siu7Cr7-{imgColor}</h3>

            
              <div className="price">
                <h2 className="font-bold mb-1">MRP: ₹{coststate}/Shoe</h2>
                <h5 className="">incl. Of taxes</h5>
                <h4>Also Includes Taxes</h4>
              </div>
            </div>


            <div className="colorContainer flex flex-col items-start mt-4">
              <h1 className="mb-2 font-bold">Other Colorways</h1>
              <div className="colors flex gap-3">
                <div
                  onClick={() => changeColor("red")}
                  className={`color1 w-[50px] h-[50px] rounded-full ${imgColor==="red"?"border border-slate-800":''}   bg-red-500`}
                ></div>
                <div
                  onClick={() => changeColor("blue")}
                  className={`color1 w-[50px] h-[50px] rounded-full ${imgColor==="blue"?"border border-slate-800":''}  bg-blue-500`}
                ></div>
                <div
                  onClick={() => changeColor("green")}
                  className={`color1 w-[50px] h-[50px] rounded-full  ${imgColor==="green"?"border border-slate-800":''} bg-green-500`}
                ></div>
              </div>
            </div>

            <div className="calculation-container mt-2 ">
              <h1 className="text-xl mb-4 font-bold">
                Calculate Your Requirements
              </h1>
              <div className="calc flex flex-col">
                {/* Dimension Inputs */}
                <div className="dim flex flex-row">
                  <div
                    className="height border border-slate-500  w-1/2 p-2 flex flex-col"
                    style={{
                      borderRadius: "15px 0px 0px 0px",
                    }}
                  >
                    <h3 className="mb-2 font-semibold">Height (Meters)</h3>
                    <input
                   onChange={(e) => {
                    setheightstate(e.target.value);
                    priceCal();
                  }}
                    value={heightstate}
                      type="text"
                      className="input-field focus:outline-none w-full h-full active:border-none"
                    />
                  </div>
                  <div
                    className="width border border-slate-500  w-1/2 p-2 flex flex-col"
                    style={{
                      borderRadius: "0px 15px 0px 0px",
                    }}
                  >
                    <h3 className="mb-2 font-semibold">Width (Meters)</h3>
                    <input
                    onChange={(e)=>{setwidthstate(e.target.value)
                        priceCal();
                    }}
                    value={widthstate}
                      type="text"
                      className="input-field focus:outline-none w-full h-full active:border-none"
                    />
                  </div>
                </div>

                {/* Price Input */}
                <div
                  className="price border border-slate-500  w-full p-2 flex flex-col"
                  style={{
                    borderRadius: "0px 0px 15px 15px",
                  }}
                >
                  <h3 className="mb-2 font-semibold">Price</h3>
                  <h2>{pricestate} ({rollstate})</h2>
                </div>
              </div>
            </div>
            <div className="buttons mt-4">
              <div className="guestCheckout">
                <button className="bg-black text-white w-full h-16 rounded-3xl hover:bg-gray-900 transition duration-300">
                  Add To Bag
                </button>
              </div>
              <div className="memberCheckout mt-4">
                <button className="bg-black text-white w-full h-16 rounded-3xl hover:bg-gray-900 transition duration-300">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
