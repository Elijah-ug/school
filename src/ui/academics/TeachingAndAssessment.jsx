// replace with an engaging photo of clubs or students
import imageFour from "..//../assets/academics.jpeg";
import imageLogo from "..//../assets/staff.jpeg";

export const TeachingAndAssessment = () => {
  return (
    <div className=" py-12 px-6 md:px-16 lg:px-24  rounded">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Image */}
        <img src={imageFour} alt="Teaching Staff" className="w-full md:w-1/2 rounded shadow object-cover " />

        {/* Text */}
        <div className="flex-1 bg-gray-600 p-2 rounded relative ">
          <h2 className="text-xl md:text-4xl font-bold mb-4">Staff Behind Every Assessment</h2>
          <p className=" text-lg mb-4">
            At Muko High School, our dedicated team of teachers carefully crafts continuous assessments, including
            tests, projects, and examinations. They work tirelessly to monitor student progress and provide tailored
            support.
          </p>
          <p className=" text-lg">
            Through structured revision, targeted guidance, and comprehensive mock exams, we ensure our learners are
            well-prepared for their UNEB examinations, empowering them to excel with confidence.
          </p>
          <div className="logo hidden sm:block absolute top-2 right-2">
          <img src={imageLogo} alt="" className="w-20 h-20 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6" />
        </div>
        </div>
        
      </div>
    </div>
  );
};
