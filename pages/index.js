import Feature from "@/components/feature/feature.component";
import Hero from "@/components/hero/hero.component";
import Layout from "@/components/layout";
import React from "react";

function Home(props) {
  return (
    <div>
      <Layout>
        <Hero />
        <Feature />
      </Layout>
    </div>
  );
}

export default Home;
