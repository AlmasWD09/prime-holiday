"use client"

import Banner from "@/app/components/destination/Banner"
import DestinationLove from "@/app/components/destination/destinationLove"
import Ground from "@/app/components/destination/Ground"
import Immersition from "@/app/components/destination/Immersition"
import Includes from "@/app/components/destination/Includes"
import Link from "next/link"

const DestinationPage = () => {
  return (
    <>
  <Banner />
  <Ground />
  <Immersition />
  <Includes />
  <DestinationLove />
    </>
  )
}

export default DestinationPage
