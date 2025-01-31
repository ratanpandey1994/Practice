import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const HomeCat = () => {
    return (
        <section className="homeCat">
            <div className="container">
                <Swiper
                    slidesPerView={10}
                    spaceBetween={0}
                    navigation={true}
                    slidesPerGroup={1}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}

export default HomeCat;