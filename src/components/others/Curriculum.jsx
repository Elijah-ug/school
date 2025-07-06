import React from "react";

const Curriculum = () => {
  return (
    <div className="bg-gray-700 rounded py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Shared heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Muko H/S Curriculum
        </h2>

        {/* O’ Level Curriculum */}
        <div className="bg-gray-100 rounded-2xl shadow p-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">O’ Level Curriculum</h3>
          <p className="text-gray-600 mb-4">
            Our O’ Level curriculum follows the National Curriculum Development Centre (NCDC) guidelines, offering a wide range of foundational subjects to equip students with essential knowledge and skills:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>English Language</li>
            <li>Mathematics</li>
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Biology</li>
            <li>Geography</li>
            <li>History</li>
            <li>Commerce & Entrepreneurship</li>
            <li>Religious Education (CRE/IRE)</li>
            <li>Literature in English</li>
            <li>Agriculture</li>
            <li>Computer Studies (ICT)</li>
            <li>Fine Art</li>
          </ul>
        </div>

        {/* A’ Level Curriculum */}
        <div className="bg-gray-100 rounded-2xl shadow p-6">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">A’ Level Curriculum</h3>
          <p className="text-gray-600 mb-4">
            At the A’ Level, students follow the UNEB syllabus with specialized Arts and Sciences combinations to prepare them for higher education:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sciences */}
            <div>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">Science Combinations:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Mathematics</li>
                <li>Biology</li>
                <li>Subsidiary ICT</li>
                <li>General Paper</li>
              </ul>
            </div>

            {/* Arts */}
            <div>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">Arts Combinations:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>History</li>
                <li>Economics</li>
                <li>Geography</li>
                <li>Literature in English</li>
                <li>Divinity (CRE)</li>
                <li>Entrepreneurship</li>
                <li>Subsidiary ICT</li>
                <li>General Paper</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
