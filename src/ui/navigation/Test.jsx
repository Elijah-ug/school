import { NavLink } from "react-router-dom";

export const Test = () => {
  return (
    <div className="relative group">
      <NavLink to="/academics" className="text-white hover:text-yellow-300">
        Academics
      </NavLink>

      <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white text-black shadow-lg p-4 z-50 min-w-[200px]">
        <NavLink to="/academics/overview" className="hover:text-blue-600">
          Academic
        </NavLink>
        <NavLink to="/academics/departments" className="hover:text-blue-600">
          Departments
        </NavLink>
        <NavLink to="/academics/curriculum" className="hover:text-blue-600">
          Curriculum
        </NavLink>
        <NavLink to="/academics/cocurriculars" className="hover:text-blue-600">
          Cocurriculars
        </NavLink>
        <NavLink to="/academics/assessment" className="hover:text-blue-600">
          Student Assessment
        </NavLink>
      </div>
    </div>
  );
};
