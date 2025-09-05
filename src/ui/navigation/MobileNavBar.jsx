import { useEffect, useState } from "react";
import { BiFootball } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";
import { FcDepartment } from "react-icons/fc";
import { GiTeacher } from "react-icons/gi";
import { HiAcademicCap } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { SiBookstack } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";

export const MobileNavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleIsActive = () => {
    console.log(isActive);
    setIsActive(!isActive);
  };
  return (
    <div className="flex sm:hidden items-center justify-between px-10 bg-green-700 font-bold py-3 sm:py-5 text-amber-400">
      <Link to="/" className="text-gray-800">
        MHS
      </Link>
      <div className="flex flex-col items-end relative">
        <button onClick={handleIsActive}>{isActive ? <IoClose /> : <FaBars />}</button>
        <div className={isActive ? " absolute top-8 z-20 flex flex-col px-15 py-3 gap-5 bg-stone-500 " : "hidden"}>
          <NavLink onClick={() => setIsActive(false)} to="/">
            Home
          </NavLink>

          {/* about part */}
          <div className="relative group">
            <span>About Us</span>
            <div className="absolute top-full left-0 hidden group-hover:flex flex-col gap-8 bg-blue-400 p-4 z-50 min-w-[300px] text-gray-200 rounded">
              <NavLink onClick={() => setIsActive(false)} to="about/history" className=" flex gap-3 items-center">
                History
              </NavLink>
              <NavLink
                onClick={() => setIsActive(false)}
                to="about/mission-and-vission"
                className="flex gap-3 items-center "
              >
                Mission and Vission
              </NavLink>
              <NavLink onClick={() => setIsActive(false)} to="about/facilities" className="flex gap-3 items-center ">
                Facilities
              </NavLink>
              <NavLink onClick={() => setIsActive(false)} to="about/core-values" className=" flex gap-3 items-center">
                Core Values
              </NavLink>
            </div>
          </div>

          {/* academics part */}
          <div className="relative group">
            <span to="academics">Academics</span>
            <div className="absolute top-full left-0 hidden group-hover:flex flex-col gap-8 bg-blue-400 p-4 z-50 min-w-[300px] text-gray-200 rounded">
              <NavLink onClick={() => setIsActive(false)} to="academics/overview" className=" flex gap-3 items-center">
                Academics Overview
              </NavLink>
              <NavLink
                onClick={() => setIsActive(false)}
                to="academics/academic-departments"
                className="flex gap-3 items-center "
              >
                Departments
              </NavLink>
              <NavLink
                onClick={() => setIsActive(false)}
                to="academics/curriculum"
                className="flex gap-3 items-center "
              >
                Curriculum
              </NavLink>
              <NavLink
                onClick={() => setIsActive(false)}
                to="academics/co-curriculars"
                className=" flex gap-3 items-center"
              >
                Cocurriculars
              </NavLink>
              <NavLink
                onClick={() => setIsActive(false)}
                to="academics/teaching-and-assessment"
                className="flex gap-3 items-center"
              >
                Teaching and Assessment
              </NavLink>
            </div>
          </div>
          <NavLink onClick={() => setIsActive(false)} to="admissions">
            Admissions
          </NavLink>
          <NavLink onClick={() => setIsActive(false)} to="contacts">
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};
