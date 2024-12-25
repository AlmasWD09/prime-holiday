"use client"

import Image from "next/image"
import LinePath from "../shared/LinePath"

const TravelTrips = () => {
    const travelTrips = [
        {
            "image": "http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735114827/bsffr5koc9fm2xtvmj2d.png",
            "name": "Sri Lanka",
            "date": "11 Dec 2024",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros"
        },
        {
            "image": "http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735116792/ev7gqez3ngtmjorux714.png",
            "name": "Kerala",
            "date": "11 Dec 2024",
            "description": "A bustling city captured at night with vibrant lights."
        },
        {
            "image": "http://res.cloudinary.com/dzzyhqpnk/image/upload/v1735114827/bsffr5koc9fm2xtvmj2d.png",
            "name": "Sri Lanka",
            "date": "11 Dec 2024",
            "description": "A calm and peaceful beach with crystal-clear water."
        }
    ]

    return (
        <>
            <section className="container mx-auto px-4 pt-28">
                <LinePath text={'Travel Tips'}/>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10">
                    {
                        travelTrips.map((travel, idx) => {
                            return (
                                <div key={idx} className="max-w-lg border">
                                    <Image src={travel.image} alt={travel.name} width={200} height={200} className="object-cover object-center w-full  h-72" />
                                    <div className="px-4 py-8 space-y-2">
                                        <div className="space-y-2">
                                            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{travel.date}</span>
                                            <h2 className="text-xl font-bold tracking-wide text-[#135029]">{travel.name}</h2>
                                        </div>
                                        <p className="dark:text-gray-800">{travel.description}<span className="text-primary font-semibold">...Read more</span> </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default TravelTrips
