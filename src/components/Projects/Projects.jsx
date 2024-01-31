
import ProjectsDesktop from "./ProjectsDesktop";
import ProjectsMobile from "./ProjectsMobile";
import useMobileLayout from '../../hooks/useMobileLayout';

const ProjectsComponent = () => {
    const { isMobile } = useMobileLayout();

    return (
        <>
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