import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

export const MobileNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(""); // track which dropdown is open

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? "" : name);
  };

  return (
    <div className="flex sm:hidden items-center justify-between px-5 bg-green-700 font-bold py-3 text-amber-400 relative">
      <Link to="/" className="text-gray-800 text-xl">
        MHS
      </Link>

      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <IoClose size={24} /> : <FaBars size={24} />}
      </button>

      {isMenuOpen && (
        <div className="absolute top-full right-0 w-full bg-stone-700 flex flex-col gap-2 p-4 z-50">
          <NavLink onClick={() => setIsMenuOpen(false)} to="/" className="py-2 px-3 hover:bg-green-600 rounded">
            Home
          </NavLink>

          {/* About Us */}
          <div className="flex flex-col">
            <button
              onClick={() => toggleDropdown("about")}
              className="flex justify-between items-center py-2 px-3 hover:bg-green-600 rounded"
            >
              About Us
              <span>{openDropdown === "about" ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}</span>
            </button>
            {openDropdown === "about" && (
              <div className="flex flex-col pl-15 mt-2 gap-1">
                <NavLink onClick={() => setIsMenuOpen(false)} to="about/history" className="py-1 hover:text-yellow-300">
                  History
                </NavLink>
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  to="about/mission-and-vission"
                  className="py-1 hover:text-yellow-300"
                >
                  Mission & Vision
                </NavLink>
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  to="about/facilities"
                  className="py-1 hover:text-yellow-300"
                >
                  Facilities
                </NavLink>
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  to="about/core-values"
                  className="py-1 hover:text-yellow-300"
                >
                  Core Values
                </NavLink>
              </div>
            )}
          </div>

          {/* Academics */}
          <div className="flex flex-col mt-2">
            <button
              onClick={() => toggleDropdown("academics")}
              className="flex justify-between items-center py-2 px-3 hover:bg-green-600 rounded"
            >
              <span>Academics</span>
              <span>{openDropdown === "academics" ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}</span>
            </button>
            {openDropdown === "academics" && (
              <div className="flex flex-col pl-15 mt-2 gap-1">
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  to="academics/overview"
                  className="py-1 hover:text-yellow-300"
                >
                  Overview
                </NavLink>
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  to="academics/academic-departments"
                  className="py-1 hover:text-yellow-300"
                >
                  Departments
                </NavLink>
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  to="academics/curriculum"
                  className="py-1 hover:text-yellow-300"
                >
                  Curriculum
                </NavLink>
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  to="academics/co-curriculars"
                  className="py-1 hover:text-yellow-300"
                >
                  Cocurriculars
                </NavLink>
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  to="academics/teaching-and-assessment"
                  className="py-1 hover:text-yellow-300"
                >
                  Teaching & Assessment
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            onClick={() => setIsMenuOpen(false)}
            to="admissions"
            className="py-2 px-3 hover:bg-green-600 rounded"
          >
            Admissions
          </NavLink>
          <NavLink onClick={() => setIsMenuOpen(false)} to="contacts" className="py-2 px-3 hover:bg-green-600 rounded">
            Contact Us
          </NavLink>
        </div>
      )}
    </div>
  );
};
