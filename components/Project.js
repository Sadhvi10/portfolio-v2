import ProjectCard from "./ProjectCard";

const Project = ({ projects }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 '>
      {projects.map((project) => {
        return <ProjectCard project={project} key={project.id} />;
      })}
    </div>
  );
};

export default Project;
