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

  if (isLoading) return <p>Loading...</p>;

  const { img, title, description, technologies, subTitle } = data;

  return (
    <div className="max-w-7xl mx-auto py-16 px-8 mt-32">
      <Link href={"/"}>
        <button className="btn-primary mb-8 flex items-center text-lg text-white bg-[#2e032f] py-3 px-6 rounded-lg hover:bg-[#D0ABFF] transition duration-200 ease-in-out">
          <FaArrowLeft className="mr-2" /> Back to Projects
        </button>
      </Link>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Project Image */}
        <div className="flex justify-center items-center relative group">
          <Image
            src={img}
            alt={title}
            width={700}
            height={700}
            className="rounded-xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Project Details */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-[#2e032f]">{title}</h1>
          <h2 className="text-2xl font-semibold text-[#D0ABFF]">{subTitle}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{description}</p>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xl font-semibold text-[#2e032f]">
              Technologies Used:
            </h3>
            <div className="flex flex-wrap gap-3 mt-4">
              {technologies?.map((tech: any, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#D0ABFF] text-white rounded-full text-sm shadow-md hover:bg-[#2e032f] transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
