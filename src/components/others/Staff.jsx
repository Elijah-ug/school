// dummy images from obs
import imageOne from "..//../assets/co.jpg";
import imageTwo from "..//../assets/co.jpg";
import imageThree from "..//../assets/co.jpg";
import imageFour from "..//../assets/co.jpg";

export default function Staff() {
  return (
      <div className="pt-10">
          <div className="text-2xl font-bold">Our Administration</div>

          <div class="flex flex-col gap-8 p-8 bg-gray-600 rounded shadow">
  {/* <!-- HM --> */}
  <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow p-6">
    <img src={imageOne} alt="Headmaster" className="w-40 h-40 rounded object-cover mb-4 sm:mb-0 sm:mr-6"/>
    <div>
      <h3 className="text-2xl font-bold mb-1 text-gray-600">Mr. Sympson Ivan, Head Teacher</h3>
      <p className="text-gray-600 mb-2">📞 +256 700 000001 | ✉️ hm@school.com</p>
      <p className="text-gray-700">Our school fosters academic excellence and nurtures future leaders in a caring environment</p>
    </div>
  </div>

  {/* <!-- Deputy --> */}
  <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow p-6">
    <img src={imageTwo} alt="Deputy Headmaster" className="w-40 h-40 rounded object-cover mb-4 sm:mb-0 sm:mr-6"/>
    <div>
      <h3 className="text-2xl font-bold mb-1 text-gray-600">Ms. The Teacher's, Deputy HM</h3>
      <p className="text-gray-600 mb-2">📞 +256 700 000002 | ✉️ deputy@school.com</p>
      <p className="text-gray-700">We empower every child with the confidence and skills they need to succeed in life</p>
    </div>
  </div>

  {/* <!-- DoS --> */}
  <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow p-6">
    <img src={imageThree} alt="Director of Studies" className="w-40 h-40 rounded object-cover mb-4 sm:mb-0 sm:mr-6"/>
    <div>
      <h3 className="text-2xl font-bold mb-1 text-gray-600">Mr. Elicom, DoS</h3>
      <p className="text-gray-600 mb-2">📞 +256 700 000003 | ✉️ dos@school.com</p>
      <p className="text-gray-700">We offer a dynamic curriculum that sparks curiosity and a love of learning</p>
    </div>
  </div>
</div>

    </div>
  )
}
