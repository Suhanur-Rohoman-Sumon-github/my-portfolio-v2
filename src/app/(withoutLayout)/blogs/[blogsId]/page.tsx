"use client";

import { useGetMyBlogQuery, useGetSingleBLogs } from "@/hooks/project.hook";
import { TBlogs } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const SingleBlog = () => {
  const { blogsId } = useParams();
  const { data, isLoading } = useGetSingleBLogs(blogsId as string);
  const { data: allBlogs } = useGetMyBlogQuery();
  console.log(data);
  if (isLoading) return <p>Loading...</p>;
  const { image, title, description } = data;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Link href="/blogs">
        <button className="btn-primary mb-4 flex items-center">
          <FaArrowLeft /> back to blogs
        </button>
      </Link>
      <div className="relative">
        <Image
          src={image}
          alt="Blog Header"
          className="w-full h-80 object-cover rounded-lg"
          height={250}
          width={400}
        />
      </div>

      {/* Blog Content Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 leading-7">{description}</p>
      </div>

      {/* More for You Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">More for You</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {allBlogs?.slice(0, 3).map((blog: TBlogs) => (
            <div key={blog._id} className="border rounded-lg shadow-lg ">
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
                width={400}
                height={250}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#000] mb-2">
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
    </div>
  );
};

export default SingleBlog;
