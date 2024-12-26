"use client"

import Link from "next/link"


const Banner = () => {
  return (
    <section className="relative w-full w-full h-[356px] lg:h-[750px] bg-no-repeat bg-cover bg-center text-white" style={{
      backgroundImage: "url(http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735118760/hhaue6mfdge2atqsry9b.png)"
    }}>
     
      <div className="flex justify-center items-center h-full">
        <h1 className="lg:text-[64px] text-primary">Cancellation and Refund</h1>
      </div>
      <div className="bg-[#135029] py-3">
        <div className="container mx-auto">
            <h2><Link className="cursor-pointer text-primary" href={'/'}>Home</Link><span className="px-2">/</span>Cancellation and Refund</h2>
        </div>
      </div>
    </section>
  )
}

export default Banner
