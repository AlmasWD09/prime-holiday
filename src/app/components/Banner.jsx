
"use client"
import { GoArrowUpRight } from "react-icons/go";

const Banner = () => {
  return (
    <div
      className=" bg-black/95 w-full h-[356px] lg:h-[550px] bg-no-repeat bg-cover bg-center "
    // style={{
    //   backgroundImage: "url(https://i.ibb.co.com/9VBbGDG/ban.jpg)"
    // }}
    >


      {/* Content */}
      <div className="relative z-10 grid justify-center items-center h-[356px] lg:h-[550px] text-white p-8">
        <div>
          <h1 className=" text-center text-[24px] lg:text-[70px] text-primary font-semibold  mb-5">Your All-Inclusive Journey Starts Here</h1>
          <p className="text-[32px] font-bold w-[65%] mx-auto text-center"> “  The Essence of a Holiday is to Enrich 
          Our Lives and Create Lasting Memories  ”</p>
        </div>
      </div>
    </div>
  )
}

export default Banner

