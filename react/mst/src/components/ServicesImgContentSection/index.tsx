//import React from 'react'
import '../ServicesImgContentSection/style.css';
interface Props{
  image:string,
   heading:string,
   subtitle:string,
   btnText:string,
   btnUrl:string,
   showBtn:boolean, 
   className :string,
}
const ServicesImgContentSection = ({image,heading, subtitle,btnText,btnUrl,showBtn,className,}:Props) => {
  return (
    <div className={`ServicesImgContentSection ptb100 ${className}`}>
    <div className="wrapper">
        <div className="ServiceSectionWrap  d-flex align-center">
        <div className="ServicesImgContentLeft">
            <figure>
                {image && <img src={image} alt="Service" />}
            </figure>
        </div>
        <div className="ServicesImgContentRight">
            <h2>{heading}</h2>

            {
              subtitle.split('||').map((text,index)=>{
                return <p key={index}>{text}</p>
              })
            }

            {/* {Array.isArray(subtitle) ? (
              subtitle.map((text, index) => (
                <p key={index}>{text}</p>
              ))
            ) : (
              <p>{subtitle}</p>
            )} */}
            {
            showBtn && <a className="btn arrow-btn" href={btnUrl}>{btnText}</a>
            }
        </div>
        </div>
    </div>
    </div>
  )
}

export default ServicesImgContentSection