// import React from 'react'
import '../ServiceRatings/style.css';
import Star from '/assets/icons/5-star-logo.png';

const ServiceRatings = () => {
  return (
    <div className="ServiceRatings">
        <div className="wrapper">
            <div className="RatingSection">
                <div className="ratings-img">
                <img src={Star} alt="Ratings" />
                </div>
                <div className="counter d-flex">
                    <div className="counter-items">
                        <h3>900+</h3>
                        <p>Clients Served with Satisfaction</p>
                    </div>
                    <div className="counter-items">
                        <h3>20+</h3>
                        <p>Years of Established Business</p>
                    </div>
                    <div className="counter-items">
                        <h3>50+</h3>
                        <p>Technical Experts Team</p>
                    </div>
                    <div className="counter-items">
                        <h3>800+</h3>
                        <p>Projects Completed Successfully</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceRatings