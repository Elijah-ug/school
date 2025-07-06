// replace with an engaging photo of clubs or students
import imageFour from "..//../assets/academics.jpeg";

const TeachingAndAssessment = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <img
          src={imageFour}
          alt="Teaching Staff"
          className="w-full md:w-1/2 rounded-2xl shadow object-cover"
        />

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Staff Behind Every Assessment
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            At Muko High School, our dedicated team of teachers carefully crafts continuous assessments, including tests, projects, and examinations. They work tirelessly to monitor student progress and provide tailored support.
          </p>
          <p className="text-gray-700 text-lg">
            Through structured revision, targeted guidance, and comprehensive mock exams, we ensure our learners are well-prepared for their UNEB examinations, empowering them to excel with confidence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeachingAndAssessment;
