/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { useGetSingProjectsQuery } from "@/hooks/project.hook";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const { data, isLoading } = useGetSingProjectsQuery(projectId as string);
  console.log(data);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">Loading project details...</p>
      </div>
    );

  const { img, title, subTitle, technologies, descriptions } = data;

  return (
    <div className="max-w-6xl mx-auto py-12 px-6 md:px-8 lg:px-16 my-32">
      {/* Back to Projects Button */}
      <Link href={"/"}>
        <button className="flex items-center gap-2 text-lg font-medium text-white bg-[#2e032f] py-3 px-6 rounded-lg hover:bg-[#D0ABFF] transition duration-200">
          <FaArrowLeft className="text-lg" /> Back to Projects
        </button>
      </Link>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        {/* Project Image */}
        <div className="relative flex justify-center items-center">
          <Image
            src={img}
            alt={title}
            width={700}
            height={700}
            className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Project Details */}
        <div className="space-y-8">
          <h1 className="text-4xl font-extrabold text-[#2e032f]">{title}</h1>
          <h2 className="text-2xl font-semibold text-[#D0ABFF]">{subTitle}</h2>
          <p className="text-lg text-white leading-relaxed ">{descriptions}</p>

          {/* Technologies Section */}
          <div>
            <h3 className="text-xl font-semibold text-[#2e032f] mb-4">
              Technologies Used:
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies?.map((tech: any, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#D0ABFF] text-white rounded-full text-sm shadow-md hover:bg-[#2e032f] transition duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
