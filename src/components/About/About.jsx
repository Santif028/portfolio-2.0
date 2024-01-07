
import { useTranslation } from 'react-i18next';
import image from "../../images/santiago.jpg";
import pdf from "../../pdfs/santiago-ferreira-cv.pdf";
import "./About.styles.css"
import { Helmet } from 'react-helmet-async';
import htmlIcon from "../../svgs/html5.svg";
import cssIcon from "../../svgs/css3.svg";
import jsIcon from "../../svgs/javascript.svg";
import gitIcon from "../../svgs/git.svg";
import githubIcon from "../../svgs/github.svg";
import nodeIcon from "../../svgs/nodejs.svg";
import reactIcon from "../../svgs/react.svg";
import expressIcon from "../../svgs/express.svg";
import mongoIcon from "../../svgs/mongodb.svg";
import nextIcon from "../../svgs/nextjs.svg";
import tsIcon from "../../svgs/typescript.svg"

const AboutComponent = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>Santiago Ferreira - Acerca de Mí</title>
            </Helmet>
            <section className='aboutMain h-auto lg:h-screen'>
                <section className='content'>
                    <h1 className='aboutH1'>{t('about')}</h1>
                    <div className='divider'></div>
                    <p className='p'>{t('aboutDescription')}</p>
                    <div className='divider'></div>
                    <a href={pdf} target="_blank" rel="noreferrer" className='a'>
                        {t('downloadCV')}
                    </a>
                    <h2 className='subtitle'>{t('skillsDescription')}:</h2>
                    <section className='slider'>


                        <div className='sliderTrack'>
                            <div className='slide' >
                                <a href="https://www.w3.org/html/" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={htmlIcon} alt="HTML5" className="skillIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={cssIcon} alt="HTML5" className="skillIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={jsIcon} alt="HTML5" className="skillIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={gitIcon} alt="HTML5" className="skillIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={githubIcon} alt="HTML5" className="darkIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={nodeIcon} alt="HTML5" className="skillIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://es.react.dev" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={reactIcon} alt="HTML5" className="skillIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://expressjs.com/es/" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={expressIcon} alt="HTML5" className="darkIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://www.mongodb.com/es" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={mongoIcon} alt="HTML5" className="skillIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={nextIcon} alt="HTML5" className="darkIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={tsIcon} alt="HTML5" className="skillIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://www.w3.org/html/" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={htmlIcon} alt="HTML5" className="skillIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={cssIcon} alt="HTML5" className="skillIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={jsIcon} alt="HTML5" className="skillIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={gitIcon} alt="HTML5" className="skillIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={githubIcon} alt="HTML5" className="darkIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={nodeIcon} alt="HTML5" className="skillIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://es.react.dev" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={reactIcon} alt="HTML5" className="skillIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://expressjs.com/es/" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={expressIcon} alt="HTML5" className="darkIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://www.mongodb.com/es" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={mongoIcon} alt="HTML5" className="skillIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={nextIcon} alt="HTML5" className="darkIcon" />
                                </a>
                            </div>
                            <div className='slide' >
                                <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className='anchor'>
                                    <img src={tsIcon} alt="HTML5" className="skillIcon" />
                                </a>
                            </div>
                        </div>
                    </section>
                </section>
                <aside className='imageSection'>
                    <img src={image} alt="Mi Foto" className='image' />
                </aside>
            </section>
        </>
    );
};

export default AboutComponent;