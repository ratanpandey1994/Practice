import SubInnerContent from '../SubInnerContent';
import ServiceRatings from '../ServiceRatings';
import '../HeroSection/style.css';

const ServiceIncludeSection = () => {
  return (
    <div className='ServiceIncludeSection ptb100'>
        <div className="wrapper">
        <SubInnerContent 
        heading={'Our Elevator services include'}
        subtitle={'MSTA Engineering Pvt. Ltd. known to be one of the leading manufacturers and suppliers of this impeccable range of Elevator and HVAC repair and Maintenance Services. For the purpose of maintaining this reputation, we provide it as per the set industry norms and guidelines. In addition,the offered range is known to be marked at the most reasonable rate possible, for maximum client satisfaction.'}
        /> 
        <ServiceRatings />
        </div>
    </div>
  );
};

export default ServiceIncludeSection