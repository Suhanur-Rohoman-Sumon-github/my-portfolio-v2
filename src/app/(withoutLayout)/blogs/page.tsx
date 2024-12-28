"use client";
import { useGetMyBlogQuery } from "@/hooks/project.hook";
import { TBlogs } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Blog = () => {
  const { data } = useGetMyBlogQuery();

  return (
    <div className="mt-16 min-h-screen">
      <Link href="/">
        <button className="btn-primary mb-4 flex items-center">
          <FaArrowLeft /> back to home
        </button>
      </Link>
      <div className="relative w-full h-[400px]">
        <Image
          src="https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg"
          alt="Blog Hero"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Welcome to My Blog
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((blog: TBlogs, index: number) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2">
                  {/* Check if the description length is greater than 50 characters */}
                  {blog.description.length > 20
                    ? `${blog.description.slice(0, 20)}...`
                    : blog.description}
                </p>
                <Link href={`blogs/${blog._id}`}>
                  <p className="block text-right text-blue-600 mt-2">
                    Read More
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

export default Blog;
