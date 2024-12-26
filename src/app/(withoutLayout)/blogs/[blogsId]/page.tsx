"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const SingleBlog = () => {
  const { blogsId } = useParams();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Link href="/blogs">
        <button className="btn-primary mb-4 flex items-center">
          <FaArrowLeft /> back to blogs
        </button>
      </Link>
      <div className="relative">
        <Image
          src="https://via.placeholder.com/1200x500"
          alt="Blog Header"
          className="w-full h-80 object-cover rounded-lg"
          height={250}
          width={400}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded-lg">
          <h1 className="text-white text-4xl font-bold px-4 text-center">
            Blog Title {blogsId}
          </h1>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Blog Content</h2>
        <p className="text-gray-700 leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac
          mauris vel libero pulvinar feugiat. Sed in purus nec orci vulputate
          consectetur. Vivamus gravida arcu at risus vestibulum, in vehicula
          ligula sollicitudin. Proin sed bibendum massa, in porta velit. Fusce
          interdum arcu eget nunc tincidunt, et accumsan erat convallis.
        </p>
        <p className="mt-4 text-gray-700 leading-7">
          Integer quis nulla nec magna luctus sodales. Duis ornare tincidunt
          turpis non luctus. Mauris non consectetur magna. Vestibulum feugiat,
          eros non vulputate fringilla, sapien ipsum cursus sapien, non
          facilisis elit magna at magna.
        </p>
      </div>

      {/* More for You Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">More for You</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="https://via.placeholder.com/400x250"
              alt="Related Blog 1"
              className="w-full h-40 object-cover"
              height={250}
              width={400}
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold">Related Blog Title 1</h4>
              <p className="text-gray-600 mt-2">
                Short description of the related blog...
              </p>
              <button className="mt-4 text-indigo-600 font-bold hover:underline">
                Read More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="https://via.placeholder.com/400x250"
              alt="Related Blog 2"
              className="w-full h-40 object-cover"
              height={250}
              width={400}
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold">Related Blog Title 2</h4>
              <p className="text-gray-600 mt-2">
                Short description of the related blog...
              </p>
              <button className="mt-4 text-indigo-600 font-bold hover:underline">
                Read More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="https://via.placeholder.com/400x250"
              alt="Related Blog 3"
              className="w-full h-40 object-cover"
              height={250}
              width={400}
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold">Related Blog Title 3</h4>
              <p className="text-gray-600 mt-2">
                Short description of the related blog...
              </p>
              <button className="mt-4 text-indigo-600 font-bold hover:underline">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
