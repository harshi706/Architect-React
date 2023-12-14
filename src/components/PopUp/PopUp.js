<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import "./popup.css";
import back from "../../assets/back.png";
=======
import React, { useEffect, useState } from 'react';
import './popup.css';
import back from '../../assets/back.png';
>>>>>>> refs/remotes/origin/main
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";

function App() {
  const [fetchedCategories, setFetchedCategories] = useState(null);
  const [fetchCities, setFetchedCities] = useState(null);
  const [fetchHobbies, setFetchedHobbies] = useState(null);

  const fetchCategories = async () => {
    const response = await axios.get("http://localhost:8080/api/categories");
    setFetchedCategories(response.data[0].categories);
  };

  const fetchCitiesAndHobbies = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/citiesAndHobbies"
    );
    setFetchedCities(response.data[0].cities);
    setFetchedHobbies(response.data[0].hobbies);
  };
  console.log(fetchCities);

  useEffect(() => {
    fetchCategories();
  }, []);

  const [openPopUp1, setOpenPopUp1] = useState(true);
  const [openPopUp2, setOpenPopUp2] = useState(false);
  const [openPopUp3, setOpenPopUp3] = useState(false);

  const [selectedItems1, setSelectedItems1] = useState([]);
  const [selectedItems2, setSelectedItems2] = useState([]);
  const [selectedItems3, setSelectedItems3] = useState([]);

  const handleNext = () => {
    fetchCitiesAndHobbies();
    setOpenPopUp1(false);
    setOpenPopUp2(true);
  };

  const resetPopups = () => {
    setOpenPopUp1(true);
    setOpenPopUp2(false);
    setOpenPopUp3(false);
  };

  const goTo = () => {
    setOpenPopUp3(true);
    setOpenPopUp2(false);
  };

  const goTo2 = () => {
    setOpenPopUp3(false);
    setOpenPopUp2(true);
  };

  const toggleItemSelection1 = (label) => {
    const isSelected = selectedItems1.includes(label);
    setSelectedItems1((prevSelectedItems) =>
      isSelected
        ? prevSelectedItems.filter((item) => item !== label)
        : [...prevSelectedItems, label]
    );
  };

  const toggleItemSelection2 = (label) => {
    const isSelected = selectedItems2.includes(label);
    setSelectedItems2((prevSelectedItems) =>
      isSelected
        ? prevSelectedItems.filter((item) => item !== label)
        : [...prevSelectedItems, label]
    );
  };

  const toggleItemSelection3 = (label) => {
    const isSelected = selectedItems3.includes(label);
    setSelectedItems3((prevSelectedItems) =>
      isSelected
        ? prevSelectedItems.filter((item) => item !== label)
        : [...prevSelectedItems, label]
    );
  };

  const done = () => {
    setOpenPopUp3(false);
    setOpenPopUp2(false);
    setOpenPopUp1(false);
    localStorage.setItem("popUp", "true");
    // You can now use the selectedItems1, selectedItems2, selectedItems3 arrays as needed
    console.log("Selected Items PopUp1:", selectedItems1);
    console.log("Selected Items PopUp2:", selectedItems2);
    console.log("Selected Items PopUp3:", selectedItems3);
  };

  const data1 = [
    { text: "What are you interested in?" },
    {
      text: "Step 1",
      boxes: [
        { id: "box1_1", label: "Label 1" },
        { id: "box1_2", label: "Label 2" },
        { id: "box1_3", label: "Label 3" },
        { id: "box1_4", label: "Label 4" },
      ],
    },
    {
      text: "Step 2",
      boxes: [
        { id: "box2_1", label: "Label A" },
        { id: "box2_2", label: "Label B" },
        { id: "box2_3", label: "Label C" },
        { id: "box2_4", label: "Label D" },
      ],
    },
    {
      text: "Step 3",
      boxes: [
        { id: "box3_1", label: "Choice X" },
        { id: "box3_2", label: "Choice Y" },
        { id: "box3_3", label: "Choice Z" },
        { id: "box3_4", label: "Choice W" },
      ],
    },
  ];

  const data2 = [
    { text: "Next step! Choose your favorite city." },
    { text: "City", labels: ["New York", "London", "Tokyo"] },
    { text: "City", labels: ["Paris", "Sydney", "Berlin"] },
  ];

  const data3 = [
    { text: "Last step! Tell us your hobbies." },
    { text: "Hobbies", labels: ["Reading", "Gaming", "Traveling"] },
    { text: "Hobbies", labels: ["Cooking", "Photography", "Sports"] },
  ];
  useEffect(() => {
    document.body.style.overflow = openPopUp1 || openPopUp2 || openPopUp3 ? 'hidden' : 'visible';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [openPopUp1, openPopUp2, openPopUp3]);
  return (
<<<<<<< HEAD
    <div className="App">
      {openPopUp1 && (
        <div className="popup1">
          <div className="cont1">
            {fetchedCategories &&
              fetchedCategories.map((category, index) => (
                <React.Fragment key={index}>
                  <p className="text">{category.name}</p>
                  {category.subcategories && (
                    <div className="row">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <div
                          className={`box firstbox ${
                            selectedItems1.includes(subcategory)
                              ? "selected"
                              : ""
                          }`}
                          key={subIndex}
                          onClick={() => toggleItemSelection1(subcategory)}
                          style={{ background: `url('${subcategory.img}')` }}>
                          <FaCheckCircle
                            className={`absolute tickicon ${
                              selectedItems1.includes(subcategory)
                                ? "block"
                                : "hidden"
                            }`}
                          />
                          <b className="bel">{subcategory.name}</b>
=======
    <div className="App w-full h-[100vh]  "style={{
      background:"rgba(0, 0, 0, 0.2)"
    }}
    
    >
     {openPopUp1 && (
  <div className='popup1'>
    <div className='cont1'>
      {data1.map((item, index) => (
        <React.Fragment key={index}>
          <p className='text'>{item.text}</p>
          {item.boxes && (
            <div className='row'>
              {item.boxes.map((box, boxIndex) => (
                <div
                  className={`box firstbox ${selectedItems1.includes(box.id) ? 'selected' : ''}`}
                  key={box.id}
                  onClick={() => toggleItemSelection1(box.id)}
                >
                  {/* <img src="https://images.pexels.com/photos/2837909/pexels-photo-2837909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-full' alt="" /> */}
                  {/* <b className='bel'>{label}</b> */}
                  <FaCheckCircle className={`absolute tickicon ${selectedItems1.includes(box.id)?"block":"hidden"}`}/>
                </div>
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
      <button className='next' onClick={handleNext}>
        Next
      </button>
    </div>
  </div>
)}
      {openPopUp2 && (
        <div className='popup1'>
          <div className='cont1'>
            {data2.map((item, index) => (
              <React.Fragment key={index}>
                <p className='text'>{item.text}</p>
                {item.labels && (
                  <div className='row'>
                    {item.labels.map((label, labelIndex) => (
                      <div
                        className={`below ${selectedItems2.includes(label) ? 'selected' : ''}`}
                        key={labelIndex}
                        onClick={() => toggleItemSelection2(label)}
                      >
                        <div className='box secondbox' >
                          {/* <img src="https://images.pexels.com/photos/2837909/pexels-photo-2837909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
                  <FaCheckCircle className={`absolute tickicon ${selectedItems2.includes(label)?"block":"hidden"}`}/>
                        
                        <b className='bel'>{label}</b>

>>>>>>> refs/remotes/origin/main
                        </div>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}

            <button className="next" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
      {openPopUp2 && (
        <div className="popup1">
          <div className="cont1">
            <p className="text mb-4">Cities</p>
            <div className="grid grid-cols-3 gap-x-4">
              {fetchCities &&
                fetchCities.map((city, index) => (
                  <React.Fragment key={index}>
                    <div
                      className={`box firstbox ${
                        selectedItems1.includes(city) ? "selected" : ""
                      }`}
                      key={index}
                      onClick={() => toggleItemSelection1(city)}
                      style={{
                        background: `url('${city.img}')`,
                        backgroundSize: "center",
                      }}>
                      <FaCheckCircle
                        className={`absolute tickicon ${
                          selectedItems1.includes(city) ? "block" : "hidden"
                        }`}
                      />
                      <b className="bel">{city.name}</b>
                    </div>
                  </React.Fragment>
                ))}
            </div>
            <button className="next mt-8" onClick={goTo}>
              Next
            </button>
          </div>
        </div>
      )}
     {openPopUp3 && (
  <div className="popup1">
    <div className="cont1">
      <div className="head">
        <img src={back} className="back" onClick={goTo2} alt="Back" />
        <p className="text">{data3[0].text}</p>
      </div>
      {openPopUp3 && (
        <>
          <p className="text mb-4">Hobbies</p>
          <div className="grid grid-cols-3 gap-x-4">
            {fetchHobbies &&
              fetchHobbies.map((hobbie, index) => (
                <div
                  className={`box firstbox ${
                    selectedItems1.includes(hobbie) ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => toggleItemSelection1(hobbie)}
                  style={{
                    background: `url('${hobbie.img}')`,
                    backgroundSize: "center",
                  }}
                >
                  <FaCheckCircle
                    className={`absolute tickicon ${
                      selectedItems1.includes(hobbie) ? "block" : "hidden"
                    }`}
                  />
                  <b className="bel">{hobbie.name}</b>
                </div>
              ))}
          </div>
          <button className="next mt-6" onClick={done}>
            Done
          </button>
        </>
      )}
    </div>
  </div>
)}

    
    </div>
  );
}

export default App;
