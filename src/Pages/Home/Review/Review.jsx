import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const testimonials = [
    {
        quote:
            'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
        name: 'Michael Kaizer',
        title: 'CEO of Basecamp Corp',
        avatar: '', // Placeholder — you can add image URL here
    },
    {
        quote:
            'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
        name: 'Michael Kaizer',
        title: 'CEO of Basecamp Corp',
        avatar: '', // Placeholder — you can add image URL here
    },
    {
        quote:
            'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
        name: 'Michael Kaizer',
        title: 'CEO of Basecamp Corp',
        avatar: '', // Placeholder — you can add image URL here
    },
];

const Review = () => {
    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(1);

    return (
        <div className='relative my-20 container mx-auto p-3'>
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: 'fraction',
                }}
                speed={1000}
                className="mySwiper"
            >
                {testimonials.map((t, index) => (
                    <SwiperSlide key={index}>
                        <div className=" text-lg text-gray-700 font-medium leading-relaxed font-manrope">
                            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-black mb-6">“ {t.quote} ”</p>
                            <div className="flex items-center gap-2 md:gap-4 mt-8">
                                <div className="size-8 md:size-10 bg-gray-300 rounded-full" />
                                <div>
                                    <p className="font-semibold text-sm md:text-lg">{t.name}</p>
                                    <p className="text-xs md:text-sm text-gray-500">{t.title}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='absolute right-3 bottom-3 z-40'>
                <div className=" flex justify-center items-center gap-3 md:gap-4 ">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="lg:text-xl text-[#0a2a67] hover:text-white px-3 lg:px-5  py-1 rounded-full border border-[#0a2a67] hover:bg-[#0a2a67] transition ease-in-out"
                    >
                        <FaArrowLeft />

                    </button>
                    <div className="text-sm font-semibold">
                        <span className="text-[#0a2a67]">{currentSlide}</span>
                        <span className="text-gray-400"> / {testimonials.length}</span>
                    </div>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="lg:text-xl text-[#0a2a67] hover:text-white px-3 lg:px-5  py-1 rounded-full border border-[#0a2a67] hover:bg-[#0a2a67] transition ease-in-out"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>


        </div >
    );
};

export default Review;