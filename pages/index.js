import Category from "@/components/category/category.component";
import Deals from "@/components/deals/deals.component";
import Feature from "@/components/feature/feature.component";
import Footer from "@/components/footer/footer.component";
import Hero from "@/components/hero/hero.component";
import Layout from "@/components/layout";
import Offer from "@/components/offer/offer.component";
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
        <Trending />
        <Product />
        <Trending />
        <Product />
        <Offer />
        <Product />
        <Footer />
      </Layout>
    </>
  );
}

export default Home;
