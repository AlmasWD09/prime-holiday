"use client"
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 ">
      <section className="container mx-auto px-4">
        <div className="flex justify-center">
          <h1 className="text-[64px] font-Montserrat font-semibold text-primary">Connect with us</h1>
        </div>



        <div className="flex justify-between">
         <div>
           {/* left site */}
           <div className="flex gap-3">
            {/* icons */}
            <span><FaFacebook /></span>
            <span><FaFacebook /></span>
            <span><FaFacebook /></span>
            <span><FaFacebook /></span>
            <hr className="text-red-400 py-6"/>
          </div>
            <span><FaFacebook /></span>
         </div>



          {/* right site */}
          <div>right</div>

        </div>
      </section>
    </footer>
  )
}

export default Footer