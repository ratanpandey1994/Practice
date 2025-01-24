import { Link } from 'react-router-dom';
import '../CtaSection/style.css';

// Default background
import DefaultBackground from './images/cta-bg.jpg';

const CtaSection = ({ backgroundImage = DefaultBackground }) => {
  return (
    <div
      className='CtaSection ptb100'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="wrapper">
        <div className="CtaContent">
          <h3 className='save-on'>Save 50% on</h3>
          <h2>Annual Elevator Maintenance</h2>
          <p>
            Experience unmatched safety, efficiency, and reliability with our expert vertical transportation solutions.
          </p>
          
         <Link className='btn ylw-btn' to="/contact">Get Your Free Quote</Link>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
