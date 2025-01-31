import HeroSection from '../../components/HeroSection/index'
import BrandLogoSection from '../../components/BrandLogoSection'
import ServiceIncludeSection from '../../components/ServiceIncludeSection'
import ServicesContentSection from '../../components/ServicesContentSection'
import img from './images/maintanace-img.jpg';
import ServicesImgContentSection from '../../components/ServicesImgContentSection';
import InstalationImg from './images/looking-instalation-img.png';
import RepairImg from './images/repair-img.jpg';
import ModernizationImg from './images/Modernization.png';
import LeadingImg from './images/Leading-image.jpg';
import WhyChooseSection from '../../components/WhyChooseSection';
import OurAchievements from '../../components/OurAchievements'
import TestimonialsSection from '../../components/TestimonialsSection'
import CtaSection from '../../components/CtaSection'
import AccordionSection from '../../components/AccordionSection'
import mainbanner from './images/main-banner.jpg';


const Home=()=>{
    return <>
       <HeroSection
        backgroundImage={mainbanner}
        heading="Annual Elevator Maintenance"
        subheading="Experience unmatched safety, efficiency, and reliability with our expert vertical transportation solutions."
        saveOn="Save 50% on"
        buttonText="Get Your Free Quote"
        buttonLink="/contact"
      />
    <BrandLogoSection />
    <ServiceIncludeSection />
    <ServicesContentSection 
      backgroundImage={img}
      heading={'Looking For Maintenance?'}
      subtitle={'Achieve seamless vertical mobility with our expert elevator  maintenance services. Our experienced technicians deliver routine inspections, prompt repairs, and preventative solutions to guarantee peak performance and safety.'}
      btnText={'Know More'}
      btnUrl={'/contact'}
      showBtn={true}
      className=""
    />
    <ServicesImgContentSection
     image={InstalationImg}
     heading={'Looking For Installation?'}
      subtitle={'Transform your building with our professional elevator installation services. Our skilled team delivers precise installations, adhering to strict safety standards for smooth and reliable vertical mobility.'}
      btnText={'Know More'}
      btnUrl={'/contact'}
      showBtn={true}
      className=""
    />
     <ServicesContentSection 
      backgroundImage={RepairImg}
      heading={'Looking For Repairs?'}
      subtitle={'Our certified repair specialists, equipped with fully stocked service vans, provide efficient on-site elevator repairs. Count on us for prompt and reliable solutions to maintain seamless vertical mobility.'}
      btnText={'Know More'}
      btnUrl={'/contact'}
      showBtn={true}
      className=""
    />
    <ServicesImgContentSection
     image={ModernizationImg}
     heading={'Looking For Modernization?'}
     subtitle={
        'Enhance your vertical transportation with our advanced modernization services, boosting safety, efficiency, and design. We improve both performance and aesthetics, blending functionality with style. With cutting-edge technology and expert installation, we ensure smooth operation and a sophisticated look for your space.'
      }
      btnText={'Know More'}
      btnUrl={'/contact'}
      showBtn={true}
      className=""
    />

    <ServicesContentSection
      backgroundImage={LeadingImg}
      heading={'We are India’s leading company in elevator manufacturing, installation, and service.'}
      subtitle={
        `Msta is India’s leading provider of elevator solutions, committed to revolutionizing vertical mobility. With over 20 years of experience, we specialize in manufacturing, installing, maintaining, and repairing elevators. Our focus on innovation, safety, and customer satisfaction distinguishes us in the industry. We offer a wide variety of elevators, including commercial lifts and wheelchair-accessible models, ensuring accessibility and convenience for everyone. ||
        At Msta, we combine advanced technology with a customer-first approach to deliver flawless vertical mobility solutions that go beyond expectations. Elevate your experience with us – where precision and excellence rise together in every journey.`
      }
      btnText={'Get Your Free Quote'}
      btnUrl={'/contact'}
      showBtn={true}
      className="leading-company"
    />
    <WhyChooseSection />
    <OurAchievements />
    <TestimonialsSection />
    <CtaSection />
    <AccordionSection />
    </>
}

export default Home;