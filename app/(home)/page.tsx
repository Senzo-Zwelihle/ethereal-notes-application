import Features from "@/components/core/_components/features";
import Hero from "@/components/home/_components/hero";
import Overview from "@/components/home/_components/overview";
import Pricing from "@/components/home/_components/pricing";
import Showcase from "@/components/home/_components/showcase";
import ShowcaseTwo from "@/components/home/_components/showcase-two";
import React from "react";

const Home = () => {
  return (
    <div className="space-y-32 mb-32">
      <Hero />
      <Showcase />
      <ShowcaseTwo />
      <Overview />
      <Features />
      <Pricing />
    </div>
  );
};

export default Home;
