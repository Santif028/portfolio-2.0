/* eslint-disable react/prop-types */
import { Link } from 'react-scroll';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "./Navbar.styles.css"
const NormalMenu = ({ toggleLanguage, renderFlagIcon }) => {
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');

            if (navbar) {
                if (window.scrollY > 0) {
                    navbar.classList.add('navbar-blurred');
                } else {
                    navbar.classList.remove('navbar-blurred');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <div className="navbar">
            <ul className="navList">
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
                <button className="lngButton" onClick={toggleLanguage}>
                    {renderFlagIcon()}
                </button>
            </ul>
        </div>
    );
};

export default NormalMenu;
