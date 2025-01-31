import '../InnerBanner/style.css';

interface Props{
    imgSrc:string,
    InnerHeading:string | React.ReactNode,
    InnerContent:string,
}

const InnerBanner = ({ imgSrc, InnerHeading, InnerContent}:Props) => {
  return (
    <div
      className="InnerBanner"
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      <div className="wrapper">
        <div className="InnerContent">
          <h1>{InnerHeading}</h1>
          <p>{InnerContent}</p>
        </div>
      </div>
    </div>
  );
};

export default InnerBanner;