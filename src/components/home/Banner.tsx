"use client";
import { useEffect } from "react";
import { Element, Link } from "react-scroll";
import Typewriter from "react-ts-typewriter";
import AOS from "aos";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "aos/dist/aos.css";
import "./banner.css";
import Image from "next/image";
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Element className="my-48" name="home">
      <div className="">
        <div className="hero-content md:flex items-center   justify-center  ">
          <div
            className="lg:w-2/3 w-full text-left lg:pr-8"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mt-6 text-[#d0abff]">
              Hey 👋
            </h1>
            <h1 className="text-4xl lg:text-5xl font-bold mt-6 text-[#d0abff]">
              Welcome to Suhanur Rohoman Sumon Portfolio
            </h1>
            <h1 className="text-4xl font-bold py-4 text-white">
              I am a{" "}
              <Typewriter
                speed={400}
                text={["Web-Designer", "Web-Developer"]}
                loop={true}
              />
            </h1>
            <p className="py-6 text-[#C6BDD0]">
              I am a passionate web developer with a focus on creating elegant
              and intuitive user experiences. Through my portfolio, I showcase
              my skills and projects, demonstrating my dedication to crafting
              exceptional websites. Join me on this journey as I explore the
              world of web development and bring creative ideas to life.
            </p>
            <div className="flex space-x-4">
              <Link
                to="contact"
                className="link no-underline hover:underline text-white"
                smooth={true}
                duration={500}
              >
                <button className="btn btn-primary">Get Started</button>
              </Link>
              <Link
                to="contact"
                className="link no-underline hover:underline text-white"
                smooth={true}
                duration={500}
              >
                <button className=" btn-secendary">Contact Me</button>
              </Link>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/suhanurrohoman.sumon">
                <FaFacebook className="w-6 h-6 text-blue-700" />
              </a>
              <a href="https://www.linkedin.com/in/suhanur-rohoman-sumon-5b5266237/">
                <FaLinkedin className="w-6 h-6 text-blue-700" />
              </a>
              <a href="https://github.com/Suhanur-Rohoman-Sumon-github">
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/3 w-full flex justify-center lg:justify-end">
            <div className="cards">
              <Image
                src={"https://i.ibb.co.com/mqsGjzN/profile-pic-6.png"}
                className="w-full h-full rounded-full shadow-2xl"
                alt={""}
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Banner;
