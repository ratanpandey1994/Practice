import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../TestimonialsSection/style.css';
import TestimonialsIcon from './images/ravi.jpg';
import TestimonialsIcon1 from './images/ravi.jpg';
import TestimonialsIcon2 from './images/ravi.jpg';

const TestimonialsData = [
  {
    imgSrc: TestimonialsIcon,
    Name: 'Ravi Upadhyay',
    Destination: 'Verified Customer',
    TesimonialsTitle: 'Exceptional service!',
    TesimonialsContent:
      'Reliable and professional elevator service. Their attention to detail and commitment to safety sets them apart. A trusted partner for vertical mobility solutions.',
  },
  {
    imgSrc: TestimonialsIcon1,
    Name: 'Arvind',
    Destination: 'Verified Customer',
    TesimonialsTitle: 'Exceptional service!',
    TesimonialsContent:
      'Reliable and professional elevator service. Their attention to detail and commitment to safety sets them apart. A trusted partner for vertical mobility solutions.',
  },
  {
    imgSrc: TestimonialsIcon2,
    Name: 'Ratan Pandey',
    Destination: 'Verified Customer',
    TesimonialsTitle: 'Exceptional service!',
    TesimonialsContent:
      'Reliable and professional elevator service. Their attention to detail and commitment to safety sets them apart. A trusted partner for vertical mobility solutions.',
  },

];

const TestimonialSlider = () => {
  return (
    <>
      <div className="TestimonialsInner">
        <div className="wrapper">
          <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {TestimonialsData.map(
              (
                {
                  imgSrc,
                  Name,
                  Destination,
                  TesimonialsTitle,
                  TesimonialsContent,
                },
                index
              ) => (
                <SwiperSlide key={index}>
                  <div className="Testimonials">
                    <ul className="ClientSlider">
                      <li>
                        <img
                          className="ClientImg"
                          src={imgSrc}
                          alt={Name}
                        />
                        <p className="ClientName">{Name}</p>
                        <p className="Destination">{Destination}</p>
                        <img
                          className="QuoteImg"
                          src="/assets/icons/quote.png"
                          alt="Quote"
                        />
                        <h3 className="TesimonialsTitle">
                          {TesimonialsTitle}
                        </h3>
                        <p className="TesimonialsContent">
                          {TesimonialsContent}
                        </p>
                      </li>
                    </ul>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
