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
import { TExperience } from "@/types";

const Expariance = () => {
  const { data } = useGetAllMyExperienceQuery();
  return (
    <div className="relative">
      <Element name="experience">
        <div className="py-14 bg-servicesDescriptions bg-cover bg-no-repeat">
          <Title title="Experience" subTitle="My Experience" />
          <VerticalTimeline>
            {data?.map((ourservis: TExperience, index: number) => (
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
                    <p className="text-white">{ourservis.description}</p>
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
