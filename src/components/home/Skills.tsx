"use client";
import { Element } from "react-scroll";
import Title from "../title/Title";

const Skills = () => {
  return (
    <div className="relative">
      <Element name="skills">
        <Title title="Skills" subTitle="All of my skills" />
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex p-8 items-center justify-center py-24"
        >
          <div className="w-full skills-cards bg-[#2e032f]">
            <div className="md:flex flex-wrap gap-4">
              <div className="border font-bold border-white text-white text-center uppercase text-2xl rounded-md p-4 flex-1 min-w-[150px]">
                HTML
              </div>
              <div className="border font-bold border-[#D0ABFF] text-[#D0ABFF] shadow-md shadow-black text-center uppercase text-2xl rounded-md p-4 flex-1 min-w-[150px]">
                CSS
              </div>
              <div className="border text-2xl font-bold border-[#D0ABFF] text-[#D0ABFF] shadow-md shadow-black text-center uppercase rounded-md p-4 flex-1 min-w-[150px]">
                Tailwind
              </div>
              <div className="border font-bold border-[#D0ABFF] text-[#D0ABFF] shadow-md shadow-black text-center uppercase text-2xl rounded-md p-4 flex-1 min-w-[150px]">
                Bootstrap
              </div>
              <div className="border font-bold border-[#D0ABFF] text-[#D0ABFF] shadow-md shadow-black text-center uppercase text-2xl rounded-md p-4 flex-1 min-w-[150px]">
                JavaScript
              </div>
              <div className="border font-bold border-[#D0ABFF] text-[#D0ABFF] shadow-md shadow-black text-center uppercase text-2xl rounded-md p-4 flex-1 min-w-[150px]">
                React JS
              </div>
            </div>
            <div className="md:flex flex-wrap gap-4 mt-4">
              <div className="border font-bold border-white text-white text-center uppercase text-2xl rounded-md p-4 flex-1 min-w-[150px]">
                ExpressJS
              </div>
              <div className="border font-bold border-[#D0ABFF] text-[#D0ABFF] shadow-md shadow-black text-center uppercase text-2xl rounded-md p-4 flex-1 min-w-[150px]">
                MongoDB
              </div>
              <div className="border font-bold border-[#D0ABFF] text-[#D0ABFF] shadow-md shadow-black text-center uppercase text-2xl rounded-md p-4 flex-1 min-w-[150px]">
                NodeJS
              </div>
              <div className="border font-bold border-[#D0ABFF] text-[#D0ABFF] shadow-md shadow-black text-center uppercase text-2xl rounded-md p-4 flex-1 min-w-[150px]">
                TypeScript
              </div>
            </div>
            <div className="md:flex flex-wrap gap-4 mt-4">
              <div className="border font-bold border-[#D0ABFF] text-[#D0ABFF] shadow-md shadow-black text-center uppercase text-2xl rounded-md p-4 flex-1 min-w-[150px]">
                Next js
              </div>
              <div className="border font-bold border-[#D0ABFF] text-[#D0ABFF] shadow-md shadow-black text-center uppercase text-2xl rounded-md p-4 flex-1 min-w-[150px]">
                Git
              </div>
              <div className="border font-bold border-[#D0ABFF] text-[#D0ABFF] shadow-md shadow-black text-center uppercase text-2xl rounded-md p-4 flex-1 min-w-[150px]">
                Prisma
              </div>
            </div>
            <div className="md:flex flex-wrap gap-4 mt-4">
              <div className="border font-bold border-[#D0ABFF] text-[#D0ABFF] shadow-md shadow-black text-center uppercase text-2xl rounded-md p-4 flex-1 min-w-[150px]">
                Mongoose
              </div>
              <div className="border font-bold border-[#D0ABFF] text-[#D0ABFF] shadow-md shadow-black text-center uppercase text-2xl rounded-md p-4 flex-1 min-w-[150px]">
                Redux
              </div>
            </div>
            <div className="md:flex flex-wrap gap-4 mt-4">
              <div className="border font-bold border-[#D0ABFF] text-[#D0ABFF] text-center uppercase text-2xl rounded-md p-4 flex-1 min-w-[150px] shadow-md shadow-black">
                Uitesting
              </div>
            </div>
          </div>
        </div>
      </Element>
      <div className="gradient absolute -bottom-20 right-0"></div>
    </div>
  );
};

export default Skills;
