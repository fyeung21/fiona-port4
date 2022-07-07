import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard';
import Placeholder from '../coffee-wireframes.jpg';

const MainProjects = () => {
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
      {/* {isLoaded ? ( */}
        <>
          <section className="main-projects-container">
            <ProjectCard 
              thumbnail={Placeholder}
              alt={'placeholder'}
              title={'Project Title'}
              excerpt={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium, augue ac facilisis mattis, dui lorem dictum libero, quis imperdiet lorem dui sit amet lorem. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In rutrum orci eros, at tempor urna accumsan imperdiet.'}
              type={'wordpress'}
              />
            <ProjectCard 
              thumbnail={Placeholder}
              alt={'placeholder'}
              title={'Project Title'}
              excerpt={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium, augue ac facilisis mattis, dui lorem dictum libero, quis imperdiet lorem dui sit amet lorem. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In rutrum orci eros, at tempor urna accumsan imperdiet.'}
              type={'wordpress'}
              />
              <ProjectCard 
              thumbnail={Placeholder}
              alt={'placeholder'}
              title={'Project Title'}
              excerpt={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium, augue ac facilisis mattis, dui lorem dictum libero, quis imperdiet lorem dui sit amet lorem. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In rutrum orci eros, at tempor urna accumsan imperdiet.'}
              type={'wordpress'}
              />
              <ProjectCard 
              thumbnail={Placeholder}
              alt={'placeholder'}
              title={'Project Title'}
              excerpt={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium, augue ac facilisis mattis, dui lorem dictum libero, quis imperdiet lorem dui sit amet lorem. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In rutrum orci eros, at tempor urna accumsan imperdiet.'}
              type={'wordpress'}
              />
              <ProjectCard 
              thumbnail={Placeholder}
              alt={'placeholder'}
              title={'Project Title'}
              excerpt={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium, augue ac facilisis mattis, dui lorem dictum libero, quis imperdiet lorem dui sit amet lorem. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In rutrum orci eros, at tempor urna accumsan imperdiet.'}
              type={'wordpress'}
              />
              <ProjectCard 
              thumbnail={Placeholder}
              alt={'placeholder'}
              title={'Project Title'}
              excerpt={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium, augue ac facilisis mattis, dui lorem dictum libero, quis imperdiet lorem dui sit amet lorem. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In rutrum orci eros, at tempor urna accumsan imperdiet.'}
              type={'wordpress'}
              />
          </section>
        </>
      {/* ) : ( */}
        <p>Loading...</p>
      {/* )} */}
    </>
  );
};

export default MainProjects;
