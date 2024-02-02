
import { useTranslation } from 'react-i18next';
import image from "../../images/santiago.jpg";
import pdf from "../../pdfs/santiago-ferreira-cv.pdf";
import "./About.styles.css"
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
            <section className='aboutMain gap-20 h-auto lg:h-screen'>
                <section className='content max-w-sm md:max-w-lg'>
                    <h1 className='aboutH1 text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{t('about')}</h1>
                    <p className='p'>{t('aboutDescription')}</p>
                    <a href={pdf} target="_blank" rel="noreferrer" className='a flex items-center gap-x-1 '>
                        {t('downloadCV')} <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-download" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
                    </a>
                    <h2 className='subtitle'>{t('skillsDescription')}:</h2>
                    <section className='slider max-w-sm md:max-w-lg'>

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
                <aside className="w-full md:w-1/3">
                    <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                        <img alt='Imagen de Santiago Ferreira' className="object-cover object-top w-full transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy" src={image} />
                    </div>
                </aside>
            </section>
        </>
    );
};

export default AboutComponent;