/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import "./Navbar.styles.css"
import toggler from "../../images/menu.png";

const DropdownMenu = ({ toggleLanguage, renderFlagIcon }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbarMobile">
      <div className="buttons">
        <button className="lngButton" onClick={toggleLanguage}>
          {renderFlagIcon()}
        </button>
        <button onClick={toggleMenu} className="buttonIcon">
          <img src={toggler} alt="toggler" className="menuIcon"/>
        </button>
      </div>
      {isMenuOpen && (
        <ul className="navListMobile">
          <li className="navItem">
            <a href="/" className="navLink">
              {t('home')}
            </a>
          </li>
          <li className="navItem">
            <a href="/about" className="navLink">
              {t('about')}
            </a>
          </li>
          <li className="navItem">
            <a href="/projects" className="navLink">
              {t('projects')}
            </a>
          </li>
          <li className="navItem">
            <a href="/contact" className="navLink">
              {t('contact')}
            </a>
          </li>
        </ul>
      )}
    </div>
  )
};

export default DropdownMenu;