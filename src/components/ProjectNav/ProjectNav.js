import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import NavCard from './NavCard';
import Placeholder from '../coffee-wireframes.jpg';

const ProjectNav = () => {
  const { slug } = useParams();
  const restPath = `https://fiona-yeung.com/wp-portfolio/wp-json/wp/v2/fio-project?acf_format=standard&slug=${slug}&_embed`;
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
          <h2>more projects</h2>
          <div className="project-nav-container">
            <NavCard thumbnail={Placeholder} alt={'Placeholder'} projectTitle={'Project Title'} />
            <NavCard thumbnail={Placeholder} alt={'Placeholder'} projectTitle={'Project Title'} />
            <NavCard thumbnail={Placeholder} alt={'Placeholder'} projectTitle={'Project Title'} />
            <NavCard thumbnail={Placeholder} alt={'Placeholder'} projectTitle={'Project Title'} />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProjectNav;
