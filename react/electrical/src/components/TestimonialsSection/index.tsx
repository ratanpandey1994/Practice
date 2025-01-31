import '../OurAchievements/style.css';
import SubInnerContent from '../SubInnerContent';
import TestimonialSlider from '../TestimonialSlider';

const TestimonialsSection = ({ className = '', subtitle = ' ', heading = 'Real stories of satisfaction' }) => {
  return (
    <div className={`TestimonialsSection ptb100 ${className}`}>
      <div className="wrapper">
        <SubInnerContent
          subtitle={subtitle}
          heading={heading}
        />
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default TestimonialsSection;
