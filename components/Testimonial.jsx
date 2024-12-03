import React, { useCallback, useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import AnimatedText from "./AnimatedText";
import Image from "next/image";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

// sample data for projects with various categories 
const slides = [
    {
        img: "/assets/testimonial/img-1.png",
        name: "Ema Johnson",
        message: "The service was fantastic! Highly recommend to anyone looking for top design."
    },
    {
        img: "/assets/testimonial/img-2.png",
        name: "Sophia Martinezs",
        message: "I couldn't be happier with the result. The website is both beautiful and functional."
    },
    {
        img: "/assets/testimonial/img-3.png",
        name: "James Smith",
        message: "Excellent work! The project was handle professionally from start to finish."
    },
    {
        img: "/assets/testimonial/img-4.png",
        name: "Olivia Millians",
        message: "Everything was delivered on time, and the design exceeded at my expectation."
    },
    {
        img: "/assets/testimonial/img-5.png",
        name: "Isabella Brown",
        message: "Amazing attention to detail, my site look professional and user friendly."
    },
    {
        img: "/assets/testimonial/img-6.png",
        name: "Lian Davis",
        message: "The team truly understood my needs, my website is faster and look great!"
    },
];

const Testimonial = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    // state to store the active slide index
    const [activeSlide, setActiveSlide] = useState(0);

    const handlePrevious = useCallback(() => {
        swiperRef?.slidePrev();
    }, [swiperRef]);

    const handleNext = useCallback(() => {
        swiperRef?.slideNext();
    }, [swiperRef]);


    return (
        <div className="py-24 overflow-hidden">
            <div className="container mx-auto">
                <AnimatedText
                    text="What Client Say"
                    textStyles="h2 mb-[30px] xl:mb-[60px] text-center"
                />
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* slider info */}
                    <div className="w-max xl:w-[600px] flex flex-col justify-center items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0 overflow-hidden">
                        <ImQuotesLeft className="text-9xl text-accent/20 leading-none mb-4"/>
                        <h3 className="h3 mb-2">{slides[activeSlide].name}</h3>
                        <p className="mb-8 md:max-w-[360px] max-w-[230px]">{slides[activeSlide].message}</p>
                        {/* slider buttons */}
                        <div className="flex gap-3">
                            <button onClick={handlePrevious} className="text-2xl bg-accent w-[40px] h-[40px] text-white rounded-full flex items-center justify-center hover:bg-accent-hover transition-all duration-300">
                                <FiArrowLeft/>
                            </button>
                            <button onClick={handleNext} className="text-2xl bg-accent w-[40px] h-[40px] text-white rounded-full flex items-center justify-center hover:bg-accent-hover transition-all duration-300">
                                <FiArrowRight/>
                            </button>
                        </div>
                    </div>
                    {/* slider */}
                    <Swiper 
                        slidesPerView={1} 
                        spaceBetween={30} 
                        loop={true} 
                        onSwiper={setSwiperRef} 
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }} 
                        // update the active slide index
                        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)} 
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className="w-full h-[400px] xl:h-[500px]">
                        {slides.map((slide, index) => {
                            return (
                                <SwiperSlide key={index} className="h-full select-none">
                                    <div className="w-full h-full flex items-end">
                                        <div className={`${activeSlide === index ? "h-full" : "h-[240px]"} flex items-end rounded-2xl overflow-hidden transition-all duration-500 relative w-full`}>
                                            <Image 
                                                src={slide.img}
                                                className="object-cover object-center"
                                                quality={100}
                                                alt=""
                                                fill
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;