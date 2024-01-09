/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import "./Navbar.styles.css"
import toggler from "../../images/menu.png";
import { Link } from "react-scroll";

const DropdownMenu = ({ toggleLanguage, renderFlagIcon }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbarMobile">
      <div className="buttons">
        <button className="lngButtonMobile" onClick={toggleLanguage}>
          {renderFlagIcon()}
        </button>
        <button onClick={toggleMenu} className="buttonIcon">
          <img src={toggler} alt="toggler" className="menuIcon" />
        </button>
      </div>
      {isMenuOpen && (
        <ul className="navListMobile">
          <li className="navItem">
            <Link to="header" className="navLink" smooth={true} duration={600}>
              {t('home')}
            </Link>
          </li>
          <li className="navItem">
            <Link to="about" className="navLink" smooth={true} duration={600}>
              {t('about')}
            </Link>
          </li>
          <li className="navItem">
            <Link to="projects" className="navLink" smooth={true} duration={600}>
              {t('projects')}
            </Link>
          </li>
          <li className="navItem">
            <Link to="contact" className="navLink" smooth={true} duration={600}>
              {t('contact')}
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
};

export default DropdownMenu;