import '../CommonImgContent/style.css';
interface Props {
  image: string;
  heading: string;
  CommonContent: string;
  className: string;
}

const CommonImgContent = ({ image, heading, CommonContent, className }: Props) => {
  return (
    <div className={`CommonImgContentSection ptb100 ${className}`}>
      <div className="wrapper">
        <div className="CommonImgContentSectionWrap d-flex d-flex-wrap align-center">
          <div className="CommonImgContentLeft">
          {heading && <h2>{heading}</h2>}
            {CommonContent.split('||').map((text, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
          </div>
          <div className="CommonImgContentRight">
          <figure>{image && <img src={image} alt="About" />}</figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonImgContent;
