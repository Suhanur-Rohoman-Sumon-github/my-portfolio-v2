"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Title from "../title/Title";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Element } from "react-scroll";
import { useGetMyBlogQuery } from "@/hooks/project.hook";
import { TBlogs } from "@/types";

const MyBlogs = () => {
  const { data } = useGetMyBlogQuery();
  // Example blog data

  return (
    <Element name="blogs">
      <section id="blog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Title title="Blogs" subTitle="My Blogs" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.slice(0, 3).map((blog: TBlogs) => (
              <div
                key={blog._id}
                className="border rounded-lg shadow-lg bg-[#2e032f] blog-cards"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                  width={400}
                  height={250}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#d0abff] mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-white text-sm mb-4">{blog.date}</p>

                  <p className="text-white">{blog.description}</p>
                  <Link href={`/blogs/${blog._id}`}>
                    <p className=" mt-4 text-[#f51843] hover:underline flex items-center gap-1">
                      Read more <IoIosArrowRoundForward />
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link href={"/blogs"}>
          <button className="btn-primary mt-4 flex items-center justify-center float-right mr-8">
            show all blogs <IoIosArrowRoundForward />
          </button>
        </Link>
      </section>
    </Element>
  );
};

export default MyBlogs;
