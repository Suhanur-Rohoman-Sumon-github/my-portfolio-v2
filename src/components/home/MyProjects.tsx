import { useState } from "react";
import { Element } from "react-scroll";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Image from "next/image";
import Title from "../title/Title";

export const FrontendTabPanel = [
  {
    heading: "Royel Advertising",
    subTitle: "A advartising website",
    para: "Book high-value meetings in seconds and turn scheduling into a competitive advantage.",
    img: "https://i.ibb.co/LpBXRnr/Whats-App-Image-2024-06-17-at-11-26-41-AM.jpg",
    technology: ["react", "tailwind css"],
    para1:
      "Sleek Advertising Showcase: Crafted a sleek, responsive single-page advertising showcase using React.js and Tailwind CSS. It features smooth navigation, engaging animations, and showcases diverse ad formats elegantly.",

    liveSideLink: "https://royal-advertising.vercel.app/",
    githubBackendLink:
      "https://images.ctfassets.net/k0lk9kiuza3o/2rG4thXSvKkcjfy96bmbWa/5efef2a0b21095c5333d41ea650b6fd3/Calendly-Sales-Small-new_io.png?q=85&fm=webp",
    gitHubFrontendLink:
      "https://github.com/Suhanur-Rohoman-Sumon-github/Royal-Advertising",
  },
  {
    heading: "Talent finder",
    subTitle: "A interview schedule website",
    para: "Book high-value meetings in seconds and turn scheduling into a competitive advantage.",
    img: "https://i.ibb.co/9Hx668t/Whats-App-Image-2024-06-17-at-11-51-36-AM.jpg",
    technology: ["react", "tailwind css"],
    para1:
      "Modern Mentorship Platform: Created a contemporary, responsive single-page mentorship platform using React.js and Tailwind CSS. The project emphasizes intuitive navigation, interactive elements, and a user-friendly interface tailored for mentorship interactions.",

    liveSideLink: "https://rework-ai-p.vercel.app/",
  },
  {
    heading: "Hubnex.Io",
    subTitle: "A agency website",
    para: "Book high-value meetings in seconds and turn scheduling into a competitive advantage.",
    img: "https://i.ibb.co/RNvH28k/Whats-App-Image-2024-06-17-at-11-59-04-AM.jpg",
    technology: ["react", "tailwind css"],
    para1:
      "Dynamic Agency Website: Developed a dynamic, single-page agency website using React.js and Tailwind CSS. This project highlights fluid navigation, interactive sections, and a visually appealing design aimed at showcasing agency services and portfolio",

    liveSideLink: "https://hubnex-io.vercel.app/",
    githubBackendLink:
      "https://images.ctfassets.net/k0lk9kiuza3o/2rG4thXSvKkcjfy96bmbWa/5efef2a0b21095c5333d41ea650b6fd3/Calendly-Sales-Small-new_io.png?q=85&fm=webp",
    gitHubFrontendLink:
      "https://github.com/Suhanur-Rohoman-Sumon-github/hubnex.io",
  },
];
export const BackendTabPanel = [
  {
    heading: "meeting room booking system",
    subTitle: "A meeting room booking website backend",
    para: "Book high-value meetings in seconds and turn scheduling into a competitive advantage.",
    img: "https://i.ibb.co/NrZLp8J/Whats-App-Image-2024-06-17-at-12-12-37-PM.jpg",
    technology: ["express", "typescript", "mongodb", "mongoose"],
    para1:
      "Meeting Room Booking System Backend: Engineered the backend infrastructure for a sophisticated meeting room booking system. Leveraged Node.js with Express to manage user authentication, room scheduling, and seamless integration with databases like MongoDB. Ensured scalability and robustness to support real-time updates and user-friendly APIs",

    liveSideLink: "https://booking-system-dun-ten.vercel.app/",
    githubBackendLink:
      "https://github.com/Suhanur-Rohoman-Sumon-github/booking-system-backend",
  },
];
export const FullstackTabPanel = [
  {
    heading: "Let's schedule",
    subTitle: "A event scheduling website",
    para: "Book high-value meetings in seconds and turn scheduling into a competitive advantage.",
    img: "https://i.ibb.co/7GzX0rM/Whats-App-Image-2024-06-17-at-12-25-54-PM.jpg",
    technology: [
      "express",
      "typescript",
      "mongodb",
      "mongoose",
      "react",
      "tailwind css",
      "stripe",
    ],
    para1:
      "Full-stack Event Scheduling Platform: Engineered a comprehensive event scheduling solution from scratch, combining React.js for frontend responsiveness and Node.js for robust backend functionality. Leveraged MongoDB for seamless data storage and retrieval, delivering a user-friendly interface with real-time updates and secure authentication. Ideal for efficiently managing events and bookings with intuitive UX/UI design.",

    liveSideLink: "https://let-s-scheduled-frontend.vercel.app/",
    githubBackendLink:
      "https://github.com/Suhanur-Rohoman-Sumon-github/lets-schedule-backend",
    frontendGithubLink:
      "https://github.com/Suhanur-Rohoman-Sumon-github/let-s-scheduled-frontend",
  },
  {
    heading: "Typo tech",
    subTitle: "A keyboard selling website",
    para: "Book high-value meetings in seconds and turn scheduling into a competitive advantage.",
    img: "https://i.ibb.co/pxQ9swv/Whats-App-Image-2024-07-13-at-10-45-28-PM-1.jpg",
    technology: [
      "express",
      "typescript",
      "mongodb",
      "mongoose",
      "react",
      "tailwind css",
      "stripe",
      "Redux",
    ],
    para1:
      "Developed and launched an e-commerce platform for selling high-quality keyboards. Implemented a comprehensive checkout system, integrated multiple payment options including PayPal, Stripe, and cash on delivery, and designed a seamless user interface for product filtering and sorting. Utilized React, Redux, and TypeScript to create a dynamic and user-friendly shopping experience.",

    liveSideLink: "https://typotech.vercel.app/",
    githubBackendLink:
      "https://github.com/Suhanur-Rohoman-Sumon-github/TypoTech-server",
    frontendGithubLink:
      "https://github.com/Suhanur-Rohoman-Sumon-github/TypoTech-client.git",
  },
];
export const NexJsTabPanel = [
  {
    heading: "The universal news",
    subTitle: "A news paper website",
    para: "Book high-value meetings in seconds and turn scheduling into a competitive advantage.",
    img: "https://i.ibb.co/vwwzLdc/Whats-App-Image-2024-06-17-at-12-34-25-PM.jpg",
    technology: ["next js", "mongodb", "react", "tailwind css", "stripe"],
    para1:
      "Next.js Powered News Portal: Developed a dynamic news website using Next.js, providing lightning-fast performance and server-side rendering capabilities. Integrated with a scalable backend, ensuring real-time updates and personalized user experiences. Designed with a clean interface for seamless navigation and content discovery, offering a modern approach to delivering timely news.",

    liveSideLink: "https://the-universal-news.vercel.app/",
    githubBackendLink: "https://github.com/mthtitumir/the-universal-news",
  },
];

