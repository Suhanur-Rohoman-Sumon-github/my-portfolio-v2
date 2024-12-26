"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Element } from "react-scroll";
import Image from "next/image";
import Title from "../title/Title";
import { TbLayoutBottombarExpand } from "react-icons/tb";
import { useGetAllMyExperienceQuery } from "@/hooks/project.hook";
export const ourservises = [
  {
    img: "https://media.licdn.com/dms/image/v2/D4D0BAQGClmrmXTCOuA/company-logo_200_200/company-logo_200_200/0/1691066927068/reworkai_logo?e=1742428800&v=beta&t=KEVkNFfSeWNqWFZ5xWF6QCXt9sNe-lQpfo8YuDoSFxY",
    title: "React js developer intern",
    discription:
      "As a Full-Stack Developer Intern at Standard Insights since September 2, 2024, I have resolved over 50 micro bugs and more than 10 major issues on the website. I collaborate seamlessly with both front-end and back-end teams to enhance the platform's functionality and user experience.",
    company: "Rework Ai",
    duration: "oct 01 2023 - mar 04 2024",
  },
  {
    img: "https://metamlm.org/images/logo.png",
    title: "Full-stack developer and team lead of the dev team",
    discription:
      "As a Full-Stack Developer and Team Lead at Cunnectza from March 5, 2024, to August 27, 2024, I led the development team, focusing on back-end development while collaborating closely with the UI/UX team to transform designs into functional applications. SAIC JOBSalso worked with front-end developers to ensure seamless integration, delivering comprehensive solutions that enhance user experience",
    company: "Cunnectza ",
    duration: "mar 05 2024 - aug 27 2024",
  },
  {
    img: "https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-1/275436984_110531838247691_3425478709503205325_n.png?stp=dst-png_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeEDY2CXdO-jQ5U9Apdr7arM52LrRx_2QuPnYutHH_ZC4yPge_GOne-PxnGuHBDcFxksAR8yGdaNFpS6CSMNNGgB&_nc_ohc=jTUyZijHIP4Q7kNvgGyb-Wr&_nc_zt=24&_nc_ht=scontent.fdac134-1.fna&_nc_gid=AwxLHhw_HkvQLGppkJltqsz&oh=00_AYCe0S2qxg5xM00T3vRieM_d_2x3hpCDDwIfQbz7Vtgg3A&oe=676952F2",
    title: "Full-stack developer intern",
    discription:
      "As a Full-Stack Developer Intern at Standard Insights since September 2, 2024, I have resolved over 50 micro bugs and more than 10 major issues on the website. I collaborate seamlessly with both front-end and back-end teams to enhance the platform's functionality and user experience.",
    company: "Standard-insights",
    duration: "sep 02 2024 - current",
  },
];
const Expariance = () => {
  const { data } = useGetAllMyExperienceQuery();
  return (
    <div className="relative">
      <Element name="experience">
        <div className="py-14 bg-servicesDescriptions bg-cover bg-no-repeat">
          <Title title="Experience" subTitle="My Experience" />
          <VerticalTimeline>
            {data?.map((ourservis, index:number) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work "
                contentStyle={{ color: "#070234 ,bac" }}
                contentArrowStyle={{ borderRight: "7px solid #070234" }}
                iconStyle={{
                  background: "#070234",
                  color: "#D0ABFF",
                  border: "2px solid #D0ABFF",
                }}
                icon={<TbLayoutBottombarExpand />}
              >
                <div className="bg-[#2e032f]">
                  <div className="  p-2 experience-cards">
                    <div className="flex">
                      <Image
                        src={ourservis.img}
                        loading="lazy"
                        width="100"
                        height="10"
                        className=" p-4"
                        alt="servises images"
                      />
                      <div className="mt-4">
                        <h3 className="">
                          <span className="text-[#D0ABFF] text-xl font-bold">
                            {ourservis.title}
                          </span>{" "}
                          <br />{" "}
                          <span className="text-[#D0ABFF] text-xl font-bold">
                            {ourservis.company}
                          </span>
                          <br />{" "}
                          <span className="text-white">
                            {ourservis.duration}
                          </span>
                        </h3>
                        <p className=""></p>
                        <p> </p>
                      </div>
                    </div>
                    <p className="text-white">{ourservis.discription}</p>
                  </div>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </Element>
    </div>
  );
};

export default Expariance;
