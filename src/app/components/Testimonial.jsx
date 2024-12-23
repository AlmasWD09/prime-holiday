"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// Import required modules
import { FreeMode, Navigation } from 'swiper/modules';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <section className="container mx-auto px-4 lg:px-40 mt-20 mb-20">
      <h1 className="text-[24px] lg:text-[48px] text-primaryGray font-semibold font-noto text-center mb-10">
        What clients saying
      </h1>

      <Swiper
        loop={true}
        freeMode={true}
        spaceBetween={30}
        navigation={true} // Enable navigation
        modules={[FreeMode, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
        }}
      >
        {/* swiper card one */}
        <SwiperSlide>
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
              <p className="max-w-lg mt-6 font-Montserrat">
                The best measure to our services comes from our customers. Keep an eye out as our travellers share their stories. We'll be sharing feedback from our travellers here shortly, so you can see what makes PHD unique.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* swiper card two */}
        <SwiperSlide>
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
              <p className="max-w-lg mt-6 font-Montserrat">
                The best measure to our services comes from our customers. Keep an eye out as our travellers share their stories. We'll be sharing feedback from our travellers here shortly, so you can see what makes PHD unique.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation with Tailwind CSS */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
        <button
          className="swiper-button-prev p-2 bg-white rounded-full shadow-lg text-black hover:bg-primary hover:text-white transition-all"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
        <button
          className="swiper-button-next p-2 bg-white rounded-full shadow-lg text-black hover:bg-primary hover:text-white transition-all"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
