import React from "react";
import { ShieldCheck, GraduationCap, Users, HeartHandshake, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export const CoreValues = () => {
  const values = [
    {
      title: "Discipline & Integrity",
      description: "We nurture responsible learners who uphold honesty and ethical conduct in all aspects of life.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Academic Excellence",
      description: "We inspire students to strive for high standards of achievement and continuous improvement.",
      icon: <GraduationCap className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Teamwork & Collaboration",
      description: "We believe in working together, supporting one another, and building a sense of community.",
      icon: <Users className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Respect & Inclusivity",
      description: "We celebrate diversity and ensure a welcoming environment where everyone feels valued.",
      icon: <HeartHandshake className="w-8 h-8 text-pink-600" />,
    },
    {
      title: "Innovation & Creativity",
      description: "We encourage curiosity, problem-solving, and the use of modern approaches to learning.",
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero */}
      <div className="relative h-[300px] sm:h-[400px] w-full">
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80"
          alt="Core Values"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
        >
          <h1 className="text-3xl sm:text-5xl font-bold">Our Core Values</h1>
          <p className="mt-3 text-lg max-w-2xl">
            Principles that define our culture, inspire our students, and guide us forward.
          </p>
        </motion.div>
      </div>

      {/* Values Grid */}
      <div className="px-3 sm:px-10 py-12 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className=" bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition p-6 text-center"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{value.title}</h2>
              <p className="">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
