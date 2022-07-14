
const ProjectType = ({ type }) => {
  return (
    <div className="project-type-container">
      <ul>
        {type.map((item, id) => (
          <li key={id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectType;