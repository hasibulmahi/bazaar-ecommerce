import Category from "@/components/category/category.component";
import Deals from "@/components/deals/deals.component";
import Feature from "@/components/feature/feature.component";
import Hero from "@/components/hero/hero.component";
import Layout from "@/components/layout";
import Product from "@/components/product/product.component";
import Trending from "@/components/trending/trending.component";
import React from "react";

function Home(props) {
  return (
    <>
      <Layout>
        <Hero />
        <Feature />
        <Category />
        <Deals />
        <Trending/>
        <Product/>
      </Layout>
    </>
  );
}

export default Home;
