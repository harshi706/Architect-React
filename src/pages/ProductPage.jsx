import React, { useEffect } from 'react'
import Header from '../components/Header'
import Topbar from '../components/Product/Topbar'
import ProductSidebar from '../components/Product/ProductSidebar'
import Products from '../components/Product/Products'
import '../components/Product/styles.css';

const ProductPage = () => {
 
  return (
    <>
    <Header classname="z-10"/>
    <Topbar/>
    <ProductSidebar/>
    <Products/>
    </>
  )
}

export default ProductPage