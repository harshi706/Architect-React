import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Magazine.css";
import Header from "../components/Header";

const unsplashImages = [
  "https://images.unsplash.com/photo-1700143418116-d94c3f23b9ab?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1701077135885-d463493a46a6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1701077135885-d463493a46a6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1701077135885-d463493a46a6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1701077135885-d463493a46a6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1701769007323-c7d360641ef8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682905926517-6be3768e29f0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1701769007323-c7d360641ef8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1701769007323-c7d360641ef8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1701769007323-c7d360641ef8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const MagazinePage = () => {
  const magazineRef = useRef(null);

  // const handlePrevPage = () => {
  //   magazineRef.current.pageFlip().flipPrev();
  // };

  // const handleNextPage = () => {
  //   magazineRef.current.pageFlip().flipNext();
  // };

  return (
    <div className="overflow-hidden w-full h-screen ">
      <Header />
      <div className="magazine-container relative sm:top-10 top-20 flex items-center justify-center ">
        {/* <Searchmagazine/> */}
        <div className="flip-book-container">
          <HTMLFlipBook
            ref={magazineRef}
            width={300}
            height={400}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={420}
            maxHeight={1533}
            drawShadow={true}
            className="flip-book"
          >
            {unsplashImages.map((imageUrl, index) => (
              <div key={index}>
                <img src={imageUrl} alt={`Page ${index + 1}`} />
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>
    </div>
  );
};

export default MagazinePage;
