// dummy images from obs
import imageOne from "..//../assets/co.jpg";
import imageTwo from "..//../assets/co.jpg";
import imageThree from "..//../assets/co.jpg";
import imageFour from "..//../assets/co.jpg";

const leaders = [
  {
    name: "Mr. Sympson Ivan",
    image: imageOne,
    title: "Head Teacher",
    contact: "📞 +256 700 000001",
    email: "hm@school.com",
    message: "Our school fosters academic excellence and nurtures future leaders in a caring environment"
  },
  {
    name: "Mr. Sympson Ivan",
     image: imageOne,
    title: "Head Teacher",
    contact: "📞 +256 700 000001",
    email: "hm@school.com",
    message: "Our school fosters academic excellence and nurtures future leaders in a caring environment"
  },
  {
    name: "Mr. Sympson Ivan",
     image: imageOne,
    title: "Head Teacher",
    contact: "📞 +256 700 000001",
    email: "hm@school.com",
    message: "Our school fosters academic excellence and nurtures future leaders in a caring environment"
  },
]

export const Staff = () => {
  return (
    <div className="  pt-4 flex items-center justify-center ">
      <div >
        <h2 className="text-2xl font-bold text-center">Our Administration</h2>

      <div className="grid  sm:grid-cols-3 grid-cols-1 gap-3 sm:gap-8 py-15 rounded">
        {/* <!-- HM --> */}
        {
          leaders.map((leader)=>
            <div className=" bg-gray-800 rounded p-6">
          <img src={leader.image} alt="leader" className="h-60 w-full rounded object-cover mb-4 sm:mb-0 sm:mr-6" />
          <div className="py-3">
            <h3 className="sm:text-xl text-lg mb-1 ">{leader.name}</h3>
            <h3 className=" mb-1 ">{leader.title}</h3>
            <div className=" pt-3">
              <div className="flex flex-col gap-1">
                <span>{leader.contact}</span> 
                <span>{leader.email}</span>
              </div>
            </div>
            <p className="">
              
            </p>
          </div>
        </div>
          )
        }

      </div>
      </div>
    </div>
  );
};
