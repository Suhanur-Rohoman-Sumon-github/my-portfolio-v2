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
                src={
                  "https://img.freepik.com/premium-vector/gradient-code-logo-tagline-here_23-2148808179.jpg?semt=ais_hybrid"
                }
                className="h-12 w-12 rounded-full border border-white"
                alt="Logo"
                height={450}
                width={450}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="home"
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              Experience
            </Link>
            <Link
              to="blogs"
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              Blogs
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              className="btn btn-primary"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
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
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              className="btn btn-primary"
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
