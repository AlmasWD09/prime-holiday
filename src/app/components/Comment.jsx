"use client"

import Image from "next/image"

const Comment = () => {
  return (
    <>
      <section className="container px-4 mx-auto pt-10">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[48px] font-Montserrat font-semibold text-primary">COMMITMENT TO EXCELLENCE</h2>
            <p className="max-w-[634px] font-Montserrat">At PHD, we are committed to transforming each holiday into a memorable experience, prioritizing our clients' comfort, enjoyment, and peace of mind from start to finish. When you travel with prime Holiday Destinations, you're not just exploring a new place, you're embarking on a journey crafted with passion, experience, and a commitment to excellence</p>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Image className="w-full h-full max-w-md"
              src="https://i.ibb.co.com/fkgt4r1/photo01.png"
              alt="comment"
              width={500}
              height={300}
            />
          </div>
        </div>

      </section>
      {/* video */}
      <div className="rounded-md mt-10 bg-gray-200 py-20">
        <iframe className="max-w-[50%] mx-auto" width="50%" height="600" src="https://www.youtube.com/embed/fEErySYqItI?si=otaQYhvbetqggv2S" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  )
}

export default Comment