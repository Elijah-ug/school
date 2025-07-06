// dummy images for departments
import imageOne from "..//../assets/co.jpg";
import imageTwo from "..//../assets/ent.jpg";
import imageThree from "..//../assets/selfie.jpg";
import imageFour from "..//../assets/academics.jpeg";
const departments = [
  {
    name: "Sciences Department",
    img: imageFour,
    description:
      "Our Sciences Department inspires students to explore Physics, Chemistry, Biology, and Mathematics through hands-on experiments and critical thinking, laying the foundation for STEM careers.",
  },
  {
    name: "Humanities Department",
    img: imageOne,
    description:
      "The Humanities Department cultivates analytical and ethical thinkers through History, Geography, and Religious Education, preparing students to understand society and their role in it.",
  },
  {
    name: "Languages Department",
    img: imageThree,
    description:
      "Our Languages Department develops communication skills in English and Literature, nurturing confident speakers, readers, and writers ready for the global stage.",
  },
  {
    name: "ICT & Business Department",
    img: imageTwo,
    description:
      "The ICT & Business Department equips students with practical digital and entrepreneurial skills to succeed in today’s technology-driven and business-oriented world.",
  },
];

const AcademicDepartments = () => {
  return (
    <div className="bg-gray-700 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Academic Departments
        </h2>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl shadow overflow-hidden flex flex-col"
            >
              <img
                src={dept.img}
                alt={dept.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  {dept.name}
                </h3>
                <p className="text-gray-600">{dept.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicDepartments;
