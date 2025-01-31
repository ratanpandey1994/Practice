import '../../pages/About/style.css';
import InnerBanner from '../../components/InnerBanner';
import AboutInnerBannerImg from './images/about-banner-img.jpg';
import AboutImgContentImg from './images/about-img.png';
import CommonImgContent from '../../components/CommonImgContent';
import CounterSection from '../../components/CounterSection';
import SolutionCardSection from '../../components/SolutionCardSection';
import CtaSection from '../../components/CtaSection/index';
import TestimonialsSection from '../../components/TestimonialsSection';
import AccordionSection from '../../components/AccordionSection';

const About = () => {
  return (
    <>
      {/* Inner Banner Section */}
      <InnerBanner
        imgSrc={AboutInnerBannerImg}
        InnerHeading={
          <>
            About <span className="orange-color">MSTA ENGINEERING</span>
          </>
        }
        InnerContent="We take pride in offering the safest, most efficient, and reliable vertical transportation solutions, backed by our commitment to excellence."
      />
      <CommonImgContent
        image={AboutImgContentImg}
        heading=""
        CommonContent={
          '<strong> <i> Welcome to MSTA Engineering, your trusted partner in vertical mobility solutions. With a proven track record of excellence over [number] years, we lead the industry in innovation and reliability. Committed to precision, safety, and quality, we specialize in elevator manufacturing, installation, maintenance, and modernization. </i> </strong> || MSTA Engineering is a leading provider of advanced elevator solutions, committed to revolutionizing vertical mobility. With over two decades of expertise, we specialize in elevator manufacturing, installation, maintenance, and repair. Our focus on innovation, safety, and customer satisfaction sets us apart. We offer a wide range of elevators, including commercial lifts and wheelchair-accessible models, ensuring convenience and accessibility for all. || At MSTA Engineering, we combine state-of-the-art technology with a customer-first approach to deliver smooth, reliable vertical solutions that exceed expectations. Elevate your experience with us – where precision and excellence meet at every level.'
        }
        className="CommonImgContent"
      />
      <CounterSection />
      <SolutionCardSection />
      <CtaSection />
      
      {/* Testimonials Section with dynamic className */}
      <TestimonialsSection 
        className="AboutPageTestimonials"
      />

      <AccordionSection />
    </>
  );
};

export default About;
