import '../BrandLogoSection/style.css';

// Import images
import Logo1 from './images/dummy-logo-2.png';
import Logo2 from './images/dummy-logo-3.png';
import Logo3 from './images/dummy-logo-4.png';
import Logo4 from './images/dummy-logo-5.png';
import Logo5 from './images/dummy-logo-6.png';

const logos = [
  {
    imgSrc: Logo1,
    title: 'Brand Logo 1',
  },
  {
    imgSrc: Logo2,
    title: 'Brand Logo 2',
  },
  {
    imgSrc: Logo3,
    title: 'Brand Logo 3',
  },
  {
    imgSrc: Logo4,
    title: 'Brand Logo 4',
  },
  {
    imgSrc: Logo5,
    title: 'Brand Logo 5',
  },
];

const BrandLogoSection = () => {
  return (
    <div className="LogoSection">
      <div className="wrapper">
        <div className="logos d-flex align-center">
          {logos.map(({ imgSrc, title }, index) => (
            <div className="BrandLogos" key={index}>
              <img src={imgSrc} alt={title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogoSection;
