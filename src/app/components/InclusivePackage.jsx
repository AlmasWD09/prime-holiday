"use client"

import Image from "next/image"

const InclusivePackage = () => {
  return (
    <section className="container mx-auto px-6 pt-20">
      <h1 className="text-primary text-center font-Montserrat text-[24px] md:text-[38px] font-semibold">ALL-INCLUSIVE Packages</h1>

    <div className="container grid md:grid-cols-2 gap-4 p-4 mx-auto lg:grid-cols-5">
      <div className="md:h-[600px] object-cover border rounded-md lg:col-start-1 lg:col-end-3 lg:row-span-2">
        <Image className="md:h-[600px] w-full" src="https://i.ibb.co.com/fkgt4r1/photo01.png" alt="photo" width={200} height={200}/>
      </div>
      <div className=" object-cover border rounded-md ">
      <Image className="h-full w-full" src="https://i.ibb.co.com/fkgt4r1/photo01.png" alt="photo" width={200} height={200} />
      </div>
      <div className=" object-cover border rounded-md ">
      <Image className="h-full w-full" src="https://i.ibb.co.com/fkgt4r1/photo01.png" alt="photo" width={200} height={200} />
      </div>
      <div className=" object-cover border rounded-md ">
      <Image className="h-full w-full" src="https://i.ibb.co.com/fkgt4r1/photo01.png" alt="photo" width={200} height={200} />
      </div>
      <div className="h-[300px] object-cover border rounded-md lg:col-start-3 lg:col-end-6">
      <Image className="h-[300px] w-full" src="https://i.ibb.co.com/fkgt4r1/photo01.png" alt="photo" width={200} height={200} />
      </div>
    </div>
  </section>
  )
}

export default InclusivePackage


