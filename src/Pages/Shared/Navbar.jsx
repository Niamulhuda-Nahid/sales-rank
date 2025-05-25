import { useState } from "react";
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";
import { motion } from "motion/react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{y: -250}}
      animate={{y: 0}}
      transition={{duration: 0.5, }}
    className="bg-gradient-to-r from-[#d5dff9] to-[#f8f8f8]">
      <nav className="lg:container mx-auto relative pt-[30px] pr-5 md:pr-0 z-50">
        <div className="mx-auto md:flex ">
          <div className="flex items-center justify-between">
            <a href="#">
              <img
                className="w-[70%] md:w-[80%] lg:w-full"
                src={logo}
                alt="Logo"
              />
            </a>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=""
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  md:mt-0 md:px-2 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between ${isOpen ? "translate-x-0 opacity-100 bg-gradient-to-r from-[#d5dff9] to-[#f8f8f8]" : "opacity-0 -translate-x-full bg-gradient-to-r from-[#d5dff9] to-[#f8f8f8] md:bg-none"
              }`}
          >
            <div className="flex flex-col  md:flex-row lg:mx-10 lg:py-0 font-semibold text-sm text-[#020407] font-plusJakartaSans">
              <Link
                to='/'
                className="px-2.5 py-2  transition-colors duration-300 transform rounded-lg md:mx-2"
              >
                Home
              </Link>
              <a
                href="#"
                className="px-2.5 py-2  transition-colors duration-300 transform rounded-lg md:mx-2"
              >
                About
              </a>
              <a
                href="#"
                className="px-2.5 py-2  transition-colors duration-300 transform rounded-lg md:mx-2"
              >
                Pricing
              </a>
              <Link
                to='/courses'
                className="px-2.5 py-2  transition-colors duration-300 transform rounded-lg md:mx-2"
              >
                Courses
              </Link>
              <Link
                to='/aiSalesCoach'
                className="px-2.5 py-2  transition-colors duration-300 transform rounded-lg md:mx-2"
              >
                Ai Coach
              </Link>
            </div>

            <div className="relative mt-4 md:mt-0 font-manrope">
              <button className="border border-[#010205] rounded-[50px] lg:font-bold text-sm lg:text-base py-2 md:py-2 lg:py-[13px] px-2 md:px-4 lg:px-[35px] text-[#010205]">Get started</button>
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}

export default Navbar;
