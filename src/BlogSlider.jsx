import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // ✅ Import Autoplay
import "swiper/css";
import "swiper/css/navigation";
import { FaUser, FaCalendar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const blogs = [
    {
        id: 1,
        title: "We very careful handling the valuable goods",
        date: "February 11, 2022",
        img: "https://img.freepik.com/free-photo/electrician-is-mounting-electric-sockets-white-wall-indoors_169016-17659.jpg?t=st=1752658346~exp=1752661946~hmac=5dfb9e465408dcc2aa0a5acf96783264f3a0c97597ca0f01b5eb61bb93692c17&w=740",
        desc: "It is a long established fact that a reader des will oi beik distracted by the readable",
    },
    {
        id: 2,
        title: "We very careful handling the valuable goods",
        date: "May 30, 2022",
        img: "https://img.freepik.com/free-photo/medium-shot-people-wearing-helmets_23-2149366666.jpg",
        desc: "It is a long established fact that a reader des will oi beik distracted by the readable",
    },
    {
        id: 3,
        title: "Expert team working with best tools",
        date: "June 15, 2022",
        img: "https://img.freepik.com/free-photo/man-repairing-air-conditioner_1170-1965.jpg?w=740&t=st=1752654500~exp=1752658100~hmac=ddac47f280d15525f9c0a9e731de4dbf4df2e00f28f19443aeb88f956c9a3051",
        desc: "It is a long established fact that a reader des will oi beik distracted by the readable",
    },
    {
        id: 4,
        title: "Safe and fast service guaranteed",
        date: "July 4, 2022",
        img: "https://img.freepik.com/free-photo/worker-repairing-ac_23-2149393649.jpg?w=740&t=st=1752654700~exp=1752658300~hmac=f0aeaf476099c63b1dbf528dcdf1b1143b9c3b1e3b8ecbc17e2d90b19765073e",
        desc: "It is a long established fact that a reader des will oi beik distracted by the readable",
    },
    {
        id: 4,
        title: "Safe and fast service guaranteed",
        date: "July 4, 2022",
        img: "https://img.freepik.com/free-photo/worker-repairing-ac_23-2149393649.jpg?w=740&t=st=1752654700~exp=1752658300~hmac=f0aeaf476099c63b1dbf528dcdf1b1143b9c3b1e3b8ecbc17e2d90b19765073e",
        desc: "It is a long established fact that a reader des will oi beik distracted by the readable",
    },
    {
        id: 4,
        title: "Safe and fast service guaranteed",
        date: "July 4, 2022",
        img: "https://img.freepik.com/free-photo/worker-repairing-ac_23-2149393649.jpg?w=740&t=st=1752654700~exp=1752658300~hmac=f0aeaf476099c63b1dbf528dcdf1b1143b9c3b1e3b8ecbc17e2d90b19765073e",
        desc: "It is a long established fact that a reader des will oi beik distracted by the readable",
    },
];

const BlogSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="flex lg:flex-row items-center lg:items-start justify-center space-x-0 lg:space-x-2 mb-2">
                    <p className="text-[#ffc513] font-semibold uppercase tracking-wider font-serif text-lg sm:text-base">Our Blog</p>
                    <hr className="border border-[#ffc513] w-10 ml-2 lg:mt-1" />
                </div>
                <h2 className="text-xl md:text-4xl font-bold text-[#10375C] leading-tight mb-12">
                    Where imagination takes <br /> center stage
                </h2>

                <div className="flex justify-end mb-6 gap-3">
                    <button
                        ref={prevRef}
                        className="bg-blue-700 text-white p-2 rounded hover:bg-blue-800"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        ref={nextRef}
                        className="bg-blue-700 text-white p-2 rounded hover:bg-blue-800"
                    >
                        <FaArrowRight />
                    </button>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]} // ✅ Autoplay module
                    spaceBetween={20}
                    loop={true} // ✅ Infinite loop
                    autoplay={{
                        delay: 2500, // milliseconds between slides
                        disableOnInteraction: false, // ✅ keep autoplay after user interacts
                        pauseOnMouseEnter: true, // ✅ (Optional) pause on hover
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
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {blogs.map((blog) => (
                        <SwiperSlide key={blog.id}>
                            <div className="flex flex-col shadow-md lg:flex-row items-center border border-gray-300 rounded bg-white overflow-hidden max-w-md mx-auto">
                                <div className="w-full lg:w-[120px] h-auto flex-shrink-0">
                                    <img
                                        src={blog.img}
                                        alt="blog"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="flex-1 p-5 space-y-3">
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 font-semibold">
                                        <span className="flex items-center">
                                            <FaUser className="text-blue-700 mr-2" /> By admin
                                        </span>
                                        <span className="flex items-center">
                                            <FaCalendar className="text-blue-700 mr-2" />
                                            {blog.date}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-left">{blog.title}</h3>
                                    <p className="text-sm font-medium text-gray-500 text-left">
                                        {blog.desc}
                                    </p>
                                    <button onClick={() => { window.location.href = 'tel:+60163824522' }} className="py-2.5 px-4 rounded-md bg-blue-800 text-white font-semibold hover:bg-blue-900 transition">
                                        Call Now
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default BlogSlider;
