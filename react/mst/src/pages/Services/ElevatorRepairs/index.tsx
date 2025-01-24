import '../ElevatorRepairs/style.css';
import InnerBanner from '../../../components/InnerBanner'
import ElevatorRepairBanner from '../ElevatorRepairs/images/elevator-repair-banner.jpg';
import AboutImgContentImg from '../ElevatorRepairs/images/elevator-repair.jpg';
import CommonImgContent from '../../../components/CommonImgContent';
import CtaSection from '../../../components/CtaSection/index';
import TestimonialsSection from '../../../components/TestimonialsSection';
import ServicesContentSection from '../../../components/ServicesContentSection';
import RepairServicesContentSectionBg from '../ElevatorRepairs/images/RepairServicesContentSectionBg.jpg';
import ServiceCard from '../../../components/ServiceCard';


const ElevatorRepairs = () => {
  return (
    <>
      {/* Inner Banner Section */}
     
      <InnerBanner
        imgSrc={ElevatorRepairBanner}
        InnerHeading={
          <>
            Expert Elevator Repairs Ensuring Smooth Movement
          </>
        }
        InnerContent="Welcome to MSTA Engineering, where expert repairs meet precision and reliability. Trust us for exceptional service and enhanced mobility."
      />
      <CommonImgContent
        image={AboutImgContentImg}
        heading="Expertise in Elevator Repairs"
        CommonContent={
          'Welcome to Elevator Care Center, where our expertise in elevator repairs defines industry excellence. We deliver precision and dedication in every repair, ensuring superior performance. With a focus on innovation and a commitment to excellence, Elevator Care Center is your trusted choice for enhancing vertical mobility. Experience the difference with us—where exceptional service meets unwavering reliability. || <strong> Accurate Diagnosis for Precise Repairs </strong> || At Elevator Care Center, we start with a detailed, precision-driven diagnosis. Our certified technicians use advanced tools to pinpoint the root causes of elevator issues accurately, enabling swift and targeted repairs that address problems at their core. '
        }
        className="CommonImgContent"
      />
      <ServicesContentSection 
            backgroundImage={RepairServicesContentSectionBg}
            heading={'Get Your Elevators Running Smoothly Today!'}
            subtitle={'Do not let elevator issues disrupt your day. Contact Elevator Care Center now for fast, reliable, and expert repair services. Our certified technicians are ready to ensure your elevators operate safely and efficiently. Click below to schedule your service or request a free consultation!'}
            btnText={'Get Your Free Quote'}
            btnUrl={'/contact'}
            showBtn={true}
            className=""
          />
        <ServiceCard />
      <CtaSection />
      
      {/* Testimonials Section with dynamic className */}
      <TestimonialsSection 
        className="AboutPageTestimonials"
      />

    </>
  );
};

export default ElevatorRepairs;
