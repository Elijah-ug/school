import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Home from './components/Home'
import About from './components/About'
import Academics from './components/Academics'
import Admissions from './components/Admissions'
import Contacts from './components/Contacts'
import NavBar from './components/navigation/NavBar'

export default function App() {
  return (
    <div>
      <div className="nav">
        <NavBar/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="academics" element={<Academics />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="contacts" element={<Contacts/> } />
      </Routes>
    </div>
  )
}
