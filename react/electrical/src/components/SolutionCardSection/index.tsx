import '../SolutionCardSection/style.css';
import SubInnerContent from '../SubInnerContent';

import yearExperience from './images/year-experience.svg';
import qualityPolicy from './images/Quality-Policy.svg';
import teamBehind from './images/Team-Behind.svg';
import guidingPrinciples from './images/Guiging-Principles.svg';

const SolutionCard = [
    {
        imgSrc: yearExperience,
        title: '20 Years Experience',
        SolutionDesc: 'Our vision redefines the elevator experience, while our mission enhances vertical mobility through safety, efficiency, and customer satisfaction.',
    },
    {
        imgSrc: qualityPolicy,
        title: 'Quality Policy',
        SolutionDesc: 'Excellence guides our work—from design to installation, maintenance, and modernization, always prioritizing precision and customer satisfaction.',
    },
    {
        imgSrc: teamBehind,
        title: 'The Team Behind Us',
        SolutionDesc: 'Our success comes from a skilled team ensuring smooth installations, reliable maintenance, and ongoing innovation in elevator technology.',
    },
    {
        imgSrc: guidingPrinciples,
        title: 'Guiding Principles',
        SolutionDesc: 'Integrity, innovation, and customer focus drive our success, guiding every project from design to client relationships.',
    },
];

const SolutionCardSection = () => {
  return (
    <div className="SolutionCardSection ptb100">
        <div className="wrapper">
         <SubInnerContent
                  heading={'Our Mission to Innovate and Excel in Every Elevator Solution'}
                  subtitle={
                    'Specializing in commercial elevator services, accessibility solutions such as wheelchair lifts, and material/freight elevator systems.'
                  }
                />
            <div className="SolutionCardColumn">
                    <div className="SolutionCardGrid">
                        <ul>
                           {SolutionCard.map(({ imgSrc, title, SolutionDesc}, index) => (
                            <li key={index}>
                            <img src={imgSrc} alt={title} />
                            <h3>{title}</h3>
                            <p>{SolutionDesc}</p>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
    </div>
    </div>
  )
}

export default SolutionCardSection;
