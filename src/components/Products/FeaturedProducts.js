import React from "react";
import {ProductContext } from "../../context/products";
import Loading from '../Loading'
import ProductList from "./ProductList";

export default function FeaturedProducts() {
  const {loading,featured} = React.useContext(ProductContext);
  if (loading){
    return <Loading/>
  }
  return <ProductList title="featured products"
  products={featured}/>;
}
