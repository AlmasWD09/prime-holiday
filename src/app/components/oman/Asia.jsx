"use client"
import Image from "next/image";
import React, { useState } from "react";


const Asia = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <>
            <div className="pt-10">
                <h1 className="text-primary text-xl font-bold py-2">
                    Asia
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* First Card (2 rows, 2 columns) */}
                    <div
                        className="relative lg:col-span-3 h-full lg:h-[600px] overflow-hidden shadow-lg"
                        onMouseEnter={() => setHoveredIndex(0)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Image
                            src="http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735104173/cxcc2k1oqjbi9ergug9n.png"
                            alt="First Destination"
                            className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${hoveredIndex === 0 ? "scale-110" : ""
                                }`}
                                width={500}
                                height={500}
                        />
                        <div className="absolute z-10 w-full  bottom-10 text-center p-3 bg-gray-800 opacity-60 text-white">
                            <div className="z-30">
                                <h5 className="text-3xl font-bold uppercase">Kerala</h5>
                                <h5 className="font-bold">God's Own Country</h5>
                            </div>
                        </div>
                    </div>


                    {/* second Card (1 row, 1 column) */}
                    <div
                        className="relative  overflow-hidden shadow-lg"
                        onMouseEnter={() => setHoveredIndex(2)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >

                        <Image
                            src="http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735104136/pbms3rgm5wx1izt0w0jr.png"
                            alt="Eiffel Tower"
                            className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${hoveredIndex === 2 ? "scale-110" : ""
                                }`}
                                width={100}
                                height={100}
                        />
                        <div className="absolute z-10 w-full  bottom-10 text-center p-3 bg-gray-800 opacity-60 text-white">
                            <div className="z-30">
                            <h5 className="text-3xl font-bold uppercase">Oman</h5>
                            <h5 className="font-bold">Beauty has an address</h5>
                            </div>
                        </div>
                    </div>

                    {/* thirt Card (1 row, 1 column) */}
                    <div
                        className="relative  overflow-hidden shadow-lg"
                        onMouseEnter={() => setHoveredIndex(3)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >

                        <Image
                            src="http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735104086/iqpzebykwogg0mcysdnh.png"
                            alt="Greece"
                            className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${hoveredIndex === 3 ? "scale-110" : ""
                                }`}
                                width={100}
                                height={100}
                        />
                          <div className="absolute z-10 w-full  bottom-10 text-center p-3 bg-gray-800 opacity-60 text-white">
                            <div className="z-30">
                                <h5 className="text-3xl font-bold uppercase">Qatar</h5>
                                <h5 className="font-bold">Experience the World Beyond</h5>
                            </div>
                        </div>
                    </div>

                    {/* Four Card (1 row, 1 column) */}
                    <div
                        className="relative  overflow-hidden shadow-lg"
                        onMouseEnter={() => setHoveredIndex(4)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >

                        <Image
                            src="https://res.cloudinary.com/dzzyhqpnk/image/upload/v1735103918/halfyqqcnsi6h1p7kwmm.png"
                            alt="Mountain View"
                            className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${hoveredIndex === 4 ? "scale-110" : ""
                                }`}
                                width={100}
                                height={100}
                        />
                           <div className="absolute z-10 w-full  bottom-10 text-center p-3 bg-gray-800 opacity-60 text-white">
                            <div className="z-30">
                                <h5 className="text-3xl font-bold uppercase">Sri lanka</h5>
                                <h5 className="font-bold">You'll Come Back for More</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Asia
