import { useTranslation } from 'react-i18next';
import projectsData from "./ProjectsData.js";
import "./Projects.styles.css"

const ProjectsMobile = () => {
    const { t } = useTranslation();

    return (
        <div className='projectMainMobile'>
            {projectsData.map((project) => (
                <section key={project.id} className='detailsMobile'>
                    <h2>{t(project.title)}</h2>
                    <img
                        src={project.imageFull}
                        alt={project.title}
                        className='imageMobile'
                    />
                    <div>
                        <div className="titleDiv">
                            <p>{t('tags')}: {project.tags.join(", ")}</p>
                            <p>{t('year')}: {project.year}</p>
                        </div>
                        <p>{t(`projectDescriptions.${project.title}`)}</p>
                        <div className='modalButtonsMobile'>
                            <a href={project.githubLink} className='modalLinksMobile' target="_blank" rel="noopener noreferrer">
                                GitHub Link{" "}
                            </a>
                            <a href={project.deployLink} className='modalLinksMobile' target="_blank" rel="noopener noreferrer">
                                {t('deploy')} Link{" "}
                            </a>
                        </div >
                    </div>
                </section>
            ))}
        </div>
    )
}

export default ProjectsMobile;