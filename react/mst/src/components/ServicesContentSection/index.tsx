//import React from 'react'
import '../ServicesContentSection/style.css';
interface Props{
  backgroundImage:string,
   heading:string,
   subtitle:string,
   btnText:string,
   btnUrl:string,
   showBtn:boolean, 
   className :string,
}


const ServicesContentSection = ({backgroundImage, heading,subtitle,btnText,btnUrl,showBtn, className=""}:Props) => {
  return (

    <div className={`ServicesContentSection ptb200 ${className}`} style={{ backgroundImage: `url("${backgroundImage}")`, backgroundPosition: '60%',  backgroundSize: 'cover' }}>
        <div className="wrapper">
        <div className="ServicesContent">
            <h2>{heading}</h2>
            {Array.isArray(subtitle) ? (
              subtitle.map((text, index) => (
                <p key={index}>{text}</p>
              ))
            ) : (
              <p>{subtitle}</p>
            )}
            {showBtn && <a className="btn arrow-btn" href={btnUrl}>{btnText}</a>}
            </div>
        </div>
    </div>
  )
}

export default ServicesContentSection