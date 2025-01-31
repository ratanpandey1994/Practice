//import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/style.css';
const SocialLinks = [
  {
    imgSrc: '/assets/icons/facebook.png',
    title: 'Facebook',
    socialUrl: '#'
  },
  {
    imgSrc: '/assets/icons/instagram.png',
    title: 'Instagram',
    socialUrl: '#'
  },
  {
    imgSrc: '/assets/icons/linkedin.png',
    title: 'LinkedIn',
    socialUrl: '#'
  },
  {
    imgSrc: '/assets/icons/youtube.png',
    title: 'YouTube',
    socialUrl: '#'
  },
  {
    imgSrc: '/assets/icons/x.png',
    title: 'X (formerly Twitter)',
    socialUrl: '#'
  },
];


const MenuLinks = [
  {
    MenuName: 'Home',
    PageLink: '/',
  },
  {
    MenuName: 'About',
    PageLink: '/about-us',
  },
  {
    MenuName: 'Services',
    PageLink: '/elevator-modernization',
  },
  {
    MenuName: 'Gallery',
    PageLink: '/gallery',
  },
  {
    MenuName: 'Testimonial',
    PageLink: '/testimonials',
  },
  {
    MenuName: 'FAQ’s',
    PageLink: '/faqs',
  },
  {
    MenuName: 'Contact Us',
    PageLink: '/contact',
  },
];


const ServicesLinks = [
  {
    ServiceName: 'Elevator Repairs',
    ServiceLink: '/elevator-repairs',
  },
  {
    ServiceName: 'Elevator Maintenance',
    ServiceLink: '/elevator-maintenance',
  },
  {
    ServiceName: 'Elevator Testing',
    ServiceLink: '#',
  },
  {
    ServiceName: 'Elevator Inspection Services',
    ServiceLink: '#',
  },
  {
    ServiceName: 'Facility Owners & Managers',
    ServiceLink: '#',
  },
  {
    ServiceName: 'State Code Resources',
    ServiceLink: '#',
  },
  {
    ServiceName: 'Elevator Repairs',
    ServiceLink: '/elevator-repairs',
  },
  {
    ServiceName: 'Elevator Installation',
    ServiceLink: '/elevator-installation',
  },
  {
    ServiceName: 'Elevator Testing',
    ServiceLink: '#',
  },
  {
    ServiceName: 'Elevator Inspection Services',
    ServiceLink: '#',
  },
  {
    ServiceName: 'Facility Owners & Managers',
    ServiceLink: '#',
  },
  {
    ServiceName: 'Elevator Repairs',
    ServiceLink: '/elevator-repairs',
  },
  {
    ServiceName: 'Elevator Maintenance',
    ServiceLink: '/elevator-maintenance',
  },
  {
    ServiceName: 'Elevator Testing',
    ServiceLink: '#',
  },
  {
    ServiceName: 'Elevator Inspection Services',
    ServiceLink: '#',
  },
  {
    ServiceName: 'Facility Owners & Managers',
    ServiceLink: '#',
  },
  {
    ServiceName: 'State Code Resources',
    ServiceLink: '#',
  },
];


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-main ptb100">
      <div className="wrapper">
        <div className="InnerFooter">
          {/* Footer Logos */}
        <div className="footerLogo">
          <a
            className="linedisplay"
            href="#"
            target="_blank"
          >
            <img
              src="/assets/icons/logo.png"
              alt="Msta Logo"
            />
          </a>
        </div>

        {/* Social Links */}
        <div className="SocialLinks d-flex align-center justify-center">
          {SocialLinks.map(({ imgSrc, title,socialUrl }, index) => (
            <div className='SocialLinksImg' key={index}>
              <Link to={socialUrl} target='_blank'><img src={imgSrc} alt={title} /></Link>
            </div>
          ))}
        </div>

        {/* Menu Links */}
        <div className="MenuLinks d-flex align-center justify-center d-flex-wrap">
          {MenuLinks.map(({ PageLink, MenuName }, index) => (
            <div className='FooterMenu' key={index}>
              <Link to={PageLink}>{MenuName}</Link>
            </div>
          ))}
        </div>

        {/* Service Links */}
        <div className="ServiceLinks d-flex justify-center d-flex-wrap">
          {ServicesLinks.map(({ ServiceName, ServiceLink }, index) => (
            <div className='ServiceInnerLinks' key={index}>
              <Link to={ServiceLink}>{ServiceName}</Link>
            </div>
          ))}
        </div>

        {/* Footer Copyright */}
        <div className="CopyRight d-flex align-center justify-center d-flex-wrap">
          <p>Copyright © {currentYear} MSTA Engineering Pvt. Ltd.</p>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Footer;
