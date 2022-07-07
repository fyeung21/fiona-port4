import NavCard from './NavCard';
import Placeholder from '../coffee-wireframes.jpg';

const ProjectNav = () => {
  return (
    <>
      <h3>more projects</h3>
      <div className="project-nav-container">
        <NavCard 
          thumbnail={Placeholder}
          alt={"Placeholder"}
          projectTitle={"Project Title"}
          />
        <NavCard 
          thumbnail={Placeholder}
          alt={"Placeholder"}
          projectTitle={"Project Title"}
          />
        <NavCard 
          thumbnail={Placeholder}
          alt={"Placeholder"}
          projectTitle={"Project Title"}
          />
      </div>
    </>
  );
};

export default ProjectNav;
