import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./ui/home/Home";
import { About } from "./ui/about/About";
import { Academics } from "./ui/academics/Academics";
import { AcademicsOverview } from "./ui/academics/AcademicsOverview";
import { TeachingAndAssessment } from "./ui/academics/TeachingAndAssessment";
import { AcademicDepartments } from "./ui/academics/AcademicDepartments";
import { Curriculum } from "./ui/academics/Curriculum";
import { CoCurricularSupport } from "./ui/academics/CocurricularSupport";
import { Admissions } from "./ui/admissions/Admissions";
import { Contacts } from "./ui/contacts/Contacts";
import { Footer } from "./ui/footer/Footer";
import { NavBar } from "./ui/navigation/NavBar";
import { Test } from "./ui/navigation/Test";
import { CoreValues } from "./ui/about/CoreValues";
import { Facilities } from "./ui/about/Facilities";
import { History } from "./ui/about/History";
import { MissionVision } from "./ui/about/MissionVission";
import { MobileNavBar } from "./ui/navigation/MobileNavBar";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="main flex-grow">
        <div className="nav">
          <MobileNavBar />
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* about */}
          <Route path="about" element={<About />}>
            <Route path="core-values" element={<CoreValues />} />
            <Route path="facilities" element={<Facilities />} />
            <Route path="history" element={<History />} />
            <Route path="mission-and-vission" element={<MissionVision />} />
          </Route>
          {/* academics */}
          <Route path="academics" element={<Academics />}>
            <Route path="overview" element={<AcademicsOverview />} />
            <Route path="teaching-and-assessment" element={<TeachingAndAssessment />} />
            <Route path="academic-departments" element={<AcademicDepartments />} />
            <Route path="curriculum" element={<Curriculum />} />
            <Route path="co-curriculars" element={<CoCurricularSupport />} />
          </Route>

          <Route path="admissions" element={<Admissions />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
