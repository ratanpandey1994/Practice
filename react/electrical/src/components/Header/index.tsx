import { useState, useEffect } from 'react';
import logo from '/assets/icons/logo.png'; // Corrected path
import { Link } from 'react-router-dom';
import { MdArrowDropDown } from "react-icons/md";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen((prev) => !prev);
  };
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'active' : ''}`}>
      <div className="wrapper">
        <div className="headerRow d-flex align-center">
          <div className="site-logo">
            <Link to="/"><img src={logo} alt="Logo" /></Link>
          </div>
          <div className="header-navigation d-flex align-center">
            <div className="menuwrapper">
              <div className={`primary-menu-wrapper ${isMenuOpen ? 'show' : ''}`}>
                <ul className="primary-nav">
                  {/* Add onClick={closeMenu} to each Link */}
                  <li><Link to="/about-us" onClick={closeMenu}>About</Link></li>
                  <li>
                    <Link to="#" onClick={toggleSubMenu} className={`subMenuLink ${isSubMenuOpen ? 'show' : ''}`}>Services <MdArrowDropDown size={24} /></Link>
                    <ul className={`subMenu ${isSubMenuOpen ? 'show' : ''}`}>
                        <li><Link to="/elevator-modernization" onClick={closeMenu}>Elevator Modernization</Link></li>
                        <li><Link to="/elevator-repairs" onClick={closeMenu}>Elevator Repairs</Link></li>
                        <li><Link to="/elevator-installation" onClick={closeMenu}>Elevator Installation</Link></li>
                        <li><Link to="/elevator-maintenance" onClick={closeMenu}>Elevator Maintenance</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
                  <li><Link to="/testimonials" onClick={closeMenu}>Testimonials</Link></li>
                  <li><Link to="/faqs" onClick={closeMenu}>FAQ's</Link></li>
                  <li className="contactBtn"><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
                </ul>
              </div>
              <div className="hamburgerMenu">
                <div className={`menuBars ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
