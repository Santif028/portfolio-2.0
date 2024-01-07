
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import usa from "../../images/estados-unidos.png";
import arg from "../../images/argentina.png";
import "./Navbar.styles.css"
import DropdownMenu from "./DropdownMenu";
import NormalMenu from "./NormalMenu";
import useMobileLayout from '../../hooks/useMobileLayout';

const NavbarComponent = () => {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const { isMobile } = useMobileLayout();

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

    return (
        <nav>

            {isMobile ? (
                <DropdownMenu toggleLanguage={toggleLanguage} renderFlagIcon={renderFlagIcon}  />
            ) : (
                <NormalMenu toggleLanguage={toggleLanguage} renderFlagIcon={renderFlagIcon} />
            )}
        </nav>
    );
};

export default NavbarComponent;