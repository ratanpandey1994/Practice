import '../../pages/Contact/style.css';
import InnerBanner from '../../components/InnerBanner';
import ContactInnerBannerImg from '../Contact/images/ContactPageBanner.jpg';
import ContactForm from '../../components/ContactForm';
import ContactDetails from '../../components/ContactDetails';

const Contact = () => {
  return (
    <div className='ContactSection'>
      {/* Inner Banner Section */}
      <InnerBanner
        imgSrc={ContactInnerBannerImg}
        InnerHeading={
          <>
            Enhance Your Connection With Us
          </>
        }
        InnerContent="Contact Us for Customized Elevator Solutions to Meet Your Needs!"
      />
      <ContactForm />
      <ContactDetails />
    </div>
  );
};

export default Contact;
