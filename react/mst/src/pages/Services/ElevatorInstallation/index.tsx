import '../ElevatorModernization/style.css';
import InnerBanner from '../../../components/InnerBanner'
import ElevatorRepairBanner from '../ElevatorInstallation/images/elevator-installation-banner.jpg';
import AboutImgContentImg from '../ElevatorInstallation/images/elevator-repairs.jpg';
import CommonImgContent from '../../../components/CommonImgContent';
import CtaSection from '../../../components/CtaSection/index';
import TestimonialsSection from '../../../components/TestimonialsSection';
import ServicesContentSection from '../../../components/ServicesContentSection';
import RepairServicesContentSectionBg from '../ElevatorInstallation/images/elevator-repairs-content-section-bg.jpg';
import ServiceCard from '../../../components/ServiceCard';
import TrainingProgram from './images/routine-inspections.jpg';
import CustomizeMaintanace from './images/modernization-solutions.jpg';
import TechnicalSupport from './images/repair-and-maintenance.jpg';



const ElevatorInstallation = () => {
  return (
    <>
      {/* Inner Banner Section */}
     
      <InnerBanner
        imgSrc={ElevatorRepairBanner}
        InnerHeading={
          <>
            Elevator Installation Solutions for Smooth Vertical Transition
          </>
        }
        InnerContent="Welcome to Msta, your trusted partner for expert elevator installations. Our seasoned professionals bring a wealth of experience to ensure a smooth and efficient process tailored to your unique needs."
      />
      <CommonImgContent
        image={AboutImgContentImg}
        heading="Effortless Elevator  Installation"
        CommonContent={
          `Elevator installation plays a vital role in ensuring smooth vertical mobility within any building. At Elevator Care Center, we understand the importance of this process and are committed to delivering flawless installations that enhance your space with precision and expertise. || Discover the core aspects of our elevator installation services and learn why Elevator Care Center is the trusted choice for elevating your building’s vertical transportation experience. || Our elevator installation process starts with detailed planning. At Elevatorcarecenter, we prioritize understanding the unique needs of your building. Our team of experts conducts comprehensive site assessments, evaluating architectural details, structural design, and usage patterns. We work closely with clients through in-depth consultations to align with their vision, preferences, and functional requirements.`
        }
        className="CommonImgContent"
      />
      <ServicesContentSection 
            backgroundImage={RepairServicesContentSectionBg}
            heading={'Msta Engineering understands that every space has unique requirements. That’s why we specialize in delivering tailored elevator solutions. '}
            subtitle={'Whether you need a sleek glass design to enhance a contemporary lobby or a durable, high-performance system for a bustling commercial building, our expertise ensures installations perfectly suited to your needs.'}
            btnText={'Get Your Free Quote'}
            btnUrl={'/contact'}
            showBtn={true}
            className=""
          />
        <ServiceCard 
        ChooseIcons={[
          {
            imgSrc: TrainingProgram,
            title: 'Routine Inspections',
            content: 'Technicians assess wear, lubricate components, and top-notch safety features for optimal elevator.',
          },
          {
            imgSrc: TechnicalSupport,
            title: 'Repairs & Maintenance',
            content: 'Reliable lift repairs and maintenance ensuring smooth operations, safety, and longevity.',
          },
          {
            imgSrc: CustomizeMaintanace,
            title: 'Modernization Solutions',
            content: 'Upgrade safety features, incorporate energy efficient components, and introduce smart technologies.',
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

export default ElevatorInstallation;
