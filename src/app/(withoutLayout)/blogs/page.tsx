import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Blog = () => {
  const blogs = [
    {
      id: "1",
      title: "How to Learn React Effectively",
      description:
        "Master React.js with these essential tips and tricks for building dynamic web applications.",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
    {
      id: "1",
      title: "Exploring Tailwind CSS",
      description:
        "Discover how Tailwind CSS can speed up your web development process with utility-first styling.",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
    {
      id: "1",
      title: "Understanding Next.js Routing",
      description:
        "A comprehensive guide to navigating pages in Next.js and leveraging its file-based routing.",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
  ];

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

      {/* Blog Cards Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
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
                <p className="text-gray-600 mt-2">{blog.description}</p>
                <Link href={`blogs/${blog.id}`}>
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
