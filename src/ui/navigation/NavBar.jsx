import { useEffect, useState } from "react";
import { BiFootball } from "react-icons/bi";
import { FcDepartment } from "react-icons/fc";
import { GiTeacher } from "react-icons/gi";
import { HiAcademicCap } from "react-icons/hi";
import { SiBookstack } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    console.log(isHovered);
  }, [isHovered]);
  return (
    <div className="flex items-center justify-between px-10 bg-green-700 font-bold py-3 sm:py-5 text-amber-400">
      <Link to="/" className="text-gray-800">MHS</Link>
      <div className="flex gap-12 ">
        <NavLink to="/">Home</NavLink>

        {/* about part */}
        <div className="relative group">
          <NavLink to="about">About Us</NavLink>
          <div className="absolute top-full left-0 hidden group-hover:flex flex-col gap-8 bg-blue-400 p-4 z-50 min-w-[300px] text-gray-200 rounded">
            <NavLink to="about/history" className=" flex gap-3 items-center">
              <span>History</span>
              {/* <HiAcademicCap className="text-blue-600" /> */}
            </NavLink>
            <NavLink to="about/mission-and-vission" className="flex gap-3 items-center ">
              <span>Mission and Vission</span>
              {/* <FcDepartment className="text-blue-600"/> */}
            </NavLink>
            <NavLink to="about/facilities" className="flex gap-3 items-center ">
             <span>Facilities</span>
            {/* <SiBookstack className="text-blue-600" /> */}
            </NavLink>
            <NavLink to="about/core-values" className=" flex gap-3 items-center">
             <span> Core Values</span>
             {/* <BiFootball className="text-blue-600"/> */}
            </NavLink>
          </div>
        </div>

        {/* academics part */}
        <div className="relative group">
          <NavLink to="academics">Academics</NavLink>
          <div className="absolute top-full left-0 hidden group-hover:flex flex-col gap-8 bg-blue-400 p-4 z-50 min-w-[300px] text-gray-200 rounded">
            <NavLink to="academics/overview" className=" flex gap-3 items-center">
              <span>Academics Overview</span>
              <HiAcademicCap className="text-blue-600" />
            </NavLink>
            <NavLink to="academics/academic-departments" className="flex gap-3 items-center ">
              <span>Departments</span>
              <FcDepartment className="text-blue-600"/>
            </NavLink>
            <NavLink to="academics/curriculum" className="flex gap-3 items-center ">
             <span>Curriculum</span>
            <SiBookstack className="text-blue-600" />
            </NavLink>
            <NavLink to="academics/co-curriculars" className=" flex gap-3 items-center">
             <span> Cocurriculars</span>
             <BiFootball className="text-blue-600"/>
            </NavLink>
            <NavLink to="academics/teaching-and-assessment" className="flex gap-3 items-center">
              <span>Teaching and Assessment</span>
              <GiTeacher className="text-blue-600" />
            </NavLink>
          </div>
        </div>

        <NavLink to="admissions">Admissions</NavLink>
        <NavLink to="contacts">Contact Us</NavLink>
      </div>
    </div>
  );
}
