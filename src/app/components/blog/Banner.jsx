"use client"

import Link from "next/link"

const Banner = () => {
  return (
    <section className="relative w-full h-[356px] lg:h-[550px] bg-no-repeat bg-cover bg-center text-white" style={{
        backgroundImage: "url(http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735114190/oeijgijsvuuweznohxgj.png)"
      }}>
       
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="lg:text-[64px] text-primary">Explore Our Blogs</h1>
          <p>Expert Holiday Tips and Guides</p>
        </div>
        <div className="bg-[#135029] py-3">
          <div className="container mx-auto">
              <h2><Link className="cursor-pointer text-primary" href={'/'}>Home</Link><span className="px-2">/</span>Blogs</h2>
          </div>
        </div>
      </section>
  )
}

export default Banner
