import '../ContactForm/style.css';

const ContactForm = () => {
  const ContactFormTitle = "Elevate your questions! Reach out for smooth vertical solutions. Our team is here to provide expert assistance with precision.";

  return (
    <div className="ContactForm">
      <div className="wrapper">
        <div className="ContactFormWrapper">
        <div className="formHeader">
        <p>{ContactFormTitle}</p>
        </div>
          <form action="" method="POST">
            <div className="formField w50">
              <input type="text" placeholder="First Name" name="firstName" />
            </div>
            <div className="formField w50">
              <input type="text" placeholder="Last Name" name="lastName" />
            </div>
            <div className="formField w50">
              <input type="tel" placeholder="Phone" name="phone" />
            </div>
            <div className="formField w50">
              <input type="email" placeholder="Email" name="email" />
            </div>
            <div className="formField wfull">
              <input type="text" placeholder="Company Name" name="companyName" />
            </div>
            <div className="formField wfull">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="formField w50 text-left">
              {/* Placeholder for Recaptcha */}
              <p>Recaptcha Field</p>
            </div>
            <div className="formField w50 text-right">
              <button className='btn ylw-btn'>submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
