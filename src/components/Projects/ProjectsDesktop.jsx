import { useState } from "react";
import { useTranslation } from 'react-i18next';
import projectsData from "./ProjectsData.js";
import "./Projects.styles.css"

const ProjectsDesktop = () => {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    return (
        <div className="projectMain">
            <section className="projectList">
                {projectsData.map((project) => (

                    <div
                        className="card"
                        key={project.id}

                        onClick={() => handleProjectClick(project)}
                    >
                        <img
                            src={project.imageFull}
                            alt={project.title}
                            className="projectImage"
                        />
                        <div className="overlay">
                            <p className="text">{t(project.year)}</p>
                            <h1 className="text">{t(project.title)}</h1>
                        </div>
                    </div>
                ))
                }
            </section >
            {selectedProject && (
                <div className="modal">
                    <div className="modalContent">
                        <img
                            src={selectedProject.imageFull}
                            alt={selectedProject.title}
                            className="projectImageFull"
                        />
                        <section className="textSection">
                            <div className="titleDiv">
                                <h2>{t(selectedProject.title)}</h2>
                                <p>{t('year')}: {selectedProject.year}</p>
                            </div>
                            <p>{t('tags')}: {selectedProject.tags.join(", ")}</p>
                            <p className="projectDescription">{t(`projectDescriptions.${selectedProject.title}`)}</p>
                            <section className="modalButtons">
                                <a href={selectedProject.deployLink} target="_blank" className="modalLinks" rel="noreferrer">{t('deploy')}</a>
                                <a href={selectedProject.githubLink} target="_blank" className="modalLinks" rel="noreferrer">{t('code')}</a>
                                <button className="closeModal" onClick={() => setSelectedProject(null)}>✖</button>
                            </section>
                        </section>
                    </div>
                </div>
            )}
        </div >
    )
}

export default ProjectsDesktop