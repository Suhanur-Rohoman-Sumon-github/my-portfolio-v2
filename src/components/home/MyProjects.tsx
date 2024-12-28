"use client"
import { Element } from "react-scroll";

import Image from "next/image";
import Title from "../title/Title";
import { useMyProjectQuery } from "@/hooks/project.hook";
import { TProjects } from "@/types";
import Link from "next/link";
import { Badge } from "../ui/badge";

const Project = () => {
  const { data: projectData, isLoading } = useMyProjectQuery();

  return (
    <div className="relative">
      <Element name="projects">
        <Title title="Projects" subTitle="All of my projects" />
        <div className="py-16">
          <div className="grid md:grid-cols-2 gap-6">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              projectData
                ?.slice(0, 6)
                .map((panelContent: TProjects, index: number) => (
                  <div
                    key={index}
                    className="card relative shadow-md border border-white rounded-lg flex flex-col lg:flex-row items-center gap-6 p-4 duration-500 bg-[#2e032f] projects-cards"
                  >
                    <figure className="relative flex-shrink-0 w-full lg:w-1/3 h-64 overflow-hidden group">
                      <Image
                        src={panelContent.img}
                        className="w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                        alt="Project"
                        width={500}
                        height={500}
                      />
                    </figure>

                    <div className="flex-1">
                      <h2 className="text-[#D0ABFF] font-bold text-2xl mb-2">
                        {panelContent.title}
                      </h2>
                      <div className="badge  mb-4 text-white">
                        {panelContent.subTitle}
                      </div>
                      <div className="card-actions mb-4 flex flex-wrap gap-2">
                        <Badge className="text-white" variant="outline">
                          {" "}
                          <a
                            href={panelContent.liveSideLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                          >
                            Live Site
                          </a>
                        </Badge>
                        <Badge className="text-white" variant="outline">
                          {" "}
                          <a
                            href={panelContent.githubBackendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                          >
                            Backend
                          </a>
                        </Badge>
                        <Badge className="text-white" variant="outline">
                          {" "}
                          <a
                            href={panelContent.gitHubFrontendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=""
                          >
                            Frontend
                          </a>
                        </Badge>
                      </div>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {panelContent.technology.map((tech, index) => (
                          <Badge
                            key={index}
                            className="text-white"
                            variant="outline"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-white text-sm space-y-2">
                        <p>{panelContent.descriptions}</p>
                      </div>
                      <div className="text-white text-sm space-y-2">
                        <Link href={`/project/${panelContent._id}`}>
                          <p className="  mt-2 btn-primary">view details</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Project;
