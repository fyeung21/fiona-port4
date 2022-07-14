import { useState, useEffect } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import AOS from 'aos';
import "aos/dist/aos.css";

const MainProjects = ({ projectArr }) => {
  const restPath = `https://fiona-yeung.com/wp-portfolio/wp-json/wp/v2/fio-project?acf_format=standard&include=${projectArr}&orderby=include&_embed&v=4`;
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

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <>
      {isLoaded ? (
        <>
          <section className="main-projects-container" data-aos="fade-left">
            {restData.map((item, id) => (
              <ProjectCard
                key={id}
                slug={item.slug}
                thumbnail={item._embedded['wp:featuredmedia'][0].source_url}
                alt={item._embedded['wp:featuredmedia'][0].alt_text}
                title={item.title.rendered}
                excerpt={item.acf.project_excerpt}
                type={item._embedded['wp:term'][0]}
              />
            ))}
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default MainProjects;
