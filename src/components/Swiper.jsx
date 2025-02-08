 // Import Swiper core and required modules
 import { Navigation, Pagination, Autoplay } from 'swiper/modules';
 import { Swiper, SwiperSlide } from 'swiper/react';
 
 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
 
 export default () => {
   return (
     <Swiper
       // Install Swiper modules
       modules={[Navigation, Autoplay]} // Include the Autoplay module
       spaceBetween={50}
       slidesPerView={1}
       autoplay={{
         delay: 3000, // Time in ms (3 seconds)
         disableOnInteraction: false, // Continue autoplay even after user interaction
         pauseOnMouseEnter: true, // Pause autoplay when hovering over the slider
       }}
       navigation
       loop={true} // Enable looping
       pagination={{ clickable: true }}
     >
       <SwiperSlide>
         <img className="rounded-lg w-full mx-auto" src="images/slides/Slide5.jpg" alt="Slide 5" />
       </SwiperSlide>
       <SwiperSlide>
         <img className="rounded-lg w-full mx-auto" src="images/slides/Slide1.jpg" alt="Slide 1" />
       </SwiperSlide>
       <SwiperSlide>
         <img className="rounded-lg w-full mx-auto" src="images/slides/Slide3.jpg" alt="Slide 3" />
       </SwiperSlide>
     </Swiper>
   );
 };