import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SubInnerContent from '../SubInnerContent';
import '../CounterSection/style.css';

const CounterSection = () => {
  const counterData = [
    { value: 900, label: 'Clients Served with Satisfaction' },
    { value: 20, label: 'Years of Established Business' },
    { value: 50, label: 'Technical Experts Team' },
    { value: 800, label: 'Projects Completed Successfully' },
  ];

  // State for animated counter values
  const [animatedCounts, setAnimatedCounts] = useState(counterData.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const interval = 30; 
    const steps = Math.ceil(duration / interval); 
    const increments = counterData.map(counter => counter.value / steps);

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;

      setAnimatedCounts(prevCounts =>
        prevCounts.map((count, index) =>
          currentStep < steps
            ? Math.min(count + increments[index], counterData[index].value)
            : counterData[index].value
        )
      );

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [counterData]);

  return (
    <div className="CounterSection ptb100">
      <div className="wrapper">
        <SubInnerContent
          heading={'Engineering Solutions that Propel Progress and Enhance Connectivity.'}
          subtitle={
            'At MSTA Engineering, we believe in elevating more than just vertical spaces; we aim to elevate experiences. Our team of expert engineers and technicians is committed to delivering innovative solutions that redefine vertical mobility. From designing advanced elevators to ensuring precise installations and providing reliable maintenance services, we focus on delivering quality and exceeding customer expectations.'
          }
        />
        <div className="InnerCounter">
          <div className="counter d-flex">
            {counterData.map((counter, index) => (
              <div className="counter-items" key={index}>
                <h3>{Math.floor(animatedCounts[index])}+</h3>
                <p>{counter.label}</p>
              </div>
            ))}
          </div>
        </div>
       <div className="InnerBtnSection">
       <Link className='btn ylw-btn' to={'/contact'}>Get Your Free Quote</Link>
       </div>
      </div>
    </div>
  );
};

export default CounterSection;
