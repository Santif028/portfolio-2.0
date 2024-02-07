import { useTranslation } from 'react-i18next';
import projectsData from './ProjectsData.js';
import './Projects.styles.css'

const ProjectsComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-wrap justify-center gap-y-16">
            <h1 className='aboutH1 text-xl sm:text-2xl md:text-3xl lg:text-4xl'>{t('projects')}</h1>
            {projectsData.map((project) => (
                <article key={project.id} className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
                    <div className="w-full md:w-1/2">
                        <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                            <img alt={t(project.title)} className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy" src={project.imageFull} />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 md:max-w-lg">
                        <h3 className="text-2xl p-0 m-0 font-bold text-gray-800 dark:text-gray-100">
                            {t(project.title)}
                        </h3>
                        <div className="flex flex-wrap mt-2">
                            <ul className="flex flex-row mb-2 p-0 gap-x-2">
                                {project.tags.map((tag) => (
                                    <li key={tag} className='list-none'>
                                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">{tag}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-2 text-gray-700 dark:text-gray-400 text-pretty">{t(`projectDescriptions.${project.title}`)}</div>
                            <footer className="flex w-full items-end justify-evenly mt-4 gap-x-4">
                                {project.githubLink && (
                                    <a href={project.githubLink} className='a flex items-center gap-x-1' target="_blank" rel="noopener noreferrer">
                                        {t('code')} <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rocket" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                                    </a>
                                )}
                                {project.deployLink && (
                                    <a href={project.deployLink} className='a flex items-center gap-x-1' target="_blank" rel="noopener noreferrer">
                                        {t('deploy')} <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                                    </a>
                                )}
                            </footer>
                        </div>
                    </div>
                </article >
            ))
            }
        </div >
    )
};

export default ProjectsComponent;