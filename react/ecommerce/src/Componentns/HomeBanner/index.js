import React from "react";
import Slider from "react-slick";
import slider1 from "../../assets/images/slider-1.jpg";
import slider2 from "../../assets/images/slider-2.jpg";
import slider3 from "../../assets/images/slider-3.jpg";
import slider4 from "../../assets/images/slider-4.jpg";
import slider5 from "../../assets/images/slider-5.jpg";
import slider6 from "../../assets/images/slider-6.jpg";


const HomeBanner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };
    return (
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src={slider1} alt="Slider" className="w-100" />
                </div>
                <div className="item">
                    <img src={slider2} alt="Slider" className="w-100" />
                </div>
                <div className="item">
                    <img src={slider3} alt="Slider" className="w-100" />
                </div>
                <div className="item">
                    <img src={slider4} alt="Slider" className="w-100" />
                </div>
                <div className="item">
                    <img src={slider5} alt="Slider" className="w-100" />
                </div>
                <div className="item">
                    <img src={slider6} alt="Slider" className="w-100" />
                </div>
            </Slider>
        </div>
    )
}

export default HomeBanner;