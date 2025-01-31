import '../../pages/Testimonials/style.css';
import InnerBanner from '../../components/InnerBanner';
import AboutInnerBannerImg from './images/about-banner-img.jpg';
import TestimonialsSection from '../../components/TestimonialsSection';

const Testimonials = () => {
  return (
    <>
      {/* Inner Banner Section */}
      <InnerBanner
        imgSrc={AboutInnerBannerImg}
        InnerHeading={
          <>
            Testimonials from Our Valued Customers
          </>
        }
        InnerContent="Discover how our dedication to safety, efficiency, and reliability has made a positive impact on the lives of those we serve."
      />
      
      {/* Testimonials Section with dynamic className */}
      <TestimonialsSection 
        className="AboutPageTestimonials"
      />

    </>
  );
};

export default Testimonials;
