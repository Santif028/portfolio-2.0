
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-scroll';
import usa from '../../images/estados-unidos.png';
import arg from '../../images/argentina.png';
import './Navbar.styles.css'

const NavbarComponent = () => {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
        setCurrentLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
    };

    const renderFlagIcon = () => {
        if (currentLanguage === 'es') {
            return <img src={arg} alt="USA Flag" className='lngFlag' />;
        } else {
            return <img src={usa} alt="Argentina Flag" className='lngFlag' />;
        }
    };

    const { t } = useTranslation();

    
    return (

        <div className="navbar">
            <ul className="navList rounded-full">
                <li className="navItem">
                    <Link to="header" className="navLink" smooth={true} duration={600}>
                        {t('home')}
                    </Link>
                </li>
                <li className="navItem">
                    <Link to="projects" className="navLink" smooth={true} duration={600}>
                        {t('projects')}
                    </Link>
                </li>
                <li className="navItem">
                    <Link to="about" className="navLink" smooth={true} duration={600}>
                        {t('about')}
                    </Link>
                </li>
                <li className="navItem">
                    <Link to="contact" className="navLink" smooth={true} duration={600}>
                        {t('contact')}
                    </Link>
                </li>
                <button className="lngButton" onClick={toggleLanguage}>
                    {renderFlagIcon()}
                </button>
            </ul>
        </div>
    );
};

export default NavbarComponent;