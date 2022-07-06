import { useState, useEffect } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

const MainProjects = () => {
  const { id } = useParams();
  const restPath = `https://fionayeung.site/wp-portfolio/wp-json/wp/v2/fio-project/${id}?acf_format=standard`;
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
      }
    };
    fetchData();
  }, [restPath]);

  return (
    <>
      {isLoaded ? (
        <>
          <section className="main-projects-container">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default MainProjects;
