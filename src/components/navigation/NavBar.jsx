import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
      <div className="flex items-center justify-between px-10 bg-gray-800 text-white py-3">
          <h3 className="font-bold">MHS</h3>
          <div className="flex gap-12 ">
               <NavLink to="/">Home</NavLink>
               <NavLink to="about">About Us</NavLink>
               <NavLink to="academics">Academics</NavLink>
               <NavLink to="admission">Admissions</NavLink>
               <NavLink to="contacts">Contact Us</NavLink>
              </div>
    </div>
  )
}
