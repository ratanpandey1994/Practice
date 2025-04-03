import React from "react";
import slider1 from "../../assets/images/slider-1.jpg";
import slider2 from "../../assets/images/slider-2.jpg";
import slider3 from "../../assets/images/slider-3.jpg";
import slider4 from "../../assets/images/slider-4.jpg";
import slider5 from "../../assets/images/slider-5.jpg";
import slider6 from "../../assets/images/slider-6.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';


const HomeBanner = () => {

    return (
        <div className="container mt-3">
            <div className="homeBannerSection">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    navigation={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disabledOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="item">
                            <img src={slider1} alt="Slider" className="w-100" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <img src={slider2} alt="Slider" className="w-100" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <img src={slider3} alt="Slider" className="w-100" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <img src={slider4} alt="Slider" className="w-100" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <img src={slider5} alt="Slider" className="w-100" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <img src={slider6} alt="Slider" className="w-100" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeBanner;