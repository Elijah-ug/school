import React from "react";
// dummy images from obs
import imageOne from "..//../assets/dummy-img.jpeg";

const oldStudents = [
  {
    image: imageOne,
    name: "Mark Zuckerberg",
    testmonial: "The school taught me resilience and leadership skills I still use toda",
  },
  {
    image: imageOne,
    name: "Jeff Bezo",
    testmonial: "I met lifelong friends and learned the value of hard work here",
  },
  {
    image: imageOne,
    name: "Elon Musk",
    testmonial: "This school helped me discover my passion for science",
  },
  {
    image: imageOne,
    name: "Satoshi Nakamoto",
    testmonial: "’ll always cherish the memories and supportive community",
  },
];
export const Alumni = () => {
  return (
    <div className="min-h-screen pt-3 bg-gray-8000 px-3 sm:px-10 rounded">
      {/* description */}
      <div className="flex flex-col gap-2 py-5 ">
        <h2 className="text-bold text-2xl">Our Alumni</h2>
        <p>
          What Great Ladies & Gentlemen say about their experience <br />
          during their time at Muko High School
        </p>
      </div>
      <div className="imgs">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:p-8  rounded">
          {/* <!-- Card 1 --> */}
          {oldStudents.map((ob, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl shadow p-4 flex flex-col items-center text-center">
              <img src={ob.image} alt="Alumnus 1" className="w-32 h-32 rounded-full object-cover mb-4" />
              <h3 className="text-lg font-bold mb-2 ">{ob.name}</h3>
              <p className="">{ob.testmonial}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
