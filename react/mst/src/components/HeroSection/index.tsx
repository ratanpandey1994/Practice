import '../HeroSection/style.css';

interface Props {
  backgroundImage: string;
  heading: string;
  subheading: string;
  buttonLink: string;
  buttonText: string;
  saveOn: string;
}


const HeroSection = ({ backgroundImage, heading, subheading,saveOn, buttonText, buttonLink }:Props) => {
  return (
    <div 
      className='HeroBanner' 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="wrapper">
        <div className="HeroContent">
          <h3 className='save-on'>{saveOn}</h3>
          <h1>{heading}</h1>
          <p>{subheading}</p>
          <a className='btn ylw-btn' href={buttonLink}>{buttonText}</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
