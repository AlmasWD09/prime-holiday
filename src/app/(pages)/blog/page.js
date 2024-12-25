"use client"

import Banner from "@/app/components/blog/Banner"
import DestinationGuide from "@/app/components/blog/DestinationGuide"
import HolidayInspiration from "@/app/components/blog/HolidayInspiration"
import TravelTrips from "@/app/components/blog/TravelTrips"


const BlogPage = () => {
    return (
        <>
            <Banner />
            <TravelTrips />
            <DestinationGuide />
            <HolidayInspiration />
        </>
    )
}

export default BlogPage
