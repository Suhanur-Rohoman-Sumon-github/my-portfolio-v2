"use client";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#2e032f] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="md:w-10/12 mx-auto">
        <div className="flex items-center justify-between text-[#d0abff] py-4">
          {/* Logo Section */}
          <div>
            <Link to="home" smooth={true} duration={1000}>
              <Image
                src="https://img.freepik.com/premium-vector/gradient-code-logo-tagline-here_23-2148808179.jpg?semt=ais_hybrid"
                className="h-12 w-12 rounded-full border border-white"
                alt="Logo"
                height={450}
                width={450}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 items-center">
            <Link
              to="home"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[#ffffff] transition duration-200"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[#ffffff] transition duration-200"
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[#ffffff] transition duration-200"
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[#ffffff] transition duration-200"
            >
              Skills
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[#ffffff] transition duration-200"
            >
              Experience
            </Link>
            <Link
              to="blogs"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[#ffffff] transition duration-200"
            >
              Blogs
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[#ffffff] btn btn-primary"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMenu}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="px-4 pt-4 pb-6 space-y-4 sm:px-6">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link
              to="blogs"
              smooth={true}
              duration={500}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Blogs
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn btn-primary w-full"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
