
import { useTranslation } from 'react-i18next';
import image from '../../images/santiago.jpg';
import pdf from '../../pdfs/santiago-ferreira-cv.pdf';
import './About.styles.css'

const AboutComponent = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className='aboutMain gap-20 h-auto lg:h-screen'>
                <section className='content max-w-sm md:max-w-lg space-y-8'>
                    <h1 className='aboutH1 text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{t('about')}</h1>
                    <div className='p'>
                        <p className='text-pretty'>{t('aboutDescription.first')}</p>
                        <p className='text-pretty'>{t('aboutDescription.second')}</p>
                        <p className='text-pretty'>{t('aboutDescription.third')}</p>
                    </div>
                    <a href={pdf} target="_blank" rel="noreferrer" className='a flex items-center gap-x-1 '>
                        {t('downloadCV')} <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-download" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
                    </a>
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