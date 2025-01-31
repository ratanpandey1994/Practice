// Import the required styles and components
import '../ServiceCard/style.css';
import SubInnerContent from '../SubInnerContent';
import CustomizeMaintanace from './images/customize-maintanace.jpg';
import TechnicalSupport from './images/techniclep-support.jpg';
import TrainingProgram from './images/training-Program.jpg';
import TitleWithBorder from '../TitleWithBorder';

// Create the ChooseIcons array with imported images



const ServiceCard = ({ChooseIcons=[
  {
    imgSrc: CustomizeMaintanace,
    title: '20 Years Experience',
    content: `We train building staff on maintenance and safety protocols to handle minor issues effectively.`,
  },
  {
    imgSrc: TechnicalSupport,
    title: 'Customized Maintenance Plans',
    content: `Expert assistance and guidance for any elevator-related queries or concerns, ensuring smooth operation and customer satisfaction.`,
  },
  {
    imgSrc: TrainingProgram,
    title: 'Professional Service',
    content: `We train building staff on maintenance and safety protocols to handle minor issues effectively.`,
  },
],
header='Our Comprehensive Approach',
subtitle='Designed to address the unique needs of each elevator system, our maintenance services begin with a comprehensive assessment. We carefully identify potential issues and implement proactive solutions to minimize disruptions and optimize safety.'
}) => {
  return (
    <div className="ServiceCard ptb100">
      <div className="wrapper">
        <SubInnerContent
          heading={header}
          subtitle={subtitle}
        />
        <TitleWithBorder 
          subtitle='Key Maintenance Services'
        />
        <div className="ServiceCardColumn">
          <div className="ServiceGrid">
            <ul>
              {ChooseIcons.map(({ imgSrc, title, content}, index) => (
                <li key={index}>
                  <div className='CardServiceImg'><img src={imgSrc} alt={title} /></div>
                  <div className='ServiceCardContent'>
                  <h3>{title}</h3>
                  <p>{content}</p> {/* Corrected the closing tag */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