export const tabTitles = ["Frontend", "Backend", "Fullstack", "Next js"];

const Project = () => {
  const [active, setIsActive] = useState(tabTitles[0]);

  return (
    <div className="relative">
      <Element name="projects">
        <Title title="Projects" subTitle="All of my projects" />
        <div className=" ">
          <div className="py-16">
            <Tabs>
              <TabList className=" mx-auto grid grid-cols-2 lg:grid-cols-6 place-items-center gap-y-3 mb-24">
                {tabTitles.map((tabTitle) => (
                  <Tab
                    key={tabTitle}
                    onClick={() => setIsActive(tabTitle)}
                    className={`${
                      active === tabTitle
                        ? "bg-transparent text-[#FFF]"
                        : "bg-transparent text-[#D0ABFF]"
                    } py-1 lg:py-3 px-3 lg:px-5 border text-xl font-semibold tracking-tight cursor-pointer  transition-colors duration-200 text-center`}
                  >
                    {tabTitle}
                  </Tab>
                ))}
              </TabList>
              {/* Frontend Tab Panel */}
              <TabPanel className=" px-2 mx-auto">
                <div className="grid md:grid-cols-2 gap-6  ">
                  {FrontendTabPanel.map((panelContent, index) => (
                    <div
                      className="card relative shadow-md border border-white rounded-lg flex flex-col lg:flex-row items-center gap-6 p-4   duration-500 bg-[#2e032f] projects-cards  "
                      key={index}
                    >
                      {/* Image Section */}
                      <figure className="relative flex-shrink-0 w-full lg:w-1/3 h-64 overflow-hidden group">
                        <Image
                          src={panelContent.img}
                          className="w-full h-full  transform transition-transform duration-500 group-hover:scale-110"
                          alt="Project"
                          width={500}
                          height={500}
                        />
                      </figure>
                      {/* Text Section */}
                      <div className="flex-1">
                        <h2 className="text-[#D0ABFF] font-bold text-2xl mb-2">
                          {panelContent.heading}
                        </h2>
                        <div className="badge badge-secondary mb-4">
                          {panelContent.subTitle}
                        </div>
                        <div className="card-actions mb-4 flex flex-wrap gap-2">
                          <a
                            href={panelContent.liveSideLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            Live Site
                          </a>
                          <a
                            href={panelContent.gitHubFrontendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            GitHub
                          </a>
                        </div>
                        <div className="mb-4 flex flex-wrap gap-2">
                          {panelContent.technology.map((tech, index) => (
                            <span key={index} className="badge badge-primary">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="text-white text-sm space-y-2">
                          <p>{panelContent.para1}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
              {/* Backend Tab Panel */}
              <TabPanel className="lg:w-10/12 px-2 mx-auto">
                <div className="grid grid-cols-1 gap-6">
                  {BackendTabPanel.map((panelContent, index) => (
                    <div
                      className="card relative shadow-md border border-white rounded-lg flex flex-col lg:flex-row items-center gap-6 p-4 hover:shadow-[0px_0px_15px_4px_rgba(208,171,255,0.8)] transform transition-all duration-500"
                      key={index}
                    >
                      {/* Image Section */}
                      <figure className="relative flex-shrink-0 w-full lg:w-1/3 h-64 overflow-hidden group">
                        <Image
                          src={panelContent.img}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                          alt="Project"
                          width={500}
                          height={500}
                        />
                      </figure>
                      {/* Text Section */}
                      <div className="flex-1">
                        <h2 className="text-[#D0ABFF] font-bold text-2xl mb-2">
                          {panelContent.heading}
                        </h2>
                        <div className="badge badge-secondary mb-4">
                          {panelContent.subTitle}
                        </div>
                        <div className="card-actions mb-4 flex flex-wrap gap-2">
                          <a
                            href={panelContent.liveSideLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            Live Site
                          </a>
                          <a
                            href={panelContent.gitHubFrontendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            GitHub
                          </a>
                        </div>
                        <div className="mb-4 flex flex-wrap gap-2">
                          {panelContent.technology.map((tech, index) => (
                            <span key={index} className="badge badge-primary">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="text-white text-sm space-y-2">
                          <p>{panelContent.para1}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel className="lg:w-10/12 px-2 mx-auto">
                <div className="grid grid-cols-1 gap-6">
                  {NexJsTabPanel.map((panelContent, index) => (
                    <div
                      className="card relative shadow-md border border-white rounded-lg flex flex-col lg:flex-row items-center gap-6 p-4 hover:shadow-[0px_0px_15px_4px_rgba(208,171,255,0.8)] transform transition-all duration-500"
                      key={index}
                    >
                      {/* Image Section */}
                      <figure className="relative flex-shrink-0 w-full lg:w-1/3 h-64 overflow-hidden group">
                        <Image
                          src={panelContent.img}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                          alt="Project"
                          width={500}
                          height={500}
                        />
                      </figure>
                      {/* Text Section */}
                      <div className="flex-1">
                        <h2 className="text-[#D0ABFF] font-bold text-2xl mb-2">
                          {panelContent.heading}
                        </h2>
                        <div className="badge badge-secondary mb-4">
                          {panelContent.subTitle}
                        </div>
                        <div className="card-actions mb-4 flex flex-wrap gap-2">
                          <a
                            href={panelContent.liveSideLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            Live Site
                          </a>
                          <a
                            href={panelContent.gitHubFrontendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            GitHub
                          </a>
                        </div>
                        <div className="mb-4 flex flex-wrap gap-2">
                          {panelContent.technology.map((tech, index) => (
                            <span key={index} className="badge badge-primary">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="text-white text-sm space-y-2">
                          <p>{panelContent.para1}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel className="lg:w-10/12 px-2 mx-auto">
                <div className="grid grid-cols-1 gap-6">
                  {FullstackTabPanel.map((panelContent, index) => (
                    <div key={index}>
                      {/* Image Section */}
                      <figure className="relative flex-shrink-0 w-full lg:w-1/3 h-64 overflow-hidden group">
                        <Image
                          src={panelContent.img}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                          alt="Project"
                          width={500}
                          height={500}
                        />
                      </figure>
                      {/* Text Section */}
                      <div className="flex-1">
                        <h2 className="text-[#D0ABFF] font-bold text-2xl mb-2">
                          {panelContent.heading}
                        </h2>
                        <div className="badge badge-secondary mb-4">
                          {panelContent.subTitle}
                        </div>
                        <div className="card-actions mb-4 flex flex-wrap gap-2">
                          <a
                            href={panelContent.liveSideLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            Live Site
                          </a>
                          <a
                            href={panelContent.gitHubFrontendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            GitHub
                          </a>
                        </div>
                        <div className="mb-4 flex flex-wrap gap-2">
                          {panelContent.technology.map((tech, index) => (
                            <span key={index} className="badge badge-primary">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="text-white text-sm space-y-2">
                          <p>{panelContent.para1}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
              {/* Other Panels */}
              {/* Add FullstackTabPanel and NexJsTabPanel similarly */}
            </Tabs>
          </div>
        </div>
        <div className="gradient absolute left-0 top-52"></div>
      </Element>
    </div>
  );
};

export default Project;
