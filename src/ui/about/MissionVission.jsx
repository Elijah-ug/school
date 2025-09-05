import React from "react";
import { Target, Eye } from "lucide-react"; // icons
// import { motion } from "motion/react";
import { motion } from "framer-motion";

export const MissionVision = () => {
  return (
    <div className="min-h-screen px-4 sm:px-10 py-12 ">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">Mission & Vision</h1>
        <p className="mt-3">Guiding principles that drive our school’s growth and impact.</p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-103 ease-in-out">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-semibold ">Our Mission</h2>
          </div>
          <p className=" leading-relaxed">
            To provide holistic, inclusive, and affordable education that empowers learners with knowledge, skills, and
            values for national development.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-103 ease-in-out">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-semibold ">Our Vision</h2>
          </div>
          <p className=" leading-relaxed">
            To be a center of academic excellence and moral integrity in Uganda and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};
