// dummy images from obs
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import imageOne from "..//../assets/dummy-img.jpeg";

const leaders = [
  {
    name: "Mr. Sympson Ivan",
    image: imageOne,
    title: "Head Teacher",
    message: "Our school fosters academic excellence and nurtures future leaders in a caring environment",
    socials: [
      {
        icon: <FaXTwitter />,
        link: "https://twitter.com",
      },
      {
        icon: <FaFacebookF />,
        link: "https://facebook.com",
      },
      {
        icon: <FaLinkedinIn />,
        link: "https://linkedin.com",
      },
      {
        icon: <FaInstagram />,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    name: "Mr. Bukayo Saka ",
    image: imageOne,
    title: "D/HM Administration",
    message: "Our school fosters academic excellence and nurtures future leaders in a caring environment",
    socials: [
      {
        icon: <FaXTwitter />,
        link: "https://twitter.com",
      },
      {
        icon: <FaFacebookF />,
        link: "https://facebook.com",
      },
      {
        icon: <FaLinkedinIn />,
        link: "https://linkedin.com",
      },
      {
        icon: <FaInstagram />,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    name: "Mr. Bruno Fernandez",
    image: imageOne,
    title: "D/HM Academics",
    message: "Our school fosters academic excellence and nurtures future leaders in a caring environment",
    socials: [
      {
        icon: <FaXTwitter />,
        link: "https://twitter.com",
      },
      {
        icon: <FaFacebookF />,
        link: "https://facebook.com",
      },
      {
        icon: <FaLinkedinIn />,
        link: "https://linkedin.com",
      },
      {
        icon: <FaInstagram />,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    name: "Mr. Martin Odegard",
    image: imageOne,
    title: "D.O.S, A'level",
    message: "Our school fosters academic excellence and nurtures future leaders in a caring environment",
    socials: [
      {
        icon: <FaXTwitter />,
        link: "https://twitter.com",
      },
      {
        icon: <FaFacebookF />,
        link: "https://facebook.com",
      },
      {
        icon: <FaLinkedinIn />,
        link: "https://linkedin.com",
      },
      {
        icon: <FaInstagram />,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    name: "Mr. Bryan Mbuwemo",
    image: imageOne,
    title: "D.O.S, O'level",
    message: "Our school fosters academic excellence and nurtures future leaders in a caring environment",
    socials: [
      {
        icon: <FaXTwitter />,
        link: "https://twitter.com",
      },
      {
        icon: <FaFacebookF />,
        link: "https://facebook.com",
      },
      {
        icon: <FaLinkedinIn />,
        link: "https://linkedin.com",
      },
      {
        icon: <FaInstagram />,
        link: "https://linkedin.com",
      },
    ],
  },
];

export const Staff = () => {
  // let lead = leaders.map((lead) => console.log("Leaders info", lead));
  return (
    <div className="min-h-screen pt-3 bg-gray-8000 px-3 sm:px-10 rounded">
      <div>
        <h2 className="text-2xl font-bold text-center">Meet Out Top Management</h2>

        <div className="grid  sm:grid-cols-3 grid-cols-1 gap-3 sm:gap-13 sm:px-20 py-15 rounded">
          {/* <!-- HM --> */}
          {leaders.map((leader, index) => (
            <div key={index} className=" bg-gray-800 rounded ">
              <img src={leader.image} alt="leader" className=" w-[100%]  rounded object-cover mb-4 sm:mb-0 sm:mr-6" />
              <div className="py-3">
                <div className="flex flex-col gap-1 ">
                  <h3 className="sm:text-xl text-lg mb-1 uppercase text-center">{leader.name}</h3>
                  <hr className="text-gray-600 py-4" />
                </div>
                <div className="text-center pb-3">
                  <h4 className="  ">{leader.title}</h4>
                </div>
                <div className="flex items-center justify-around mt-3 ">
                  {leader.socials.map((social, index) => (
                    <div key={index} className="bg-sky-400 p-1">
                      <a href={social.link} target="_blank">
                        {social.icon}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
