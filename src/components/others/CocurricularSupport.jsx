// replace with an engaging photo of clubs or students
import imageOne from "..//../assets/co.jpg";
const CoCurricularSupport = () => {
  return (
    <div className="bg-gray-700 py-12 px-6 rounded md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8">
        {/* Image */}
        <img
          src={imageOne}
          alt="Co-Curricular Activities"
          className="w-full md:w-1/2 rounded-2xl shadow object-cover"
        />

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unlocking Potential Beyond the Classroom
          </h2>
          <p className=" text-lg mb-4">
            At Muko High School, we believe in holistic education. Our vibrant academic clubs—Debate, Science Club, Writers Club, and ICT Club—help learners deepen their understanding and develop critical thinking skills.
          </p>
          <p className=" text-lg">
            These clubs offer opportunities for collaboration, creativity, and exploration, building well-rounded individuals ready to thrive in the modern world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoCurricularSupport;
