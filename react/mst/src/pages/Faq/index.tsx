import '../../pages/Faq/style.css';
import InnerBanner from '../../components/InnerBanner';
import AboutInnerBannerImg from './images/about-banner-img.jpg';
import AccordionSection from '../../components/AccordionSection';

const Faq = () => {
  return (
    <>
      {/* Inner Banner Section */}
      <InnerBanner
        imgSrc={AboutInnerBannerImg}
        InnerHeading={
          <>
            Frequently Asked Questions
          </>
        }
        InnerContent="Find answers to the most common questions about our services, processes, and solutions. If you need more help, we're just a call away!"
      />
      

      <AccordionSection />
    </>
  );
};

export default Faq;
