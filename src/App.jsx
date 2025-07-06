import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Home from './components/Home'
import About from './components/About'
import Academics from './components/Academics'
import Admissions from './components/Admissions'
import Contacts from './components/Contacts'
import NavBar from './components/navigation/NavBar'
import Academic from './components/others/Academic'
import TeachingAndAssessment from './components/others/TeachingAndAssessment'
import AcademicDepartments from './components/others/AcademicDepartments'
import CoCurricularSupport from './components/others/CocurricularSupport'
import Curriculum from './components/others/Curriculum'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="main flex-grow">
      <div className="nav">
        <NavBar/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="academics" element={<Academics />}>
          <Route path="academic" element={<Academic />} />
          <Route path="assessmentandteaching" element={<TeachingAndAssessment />} />
          <Route path="academic-departments" element={<AcademicDepartments />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="co-curricular" element={<CoCurricularSupport/>}/>
        </Route>

        <Route path="admissions" element={<Admissions />} />
        <Route path="contacts" element={<Contacts/> } />
      </Routes>
      </div>
      {/* footer */}
      <Footer/>
      </div>
  )
}
