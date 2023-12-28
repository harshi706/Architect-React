import axios from "axios";


export const fetchRecommendedProduct = async () => {
    // try {
    //   const response = await fetch('http://52.66.30.159:8080/api/getRecommendation');
    //   if (!response.ok) {
    //     throw new Error('Failed to fetch recommended products');
    //   }
  
    //   const data = await response.json();
    //   return data;
    // } catch (error) {
    //   throw new Error(`Error fetching recommended products: ${error.message}`);
    // }
    try{
      const response = await axios.get('http://52.66.30.159:8080/api/getRecommendation');
      console.log(response.data)
      return response.data;

    }catch(err){
        console.log(err)
    }
  };

  export const fetchSliderView = async () => {
    // try {
    //   const response = await fetch('http://52.66.30.159:8080/api/getImgCircle');
    //   if (!response.ok) {
    //     throw new Error('Failed to fetch slider');
    //   }
    //   const data = await response.json();
    //   console.log(data)
    //   return data;
    // } catch (error) {
    //   throw new Error(`Error fetching slider: ${error.message}`);
    // }
    try{
      const response = await axios.get('http://52.66.30.159:8080/api/getImgCircle?page=1&limit=3');
      console.log(response.data)
      return response.data;
    }catch(err){
        console.log(err)
    }
  };

  export const fetchProductsWithSearch = async (searchQuery) => {
    try {
      const response = await axios.get('http://52.66.30.159:8080/api/products',  {
        params: {
        search: searchQuery,
      }});
  
      console.log(response.data);
      return response.data;
    } catch (error) {
      
      console.error('Error fetching products:', error);
      throw error; 
    }
  };
  export const fetchFirstImgCardSlider = async () => { 
    try {
      const response = await axios.get('http://52.66.30.159:8080/api/trending-products');
      console.log(response.data)
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching slider: ${error.message}`);
    }
  }