import React from "react";
import Hero from "../components/Hero";
import {Link} from "react-router-dom";
import FeaturedProducts from "../components/Products/FeaturedProducts";

export default function Home() {
  return <>
    <Hero>
      <Link to="/products" className="btn btn-hero btn-primary">
        our products
      </Link>
    </Hero>
    <FeaturedProducts/>
  </>;
}
