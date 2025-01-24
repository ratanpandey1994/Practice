// Import the required styles and components
import '../WhyChooseSection/style.css';
import SubInnerContent from '../SubInnerContent';
import { Link } from 'react-router-dom';

// Import images
import ExperienceIcon from './images/Experience.svg';
import ServiceIcon from './images/Service.svg';
import TechnicianIcon from './images/Technician.svg';
import TechnicalSkillsIcon from './images/Technical skills.svg';
import HighlyRecommendedIcon from './images/Highly Recomended.svg';
import RepairIcon from './images/Repair.svg';
import ReviewsIcon from './images/Reviews.svg';
import SupportIcon from './images/24-7 Support.svg';

// Create the ChooseIcons array with imported images
const ChooseIcons = [
  {
    imgSrc: ExperienceIcon,
    title: '20 Years Experience',
  },
  {
    imgSrc: ServiceIcon,
    title: 'Professional Service',
  },
  {
    imgSrc: TechnicianIcon,
    title: 'Expert Technicians',
  },
  {
    imgSrc: TechnicalSkillsIcon,
    title: 'Technical Skills',
  },
  {
    imgSrc: HighlyRecommendedIcon,
    title: 'Highly Recommended',
  },
  {
    imgSrc: RepairIcon,
    title: 'Repair & AMC',
  },
  {
    imgSrc: ReviewsIcon,
    title: 'Positive Reviews',
  },
  {
    imgSrc: SupportIcon,
    title: '24×7 Great Support',
  },
];

const WhyChooseSection = () => {
  return (
    <div className="WhyChooseSection ptb100">
      <div className="wrapper">
        <SubInnerContent
          heading="Why Choose Msta"
          subtitle="Providing specialized services in commercial lifts, accessibility solutions such as wheelchair elevators, and material/freight elevators."
        />
        <div className="WhyChooseColumn">
          <div className="ChooseGrid">
            <ul>
              {ChooseIcons.map(({ imgSrc, title }, index) => (
                <li key={index}>
                  <img src={imgSrc} alt={title} />
                  <p>{title}</p>
                </li>
              ))}
            </ul>
          </div>
          <Link className="btn ylw-btn text-center" to="/contact">Get Your Free Quote</Link>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
