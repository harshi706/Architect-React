import Header from "../components/Header";
import Topbar from "../components/Product/Topbar";
import ProductSidebar from "../components/Product/ProductSidebar";
import Products from "../components/Product/Products";
import "../components/Product/styles.css";
import Footer from "../components/Footer/Footer";

import Tabproduct from "../components/Product/TabsProducts";

const ProductPage = () => {
  return (
    <div>
      <Header />
      <Products />
      <Tabproduct />
    </div>
  );
};

export default ProductPage;
