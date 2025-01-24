import  { useState } from 'react';
import '../AccordionSection/style.css'
import SubInnerContent from '../SubInnerContent';


const AccordionsData = [
  {
    Faqtittle: 'How often should I schedule elevator maintenance?',
    FaqContent:
      'Elevator maintenance frequency depends on usage and local regulations. Generally, quarterly inspections are recommended, with more extensive checks annually. However, high-traffic areas or commercial settings may require monthly inspections. Regular maintenance ensures optimal performance, identifies potential issues early, and extends the elevator’s lifespan, enhancing safety and reliability.',
  },
  {
    Faqtittle: 'What safety features should elevators have?',
    FaqContent:
      'Elevators should have safety features such as emergency stop buttons, interlocks on doors, overload sensors, emergency lighting, and communication systems. Additionally, regular inspections ensure these features function as intended.',
  },
  {
    Faqtittle: 'How can I reduce elevator downtime?',
    FaqContent:
      'Regular maintenance, timely repairs, and upgrading outdated components are key to minimizing elevator downtime. Monitoring systems can also help detect issues early before they lead to failures.',
  },
  // Add more FAQs as needed
];

const AccordionSection = () => {
  const [activeIndex, setActiveIndex] =  useState<number>(0); // First accordion open by default

  const toggleAccordion = (index:number) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  return (
    <div className="AccordionSection ptb100">
      <div className="wrapper">
        <SubInnerContent subtitle={""} heading={'Real stories of satisfaction'} />
        {AccordionsData.map(({ Faqtittle, FaqContent }, index) => (
            <div
                    className={`accordionMain ${
                      activeIndex === index ? 'active' : ''
                    }`}
                    key={index}
                  >
                    <div
                      className="accordionHeader"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h5>{Faqtittle}</h5>
                      <button className="accordionToggle">
                        <img
                          src={
                            activeIndex === index
                              ? '/assets/icons/minus.png'
                              : '/assets/icons/plus.png'
                          }
                          alt={activeIndex === index ? 'Collapse' : 'Expand'}
                          className="toggleIcon"
                        />
                      </button>
                    </div>
                    {activeIndex === index && (
                      <div className="accordionContent">
                        <p>{FaqContent}</p>
                      </div>
                    )}
            </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionSection;
