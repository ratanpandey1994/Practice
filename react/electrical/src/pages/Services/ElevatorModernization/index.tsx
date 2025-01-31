import '../ElevatorModernization/style.css';
import InnerBanner from '../../../components/InnerBanner'
import ElevatorRepairBanner from '../ElevatorModernization/images/elevator-modernization-banner.jpg';
import AboutImgContentImg from '../ElevatorModernization/images/elevator-modernization.jpg';
import CommonImgContent from '../../../components/CommonImgContent';
import CtaSection from '../../../components/CtaSection/index';
import TestimonialsSection from '../../../components/TestimonialsSection';
import ServicesContentSection from '../../../components/ServicesContentSection';
import RepairServicesContentSectionBg from '../ElevatorModernization/images/elevator-modernization-content-section-bg.jpg';
import ServiceCard from '../../../components/ServiceCard';
import CustomizeMaintanace from './images/regulatory-compliance.jpg';
import TechnicalSupport from './images/customer-feedback.jpg';
import TrainingProgram from './images/training-Program.jpg';


const ElevatorModernization = () => {
  return (
    <>
      {/* Inner Banner Section */}
     
      <InnerBanner
        imgSrc={ElevatorRepairBanner}
        InnerHeading={
          <>
            Enhance Your Space Elevator Upgrades
          </>
        }
        InnerContent="Welcome to MSTA Engineering, where we specialize in elevator modernization—an innovative process that transcends simple equipment upgrades."
      />
      <CommonImgContent
        image={AboutImgContentImg}
        heading="The Complete Guide to Elevator Modernization"
        CommonContent={
          `Elevator modernization is more than just a technological upgrade; it’s a transformative process that redefines vertical transportation. At Elevator Care Center, we enhance your building's experience through careful and detailed modernization. Explore our comprehensive guide to elevator modernization and discover the artistry behind this transformative journey. || <strong> Safety Upgrades for Peace of Mind </strong> || Safety is paramount in Elevator Modernization. Elevatorcarecenter goes beyond the standard safety measures, incorporating the latest advancements in emergency braking systems, fire-resistant materials, and advanced sensors. The focus is not only on compliance with safety standards but also on providing passengers with peace of mind during every ride.`
        }
        className="CommonImgContent"
      />
      <ServicesContentSection 
            backgroundImage={RepairServicesContentSectionBg}
            heading={'Transform Your Elevator Experience Today!'}
            subtitle={'Looking to upgrade your building with advanced elevator modernization? Reach out to Elevator Care Center today to improve performance, safety, and design. Our experienced team will walk you through every step, ensuring a smooth and efficient transformation. Contact us now to begin your modernization project!'}
            btnText={'Get Your Free Quote'}
            btnUrl={'/contact'}
            showBtn={true}
            className=""
          />
        <ServiceCard 
        ChooseIcons={[
          {
            imgSrc: TrainingProgram,
            title: 'Safety Training Programs',
            content: 'Offering educational sessions and materials to building occupants to promote safe elevator use and emergency procedures.',
          },
          {
            imgSrc: TechnicalSupport,
            title: 'Customer Feedback Integration',
            content: 'Soliciting feedback from clients to continually improve service quality and tailor maintenance plans to their evolving needs and preferences.',
          },
          {
            imgSrc: CustomizeMaintanace,
            title: 'Regulatory Compliance Management',
            content: 'Staying up-to-date with evolving regulations and standards in the elevator industry to ensure full compliance and avoid penalties.',
          },
        ]}
        />
      <CtaSection />
      
      {/* Testimonials Section with dynamic className */}
      <TestimonialsSection 
        className="AboutPageTestimonials"
      />

    </>
  );
};

export default ElevatorModernization;
