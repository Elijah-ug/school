import React from 'react'
// dummy images from obs
import imageOne from "..//../assets/co.jpg";
import imageTwo from "..//../assets/co.jpg";
import imageThree from "..//../assets/co.jpg";
import imageFour from "..//../assets/co.jpg";
export default function Alumni() {
  return (
      <div>
          {/* description */}
          <div className="flex flex-col gap-2 py-4">
          <h2 className="text-bold text-2xl">Our Alumni</h2>
          <p>What Great Ladies & Gentlemen say about their experience <br />
              during their time at Muko High School
          </p>
          </div>
          <div className="imgs">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-gray-700 rounded">
  {/* <!-- Card 1 --> */}
  <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center">
    <img src={imageOne} alt="Alumnus 1" className="w-32 h-32 rounded-full object-cover mb-4"/>
    <h3 className="text-lg font-bold mb-2 text-gray-600">Mark Zuckerberg</h3>
    <p className="text-gray-600">The school taught me resilience and leadership skills I still use today</p>
  </div>

  {/* <!-- Card 2 --> */}
  <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center">
    <img src={imageTwo} alt="Alumnus 2" className="w-32 h-32 rounded-full object-cover mb-4"/>
    <h3 className="text-lg font-bold mb-2 text-gray-600">Jeff Bezos</h3>
    <p className="text-gray-600">I met lifelong friends and learned the value of hard work here</p>
  </div>

  {/* <!-- Card 3 --> */}
  <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center">
    <img src={imageThree} alt="Alumnus 3" className="w-32 h-32 rounded-full object-cover mb-4"/>
    <h3 className="text-lg font-bold mb-2 text-gray-600">Elon Musk</h3>
    <p className="text-gray-600">This school helped me discover my passion for science</p>
  </div>

  {/* <!-- Card 4 --> */}
  <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center">
    <img src={imageFour} alt="Alumnus 4" className="w-32 h-32 rounded-full object-cover mb-4"/>
    <h3 className="text-lg font-bold mb-2 text-gray-600">Satoshi Nakamoto</h3>
    <p className="text-gray-600">I’ll always cherish the memories and supportive community</p>
  </div>
</div>

          </div>
    </div>
  )
}
