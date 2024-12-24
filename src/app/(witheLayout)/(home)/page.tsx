import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";

import Skills from "@/components/home/Skills";

import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default page;
