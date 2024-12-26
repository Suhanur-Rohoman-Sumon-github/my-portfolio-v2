"use client";
import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import Expariance from "@/components/home/Expariance";
import Project from "@/components/home/MyProjects";

import Skills from "@/components/home/Skills";

import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Expariance />
      <Project />
      <Contact />
    </div>
  );
};

export default page;
