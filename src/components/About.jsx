
export default function About() {
  return (
    <div className="flex p-6 items-center justify-center mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        <div className="abt bg-gray-600 shadow-2xl rounded-2xl p-6  hover:text-gray-900 hover:bg-gray-300">
        <h2 className="text-xl font-bold  mb-4">About Us</h2>
          <p className="leading-relaxed">
            Muko High School is a community-based government-aided school located
            in western Uganda. Established in 1998, the school has grown steadily to become one
            of the leading institutions offering quality secondary education in the region.</p>
        </div>
        <div className="mission bg-gray-600 shadow-2xl rounded-2xl p-6 hover:text-gray-900 hover:bg-gray-300">
        <h2 className="text-xl font-bold  mb-4">Our Mission</h2>
          <p className="leading-relaxed">
            To provide holistic, inclusive, and affordable education that empowers learners
            with knowledge, skills, and values for national development.</p>
        </div>
        <div className="vision bg-gray-600 shadow-2xl rounded-2xl p-6  hover:text-gray-900 hover:bg-gray-300">
           <h2 className="text-xl font-bold  mb-4">Our Vision</h2>
           <p className="leading-relaxed">To be a center of academic excellence and moral integrity in Uganda and beyond.</p>
        </div>
        <div className="values bg-gray-600 shadow-2xl rounded-2xl p-6  hover:text-gray-900 hover:bg-gray-300">
           <h2 className="text-xl font-bold  mb-4">Our Core Values</h2>
            <div>
            <p>Discipline and Integrity</p>
            <p>Academic Excellence</p>
            <p>Teamwork and Collaboration</p>
            <p>Respect and Inclusivity</p>
            <p>Innovation and Creativity</p>
          </div>
        </div>
        <div className="facilitis bg-gray-600 shadow-2xl rounded-2xl p-6  hover:text-gray-900 hover:bg-gray-300">
        <h2 className="text-xl font-bold  mb-4">Facilities</h2>
          <p className="leading-relaxed">
            We boast of modern science laboratories, a computer lab with internet access,
            a library, a sports ground, and boarding facilities to support students' all-round growth.
          </p>
        </div>
        <div className="contact bg-gray-600 shadow-2xl rounded-2xl p-6  hover:text-gray-900 hover:bg-gray-300">
        <h2 className="text-xl font-bold  mb-4">Contact Us</h2>
          <p>
              <strong>Location:</strong> Muko, Rubanda along Kabale Kisoro Road, Uganda <br />
              <strong>Phone:</strong> +256 782 123456 <br />
              <strong>Email:</strong> info@mukohs.ac.ug
          </p>
        </div>
      </div>
    </div>
  )
}
