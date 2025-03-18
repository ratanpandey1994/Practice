import { Button } from "@mui/material"
import HomeBanner from "../../Componentns/HomeBanner"
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import banner3 from '../../assets/images/banner3.jpg'
import banner4 from '../../assets/images/banner4.jpg'
import newsLetterImg from '../../assets/images/coupon.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import ProductItem from "../../Componentns/ProductItem";
import HomeCat from "../../Componentns/HomeCat";
import { IoMailOutline } from "react-icons/io5";


const Home = () => {

    return (
        <>
            <HomeBanner />

            <HomeCat />

            <section className="homeProducts">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3">
                            <div className="sticky">
                                <div className="banner">
                                    <img src={banner1} alt="Banner Box" className="cursor w-100" />
                                </div>
                                <div className="banner mt-4">
                                    <img src={banner2} alt="Banner Box" className="cursor w-100" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">Best Seller</h3>
                                    <p className="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                                </div>
                                <Button className="viewAllBtn ms-auto">View All <IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row w-100  mt-4">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    navigation={true}
                                    slidesPerGroup={3}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>

                                </Swiper>
                            </div>

                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-light text-sml mb-0">New products with updated stocks.</p>
                                </div>
                                <Button className="viewAllBtn ms-auto">View All <IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row productRow2 w-100 d-flex mt-4">
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                            </div>

                            <div className="d-flex mb-5 mt-4 bannerSec">
                                <div className="banner">
                                    <img src={banner3} alt="Banner Box" className="cursor w-100" />
                                </div>
                                <div className="banner">
                                    <img src={banner4} alt="Banner Box" className="cursor w-100" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className="newsLetterSection mb-3 mt-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white mb-1">$20 discount for your first order</p>
                            <h3 className="text-white">Join our newsletter and get...</h3>
                            <p className="text-light">Join our email subscription now to get updates<br /> on promotions and coupons.</p>

                            <form>
                                <IoMailOutline />
                                <input type="text" />
                                <Button>Subscribe</Button>
                            </form>

                        </div>
                        <div className="col-md-6">
                            <img src={newsLetterImg} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home