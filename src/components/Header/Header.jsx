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
                <h1 className="headerH1  text-4xl sm:text-5xl md:text-6xl  lg:text-7xl  ">
                    {t('greeting')}&nbsp;
                    <span className="span text-5xl sm:text-6xl md:text-7xl lg:text-8xl">{t('name')}</span>&nbsp;
                    {t('profession')}
                </h1>
                <div className="headerButtons">
                    <Link to="projects" className="headerLinks md:text-lg" smooth={true} duration={600}>
                        {t('projects')}
                    </Link>
                    <Link to="about" className="headerLinks md:text-lg" smooth={true} duration={600}>
                        {t('about')}
                    </Link>
                </div>
            </section>
        </>
    );
};

export default HeaderComponent;
