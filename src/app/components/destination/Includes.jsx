
"use client"
import { PiShareFat } from "react-icons/pi";
import { GiSelfLove } from "react-icons/gi";

const Includes = () => {
    return (
        <>
            <section className="container mx-auto px-4">
                <div className="p-6 border border-[#135029] border-opacity-20">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 border-b border-gray-300 pb-6">
                        <button className="py-3 text-center text-lg font-semibold bg-[#135029] text-white">
                            INCLUDES & EXCLUDES
                        </button>
                        <button className="py-3 text-center text-lg font-bold border border-[#135029] text-[#135029] border-opacity-30">
                            HOTELS
                        </button>
                        <button className="py-3 text-center text-lg font-bold border border-[#135029] text-[#135029] border-opacity-30">
                            PRICE & VALIDITY
                        </button>
                        <button className="py-3 text-center text-lg font-bold border border-[#135029] text-[#135029] border-opacity-30">
                            ITINERARY
                        </button>
                    </div>

                    <div className="flex justify-evenly bg-[#135029] py-4">
                        <h3 className="text-white uppercase">Includes</h3>
                        <h3 className="text-white uppercase">Excludes</h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                        {/* Includes Section */}
                        <div className="border-b lg:border-r border-[#135029] border-opacity-30">
                            <ul className="p-6 space-y-4 text-gray-800">
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>Return Airport Transfers.</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>8 Nights Hotel Accommodation in Selected Hotel Category.</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>Meals Are Provided As Outlined In The Itinerary.</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>
                                        Full Day City Tour Of Muscat By Sedan Car/SUV/10 Seat Van By
                                        English Speaking Guide.
                                    </p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>Desert Safari Tour.</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>
                                        Round Trip Transfer From Day 3 To Day 8 By 4x4 Jeep (4 Pax Per
                                        Jeep) With English Speaking Guide.
                                    </p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>
                                        Visit To Amouage Perfume Factory By Car/SUV/Van With English
                                        Speaking Guide.
                                    </p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>Entrance Fee Wherever Applicable.</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>All Applicable Taxes.</p>
                                </li>
                            </ul>
                        </div>

                        {/* Excludes Section */}
                        <div>
                            <ul className="p-6 space-y-4 text-gray-800">
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>Air Fare.</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>Travel Insurance.</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>Oman Visa.</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>Meals Other Than What Is Included The Itinerary.</p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>
                                        Tours & Activities Other What Is Included In The Itinerary.
                                    </p>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary">&#9679;</span>
                                    <p>
                                        All Expenses Of Personal Nature Such As Laundry, Tips, Etc.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-end gap-6 mt-6">
                        <button className="flex items-center justify-center lg:justify-start gap-1 px-6 py-2 text-primary border border-yellow-600">
                            <GiSelfLove className="text-2xl"/>
                            SAVE
                        </button>
                        <button className="flex items-center justify-center lg:justify-start gap-1 px-6 py-2 text-primary border border-yellow-600">
                            <PiShareFat className="text-2xl"/>
                            SHARE
                        </button>
                        <button className="px-6 py-2 text-white bg-primary">
                            ENQUIRE NOW
                        </button>
                    </div>
            </section>
        </>
    )
}

export default Includes
