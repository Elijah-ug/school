import React from "react";
import { BookOpen, FlaskConical, Monitor, BedDouble } from "lucide-react";
import { IoFootball } from "react-icons/io5";

export const Facilities = () => {
  const facilities = [
    {
      title: "Science Laboratories",
      description:
        "Well-equipped labs for Physics, Chemistry, and Biology, giving students hands-on experience in scientific learning.",
      icon: <FlaskConical className="w-8 h-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1579165466991-467135ad3110?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Computer Lab",
      description:
        "Modern computer laboratory with internet access, supporting ICT learning and digital skills development.",
      icon: <Monitor className="w-8 h-8 text-green-600" />,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Library",
      description:
        "A rich collection of academic books, reference materials, and digital resources to support independent learning.",
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Sports Ground",
      description: "Spacious sports fields and courts to encourage physical fitness, teamwork, and talent development.",
      icon: <IoFootball className="w-8 h-8 text-orange-600" />,
      image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Boarding Facilities",
      description:
        "Comfortable hostels providing a safe and nurturing environment for learners from different regions.",
      icon: <BedDouble className="w-8 h-8 text-red-600" />,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero */}
      <div className="relative h-[300px] sm:h-[400px] w-full">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80"
          alt="School Facilities"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center  px-4">
          <h1 className="text-3xl sm:text-5xl font-bold">Our Facilities</h1>
          <p className="mt-3 text-lg max-w-2xl">
            Creating an environment that nurtures learning, growth, and excellence.
          </p>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="px-3 sm:px-10 py-8 sm:py-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, idx) => (
            <div key={idx} className="bg-gray-800 rounded shadow-lg hover:shadow-xl transition overflow-hidden">
              <img src={facility.image} alt={facility.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {facility.icon}
                  <h2 className="text-xl font-semibold text-gray-800">{facility.title}</h2>
                </div>
                <p className="">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
