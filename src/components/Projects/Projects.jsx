
import ProjectsDesktop from "./ProjectsDesktop";
import ProjectsMobile from "./ProjectsMobile";
import { Helmet } from 'react-helmet-async';
import useMobileLayout from '../../hooks/useMobileLayout';

const ProjectsComponent = () => {
    const { isMobile } = useMobileLayout();

    return (
        <>
            <Helmet>
                <title>Santiago Ferreira - Proyectos</title>
            </Helmet>
            <section>
                {isMobile ? (
                    <ProjectsMobile />
                ) : (
                    <ProjectsDesktop />
                )}
            </section>
        </>
    );
};

export default ProjectsComponent;