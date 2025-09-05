import React from "react";
import { motion } from "framer-motion";
// import {motion } from "motion/react"
import imgHolder from "../../assets/bg-home.jpg";
export const History = () => {
  return (
    <div className="min-h-screen px-3 sm:px-10 py-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 ">
        <h1 className="text-3xl sm:text-4xl font-bold ">Our History</h1>
        <p className="mt-3 ">A journey of growth, excellence, and community impact.</p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8 items-center ">
        {/* Image */}
       <div className="rounded">
         <motion.img
          src={imgHolder}
          alt="Muko High School"
          className="rounded shadow-lg"
          whileHover={{ scale: 1.05 }}
        />
       </div>

        {/* Text */}
        <motion.div whileHover={{ scale: 1.05 }}
   className="bg-gray-800 p-3 rounded">
          <p className="text-lg leading-relaxed ">
            <span className="font-semibold">Muko High School</span> is a community-based government-aided school located
            in western Uganda. Established in <span className="font-bold">1998</span>, the school has grown steadily to
            become one of the leading institutions offering quality secondary education in the region.
          </p>

          {/* Timeline / Milestones */}
          <ul className="mt-5 space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 bg-blue-500 rounded-full mt-2"></span>
              <p>
                <span className="font-semibold">1998:</span> Founded with only 50 students.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full mt-2"></span>
              <p>
                <span className="font-semibold">2005:</span> Expanded to O-level and A-level.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-3 h-3 bg-purple-500 rounded-full mt-2"></span>
              <p>
                <span className="font-semibold">2020:</span> Became a regional center of academic excellence.
              </p>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
