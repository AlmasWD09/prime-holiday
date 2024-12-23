// "use client"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';

// // Import required modules
// import { FreeMode, Navigation } from 'swiper/modules';
// import Image from 'next/image';

// const Testimonial = () => {
//   return (
//     <section className="container mx-auto px-4 lg:px-40 mt-20 mb-20">
//       <h1 className="text-[24px] lg:text-[48px] text-primaryGray font-semibold font-noto text-center mb-10">
//         What clients saying
//       </h1>

//       <Swiper
//         loop={true}
//         freeMode={true}
//         spaceBetween={30}
//         navigation={true} // Enable navigation
//         modules={[FreeMode, Navigation]}
//         className="mySwiper"
//         breakpoints={{
//           320: {
//             slidesPerView: 1,
//             spaceBetween: 10,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           1024: {
//             slidesPerView: 1,
//             spaceBetween: 1,
//           },
//         }}
//       >
//         {/* swiper card one */}
//         <SwiperSlide>
//           <div className="lg:-mx-6 lg:flex lg:items-center">
//             <Image
//               className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded lg:h-[36rem]"
//               src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
//               alt="testimonial"
//               width={300}
//               height={300}
//             />
//             <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
//               <h1 className="text-5xl font-semibold text-primary lg:text-3xl lg:w-96">
//                 TESTIMONIALS OF SATISFACTION
//               </h1>
//               <p className="max-w-lg mt-6 font-Montserrat">
//                 The best measure to our services comes from our customers. Keep an eye out as our travellers share their stories. We'll be sharing feedback from our travellers here shortly, so you can see what makes PHD unique.
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* swiper card two */}
//         <SwiperSlide>
//           <div className="lg:-mx-6 lg:flex lg:items-center">
//             <Image
//               className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded lg:h-[36rem]"
//               src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
//               alt="testimonial"
//               width={300}
//               height={300}
//             />
//             <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
//               <h1 className="text-5xl font-semibold text-primary lg:text-3xl lg:w-96">
//                 TESTIMONIALS OF SATISFACTION
//               </h1>
//               <p className="max-w-lg mt-6 font-Montserrat">
//                 The best measure to our services comes from our customers. Keep an eye out as our travellers share their stories. We'll be sharing feedback from our travellers here shortly, so you can see what makes PHD unique.
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>

      
//     </section>
//   );
// };

// export default Testimonial;





import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const Testimonial = () => {
  const [timeLeft, setTimeLeft] = useState(0); // Timer state to control countdown
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (swiper, time) => {
    // Update the countdown timer
    setTimeLeft(Math.ceil(time / 1000));
  };

  const onSlideChange = () => {
    // Reset the timer when the slide changes
    setTimeLeft(0);
  };

  const reviews = [
    {
      quote: "Awesome Coding",
      description:
        "The best measure to our services comes from our customers. Keep an eye out as our travellers share their stories. We'll be sharing feedback from our travellers here shortly, so you can see what makes PHD unique.",
      name: "TESTIMONIALS OF SATISFACTION",
      image: "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      quote: "Great Support",
      description:
        "The best measure to our services comes from our customers. Keep an eye out as our travellers share their stories. We'll be sharing feedback from our travellers here shortly, so you can see what makes PHD unique.",
      name: "TESTIMONIALS OF SATISFACTION",
      image: "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      quote: "Exceptional Design",
      description:
        "The best measure to our services comes from our customers. Keep an eye out as our travellers share their stories. We'll be sharing feedback from our travellers here shortly, so you can see what makes PHD unique.",
        name: "TESTIMONIALS OF SATISFACTION",
      image: "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
      <div className="w-full flex justify-center  my-40">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}  // Update timer
        onSlideChange={onSlideChange}  // Reset timer on slide change
        className="mySwiper max-w-4xl"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
          <div  className="lg:-mx-6 lg:flex lg:items-center">
            <Image
              className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded lg:h-[36rem]"
              src={review.image}
              alt="testimonial"
              width={300}
              height={300}
            />
            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <h1 className="text-5xl font-semibold text-primary lg:text-3xl lg:w-96">
                {review.name}
              </h1>
              <p className="max-w-lg mt-6 font-Montserrat">
                {review.description}
              </p>
            </div>
          </div>
          </SwiperSlide>
        ))} 
      </Swiper>
    </div>

  );
};

export default Testimonial;
