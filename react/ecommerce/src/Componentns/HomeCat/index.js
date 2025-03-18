import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import fashionImg from '../../assets/images/fashion.png'

const HomeCat = () => {

    const [itemBg, setItemBg] = useState([
        '#ecffec',
        '#feefea',
        '#fdf0ff',
        '#def3ff',
        '#ffe8f8',
        '#e3fffa',
        '#fff3ff',
        '#feefea',
        '#ecffec',
        '#feefea',
        '#fdf0ff',
        '#def3ff',
        '#ffe8f8',
        '#e3fffa',
        '#fff3ff',
        '#feefea',
    ])

    return (
        <section className="homeCat">
            <div className="container">
                <h3 className="mb-4 hd">Featured Categories</h3>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={8}
                    navigation={true}
                    slidesPerGroup={1}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        itemBg?.map((item, index) => {
                            return (
                                <SwiperSlide>
                                    <div className="item text-center cursor" style={{ background: item }}>
                                        <img src={fashionImg} alt="Fashion" />
                                        <h6>Fashion</h6>
                                    </div>
                                </SwiperSlide>
                            )

                        })
                    }

                </Swiper>
            </div>
        </section>
    )
}

export default HomeCat;