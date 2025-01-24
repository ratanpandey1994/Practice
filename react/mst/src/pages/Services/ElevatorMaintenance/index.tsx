import '../ElevatorModernization/style.css';
import InnerBanner from '../../../components/InnerBanner'
import ElevatorRepairBanner from '../ElevatorMaintenance/images/elevator-maintenance-banner.jpg';
import AboutImgContentImg from '../ElevatorMaintenance/images/elevator-maintenance.jpg';
import CommonImgContent from '../../../components/CommonImgContent';
import CtaSection from '../../../components/CtaSection/index';
import TestimonialsSection from '../../../components/TestimonialsSection';
import ServicesContentSection from '../../../components/ServicesContentSection';
import RepairServicesContentSectionBg from '../ElevatorMaintenance/images/elevator-maintenance-content-section-bg.jpg';
import ServiceCard from '../../../components/ServiceCard';
import TrainingProgram from './images/preventive-maintenance.jpg';
import TechnicalSupport from './images/emergency-repairs.jpg';
import CustomizeMaintanace from './images/safety-compliance.jpg';


const ElevatorMaintenance = () => {
  return (
    <>
      {/* Inner Banner Section */}
     
      <InnerBanner
        imgSrc={ElevatorRepairBanner}
        InnerHeading={
          <>
            Enhancing Efficiency with Expert Lift Maintenance
          </>
        }
        InnerContent="Dedicated to excellence, we deliver safe, efficient, and dependable solutions for all your vertical transportation requirements."
      />
      <CommonImgContent
        image={AboutImgContentImg}
        heading="Keeping Your Vertical World Moving Smoothly"
        CommonContent={
          `Welcome to our Elevator Maintenance Services, where reliability and precision converge to ensure a seamless and secure vertical experience. At Elevator Care Service, we are committed to maintaining the efficiency and safety of your elevators, whether in residential, commercial, or industrial settings. || Our tailored maintenance solutions are designed to meet the specific requirements of each system. We begin with a thorough evaluation to detect and address potential issues proactively, minimizing interruptions and enhancing safety. || For unexpected breakdowns, our dedicated team is on standby 24/7 to provide prompt emergency repair services. We prioritize swift resolution to reduce downtime and ensure passenger safety. || Boost your system’s capabilities with our modernization services. From integrating cutting-edge safety features to upgrading with energy-efficient and smart technologies, we prepare your elevators for the future.`
        }
        className="CommonImgContent"
      />
      <ServicesContentSection 
            backgroundImage={RepairServicesContentSectionBg}
            heading={'Our certified technicians bring extensive expertise in servicing diverse elevator systems. By focusing on preventative care, we address potential problems before they affect performance.'}
            subtitle={'We are committed to providing timely and efficient service, ensuring your elevators operate at their best. Customized maintenance plans are created to meet the unique demands of your system.'}
            btnText={'Get Your Free Quote'}
            btnUrl={'/contact'}
            showBtn={true}
            className=""
          />
        <ServiceCard 
        ChooseIcons={[
          {
            imgSrc: TrainingProgram,
            title: 'Preventive Maintenance',
            content: 'Scheduled maintenance tasks aimed at preventing breakdowns and ensuring the smooth operation of elevator systems.',
          },
          {
            imgSrc: TechnicalSupport,
            title: 'Emergency Repairs',
            content: 'Swift response to emergency situations to promptly address any elevator malfunctions or safety concerns.',
          },
          {
            imgSrc: CustomizeMaintanace,
            title: 'Safety Compliance',
            content: 'Ensuring that elevator systems meet all necessary safety standards and regulations through regular checks and adjustments.',
          },
        ]}
        header='Our Strategy'
        subtitle='Our elevator maintenance solutions are customized to meet the unique needs of each system. We begin with a comprehensive assessment to identify potential issues and implement proactive measures, minimizing downtime and enhancing safety standards.'        />
      <CtaSection />
      
      {/* Testimonials Section with dynamic className */}
      <TestimonialsSection 
        className="AboutPageTestimonials"
      />

    </>
  );
};

export default ElevatorMaintenance;
