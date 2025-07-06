import { Link, Outlet } from "react-router-dom";
import Academic from "./others/Academic";
import AcademicDepartments from "./others/AcademicDepartments";
import CoCurricularSupport from "./others/CocurricularSupport";
import TeachingAndAssessment from "./others/TeachingAndAssessment";
import { HiAcademicCap } from "react-icons/hi";
import { SiBookstack } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { HiMiniUserGroup } from "react-icons/hi2";

export default function Academics() {
  return (
    <div className="py-10 px-4">
      <div className="flex gap-4">
        <div className="flex flex-col gap-14 p-2 text-green-600">
          <Link to="academic" className="flex gap-1 items-center">
            <span>Academics</span>
            <HiAcademicCap />
          </Link>

          <Link to="curriculum" className="flex gap-1 items-center">
            <span>Curriculum</span>
            <SiBookstack />
          </Link>

          <Link to="assessmentandteaching" className="flex gap-1 items-center">
            <span>Teaching</span>
            <GiTeacher />
          </Link>

          <Link to="academic-departments" className="flex gap-1 items-center">
            <span>Departments</span>
            <HiMiniUserGroup />
          </Link>

          <Link to="co-curricular" className="flex gap-1 items-center">
            <span>CoCurriculars</span>
            <SiBookstack />
          </Link>

        </div>
        <Outlet/>
      </div>
    </div>
  )
}
