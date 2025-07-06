// dummy images from to go down
import imageOne from "..//../assets/co.jpg";
import imageTwo from "..//../assets/co.jpg";
export default function Academic() {
  return (
      <div>
          <div className=" p-10 md:px-16 lg:px-24">
  <div className="max-w-7xl mx-auto">
    {/* <!-- Title --> */}
    <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-6">
      Academics at Muko High School
    </h2>

    {/* <!-- Description --> */}
    <p className="text-center text-lg mb-12">
      At Muko High School, we are committed to providing a world-className education that empowers our students to excel academically and grow personally. Our curriculum is designed to challenge and inspire every learner.
    </p>

    {/* <!-- Images --> */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
      <img src={imageOne} alt="Academic Excellence" className="w-full md:w-1/2 rounded-2xl shadow object-cover"/>
      <img src={imageTwo} alt="Learning Environment" className="w-full md:w-1/2 rounded-2xl shadow object-cover"/>
    </div>
  </div>
</div>

    </div>
  )
}
