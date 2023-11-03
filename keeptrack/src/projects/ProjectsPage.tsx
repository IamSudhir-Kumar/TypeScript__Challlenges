import { MOCK_PROJECTS } from "./MockupProjects";
import { Project } from "./Project";
import ProjectList from "./ProjectList";

function ProjectsPage() {
  return (
    <>
      <h1>ProjectsPage</h1>
      <ProjectList projects={MOCK_PROJECTS} />
    </>
  );
}

export default ProjectsPage;
