import axios from "axios";

// const BASE_URL = "http://52.66.30.159:8080/api";
const BASE_URL = "http://localhost:8080/api"
const createApiEndpoint = (endpoint) => `${BASE_URL}/${endpoint}`;

export const fetchRecommendedProduct = async () => {
  try {
    const response = await axios.get(createApiEndpoint("getRecommendation"));
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchSliderView = async (page,limit) => {
  try {
    const response = await axios.get(createApiEndpoint("getImgCircle?limit="+limit+"&page="+page));
    console.log("response",response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchProductsWithSearch = async (searchQuery) => {
  try {
    const response = await axios.get(createApiEndpoint("products"), {
      params: {
        search: searchQuery,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchFirstImgCardSlider = async () => {
  try {
    const response = await axios.get(createApiEndpoint("trending-products"));
    return response.data;
  } catch (error) {
    console.error(`Error fetching slider: ${error.message}`);
    throw error;
  }
};
