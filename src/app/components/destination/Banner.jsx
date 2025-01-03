"use client"

import Link from "next/link"

const Banner = () => {
  return (
    <section className="relative h-[356px] lg:h-[750px] bg-no-repeat bg-cover bg-center text-white" style={{
      backgroundImage: "url(https://i.ibb.co.com/61wdQYz/Oman-1-1.png)"
    }}>
     
      <div className="flex flex-col justify-center items-center h-full space-y-8 lg:space-y-32 text-center">
        <div>
          <h2 className="text-primary text-[44px] lg:text-[96px]">Oman</h2>
          <p>Beauty Has an Address</p>
        </div>
      </div>

    </section>
  )
}

export default Banner