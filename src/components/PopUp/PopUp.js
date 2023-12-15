import React, { useState, useEffect } from "react";
import "./popup.css";
import back from "../../assets/back.png";
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

  const toggleItemSelection1 = (label, parentCategory) => {
    const isSelected = selectedItems1.some(
      (item) => item.label === label && item.parentCategory === parentCategory
    );

    setSelectedItems1((prevSelectedItems) =>
      isSelected
        ? prevSelectedItems.filter(
            (item) =>
              !(item.label === label && item.parentCategory === parentCategory)
          )
        : [...prevSelectedItems, { label, parentCategory }]
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

  useEffect(() => {
    document.body.style.overflow =
      openPopUp1 || openPopUp2 || openPopUp3 ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [openPopUp1, openPopUp2, openPopUp3]);

  function segregateData(data) {
    const segregatedData = {};

    // Iterate through the data array
    data.forEach((item) => {
      const parentCategory = item.parentCategory;

      // If the parent category doesn't exist in the segregatedData, create an array for it
      if (!segregatedData[parentCategory]) {
        segregatedData[parentCategory] = [];
      }

      // Add the current item to the array corresponding to its parent category
      segregatedData[parentCategory].push(item.label.name);
    });

    return segregatedData;
  }

  const selectedCategoriesData = segregateData(selectedItems1);

  const convertToPreferencesSchema = (categories, cities, hobbies) => {
    const preferences = {
      preferredCities: [],
      preferredHobbies: [],
      preferredCategories: [],
    };

    // Convert hobbies data
    preferences.preferredHobbies = hobbies.map((hobby) => hobby.name);

    // convert cities data
    preferences.preferredCities = cities.map((city) => city.name);

    // Convert categories data
    for (const categoryName in categories) {
      const category = {
        name: categoryName,
        subcategories: categories[categoryName],
      };

      preferences.preferredCategories.push(category);
    }

    return preferences;
  };

  const preferencesDataToSendToBackend = convertToPreferencesSchema(
    selectedCategoriesData,
    selectedItems2,
    selectedItems3
  );

  const done = async () => {
    setOpenPopUp3(false);
    setOpenPopUp2(false);
    setOpenPopUp1(false);
    localStorage.setItem("popUp", "true");
  
    console.log("Selected Items PopUp1:", selectedItems1);
    console.log("Selected Items PopUp2:", selectedItems2);
    console.log("Selected Items PopUp3:", selectedItems3);
  
    try {
      const response = await axios.post("http://localhost:8080/api/preferences", {
        deviceId: localStorage.getItem("deviceid"),
        preferredCities: preferencesDataToSendToBackend.preferredCities,
        preferredHobbies: preferencesDataToSendToBackend.preferredHobbies,
        preferredCategories: preferencesDataToSendToBackend.preferredCategories,
      });
  
      const data = response.data;
      console.log(data.message);
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error during request setup:", error.message);
      }
    }
  };
  

  return (
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
                            selectedItems1.some(
                              (item) =>
                                item.label === subcategory &&
                                item.parentCategory === category.name
                            )
                              ? "selected"
                              : ""
                          }`}
                          key={subIndex}
                          onClick={() =>
                            toggleItemSelection1(subcategory, category.name)
                          }
                          style={{ background: `url('${subcategory.img}')` }}>
                          <FaCheckCircle
                            className={`absolute tickicon ${
                              selectedItems1.includes(subcategory)
                                ? "block"
                                : "hidden"
                            }`}
                          />
                          <b className="bel">{subcategory.name}</b>
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
                        selectedItems2.includes(city) ? "selected" : ""
                      }`}
                      key={index}
                      onClick={() => toggleItemSelection2(city)}
                      style={{
                        background: `url('${city.img}')`,
                        backgroundSize: "center",
                      }}>
                      <FaCheckCircle
                        className={`absolute tickicon ${
                          selectedItems2.includes(city) ? "block" : "hidden"
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
              <p className="text">Last Step! Choose your hobbies</p>
            </div>
            {openPopUp3 && (
              <>
                <p className="text mb-4">Hobbies</p>
                <div className="grid grid-cols-3 gap-x-4">
                  {fetchHobbies &&
                    fetchHobbies.map((hobbie, index) => (
                      <div
                        className={`box firstbox ${
                          selectedItems3.includes(hobbie) ? "selected" : ""
                        }`}
                        key={index}
                        onClick={() => toggleItemSelection3(hobbie)}
                        style={{
                          background: `url('${hobbie.img}')`,
                          backgroundSize: "center",
                        }}>
                        <FaCheckCircle
                          className={`absolute tickicon ${
                            selectedItems3.includes(hobbie) ? "block" : "hidden"
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
