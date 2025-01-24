//import React from 'react'
import '../SubInnerContent/style.css';
interface Props{
   heading:string,
   subtitle:string,
}

export const SubInnerContent = ({heading, subtitle}:Props) => {
  return (
    <div className='SubInnerContent'>
        <div className="wrapper">
            <div className="SubInnerSection">
            <h2>{heading}</h2>
            {Array.isArray(subtitle) ? (
              subtitle.map((text, index) => (
                <p key={index}>{text}</p>
              ))
            ) : (
              <p>{subtitle}</p>
            )}
            </div>
        </div>
    </div>
  )
}
export default SubInnerContent