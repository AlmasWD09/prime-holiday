"use client"

import Image from "next/image"

const Testimonial = () => {
  return (
    <section className="bg-white mt-10">
      <div className="container px-4 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <Image
            className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded lg:h-[36rem]"
            src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="testimonial"
            width={300}
            height={300}
          />

          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <h1 className="text-5xl font-semibold text-primary lg:text-3xl lg:w-96">
            TESTIMONIALS OF SATISFACTION
            </h1>

            <p className="max-w-lg mt-6  font-Montserrat">
            The best measure to our services comes from our customers. Keep an eye out as our travellers share their stories. We'll be sharing feedback from our travellers here shortly, so you can see what makes PHD unique.
            </p>

            <div className="flex items-center justify-between mt-12 lg:justify-start">
              <button
                title="left arrow"
                className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                title="right arrow"
                className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
