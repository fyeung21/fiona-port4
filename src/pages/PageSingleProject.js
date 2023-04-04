import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BannerImg from '../components/SingleProject/BannerImg';
import Stats from '../components/SingleProject/Stats';
import ProjectContent from '../components/SingleProject/ProjectContent';
import PageHome from './PageHome';
import AOS from 'aos';
import Loader from '../components/Loader/Loader';

const PageSingleProject = () => {
  const { slug } = useParams();
  const restPath = `https://fiona-yeung.com/wp-portfolio/wp-json/wp/v2/fio-project?acf_format=standard&slug=${slug}&_embed&t=3`;
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
      duration: 2000,
    });
  }, []);

  return (
    <>
      {isLoaded ? (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{restData[0].title.rendered} | Fiona's Portfolio Website</title>
          </Helmet>
          <section
            className="page-single-project"
            data-aos="fade-up"
            data-aos-easing="ease-in"
            data-aos-duration="1000">
            <BannerImg
              heroSrc={restData[0]._embedded['wp:featuredmedia'][0].source_url}
              alt={restData[0]._embedded['wp:featuredmedia'][0].alt_text}
            />
            <Stats
              title={restData[0].title.rendered}
              brief={restData[0].acf.brief}
              liveLink={restData[0].acf.live_demo.url}
              githubLink={restData[0].acf.view_github.url}
              platforms={restData[0].acf.platforms}
              technologies={restData[0].acf.technologies}
            />
            <ProjectContent content={restData[0].acf.project_content} />
          </section>
          <section
            className="project-navigation"
            data-aos="fade-up"
            data-aos-easing="ease-in"
            data-aos-duration="1000">
            <article className="project-nav-heading-container">
              <h3>{restData[0].acf.more_projects_heading}</h3>
              <p>{restData[0].acf.scroll_help_text}</p>
            </article>
            <PageHome />
          </section>
        </>
      ) : (
        <Loader/>
      )}
    </>
  );
};

export default PageSingleProject;
