import '../ContactDetails/style.css';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactDetails = () => {
  const ContactDetailsTitle ="Nationwide Presence, 24/7 Accessibility for Elevator Solutions!";
  const ContactDetailsContent = "Wherever you go, we’re here to serve with our nationwide network. Our 24/7 availability guarantees continuous support, maintenance, and quick responses. Experience unparalleled vertical connectivity anytime, anywhere, with elevator solutions customized to your needs.";
  const ContactDetailsSubtitle = "Elevator Care Hours: Monday-Saturday, 9 am – 6 pm.";

  return (
    <div className="ContactDetails">
      <div className="wrapper">
        <div className="ContactDetailsWrapper">
          <h2>{ContactDetailsTitle}</h2>
          <p>{ContactDetailsContent}</p>
          <h3>{ContactDetailsSubtitle}</h3>
        </div>
        <div className="EmailPhoneWrapper">
          <div className="phone">
          <a href="tel:9718170946">
          <div className="iconouter">
          <FaPhone size={25} />
          </div>
          +91-9718170946
          </a>
          </div>
          <div className="email">
          <a href="mailto:support@elevatorcarecenter.com">
          <div className="iconouter">
            <MdEmail size={25} />
            </div>
            support@elevatorcarecenter.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
