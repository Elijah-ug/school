// dummy images from to go down
import imageOne from "../../assets/co.jpg";
import imageTwo from "../../assets/co.jpg";
export const AcademicsOverview = () => {
  return (
    <div className="px-3 py-8 md:px-10 min-h-screen">
      <div className="">
        {/* <!-- Description --> */}
        <p className=" sm:text-lg mb-12">
          At Muko High School, we are committed to providing a world-className education that empowers our students to
          excel academically and grow personally. Our curriculum is designed to challenge and inspire every learner.
        </p>

        {/* <!-- Images --> */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <img src={imageOne} alt="Academic Excellence" className="w-full max-w-xl rounded shadow object-cover" />
          <img src={imageTwo} alt="Learning Environment" className="w-full max-w-xl  rounded shadow object-cover" />
        </div>
      </div>
    </div>
  );
};
