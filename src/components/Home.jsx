import bgImg from "../assets/bg-home.jpg"
import Alumni from "./others/Alumni"
import Staff from "./others/Staff"
export default function Home() {
  return (
    <div>
      <div
      className="relative bg-cover bg-center h-screen w-full bg-no-repeat  flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }} >
      {/* <img src={bgImg} alt="" /> */}
      <div class="absolute inset-0 bg-black/60"></div>
      <div className="relative flex items-center flex-col gap-2 z-10 font-bold p-10">
         <h3 className="text-4xl tracking-widest word-spacing">Muko high School</h3>
         <h4 className="text-2xl">Welcome to Our School</h4>
        </div>
      </div>
      <div className="p-10">
      <Alumni />
      <Staff/>
      </div>

    </div>
  )
}
