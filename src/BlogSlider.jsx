import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Johnny Lim",
    rating: 5,
    content:
      "Hassan and team arrived on time and started work immediately. They carried out the job professionally and efficiently. The water jet pump pressure was strong and it got rid of the dirt effectively aided by cleaning chemical. The teamwork was good and they kept the floor dry at all times. Hassan did a good job troubleshooting one of the wall units. Will be calling on them to finish with the repair of the wall unit. Keep up the good work!",
  },
  {
    id: 2,
    name: "Anthony TF Chong",
    rating: 5,
    content:
      "Excellent service. Thoroughly checked all our units, worked efficiently and didn't leave a mess for us to clean. Highly recommended!",
  },
  {
    id: 4,
    name: "Mehar Zahid",
    rating: 5,
    content:
      "5 stars service!! Hassan Jani By far the best experience with aircond service. Technicians were super nice and went above and beyond to help fixing my Aircon issue in the compressor area. Found out the issue of why one of my aircond is not working properly while my previous technician couldn't. Would definitely find them again for future aircond service!",
  },
  {
    id: 6,
    name: "Izzah Rosile",
    rating: 5,
    content:
      "I booked their aircond service thinking I had to top up gas because it wasn’t cooling. But when the technician came, he checked everything and said it was just dusty. They cleaned it using chemical and now my aircond feels like new again. I’m really satisfied with the service. Customer service was fast to reply, technician came on time, and the price was the cheapest I found so far. I found them on Facebook, didn’t know them at all, but now I can honestly say they’re highly recommended.",
  },
];

const BlogSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="relative py-20 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="http://img.freepik.com/free-photo/young-man-laid-couch-with-laptop_23-2148560426.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040713c5] via-[#040f31c5] to-transparent backdrop-blur-sm"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Google Reviews</h2>

        {/* ⭐ Star Rating */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="flex">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-xl" />
            ))}
            {/* Half Star (70%) */}
            <div className="relative w-5 h-5">
              <FaStar className="text-gray-300 absolute top-0 left-0 w-full h-full" />
              <FaStar
                className="text-yellow-400 absolute top-0 left-0 w-full h-full"
                style={{ clipPath: "inset(0 30% 0 0)" }}
              />
            </div>
          </div>
          <p className="text-yellow-400 text-xl font-semibold">4.7</p>
        </div>

        <p className="mb-12 text-sm text-gray-300">verified reviews</p>

        {/* Navigation Arrows */}
        <div className="flex justify-center mb-10 gap-5">
          <button
            ref={prevRef}
            className="bg-yellow-400 text-blue-900 p-4 rounded-full shadow-lg hover:bg-yellow-500 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            ref={nextRef}
            className="bg-yellow-400 text-blue-900 p-4 rounded-full shadow-lg hover:bg-yellow-500 transition"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((review) => {
            const isLong = review.content.length > 300;
            const isExpanded = expanded[review.id];

            return (
              <SwiperSlide key={review.id}>
                <div className="bg-white text-blue-900 p-10 rounded shadow-2xl h-auto flex flex-col justify-between max-w-[440px] mx-auto">
                  <div>
                    <div className="flex justify-center mb-4">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <FaStar key={index} className="text-yellow-500 mr-1 text-lg" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {isLong && !isExpanded
                        ? `${review.content.slice(0, 80)}...`
                        : review.content}
                    </p>
                    {isLong && (
                      <button
                        onClick={() => toggleReadMore(review.id)}
                        className="text-blue-600 mt-2 font-semibold text-sm underline hover:text-blue-800"
                      >
                        {isExpanded ? "See less" : "See more"}
                      </button>
                    )}
                  </div>
                  <p className="mt-6 font-semibold text-blue-700 text-lg">{review.name}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSlider;
