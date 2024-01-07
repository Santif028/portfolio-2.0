import { useTranslation } from 'react-i18next';
import "./Header.styles.css"
import { Helmet } from "react-helmet-async";
import { Link } from 'react-scroll';

const HeaderComponent = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>Santiago Ferreira - Inicio</title>
            </Helmet>
            <section className="headerMain h-auto md:h-screen">
                <h1 className="headerH1">
                    {t('greeting')}&nbsp;
                    <span className="span">{t('name')}</span>&nbsp;
                    {t('profession')}
                </h1>
                <div className="headerButtons">
                    <Link to="projects" className="headerLinks" smooth={true} duration={600}>
                        {t('projects')}
                    </Link>
                    <Link to="about" className="headerLinks" smooth={true} duration={600}>
                        {t('about')}
                    </Link>
                </div>
            </section>
        </>
    );
};

export default HeaderComponent;
