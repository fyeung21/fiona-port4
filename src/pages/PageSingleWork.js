import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BannerImg from '../components/SingleWork/BannerImg';
import Stats from '../components/SingleWork/Stats';
import ProjectContent from '../components/SingleWork/ProjectContent';
import PageHome from './PageHome';

const PageSingleWork = () => {
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

  return (
    <>
      {isLoaded ? (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{restData[0].title.rendered} | Fiona's Portfolio Website</title>
          </Helmet>
          <section className="page-single-work">
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
              roles={restData[0].acf.roles}
              technologies={restData[0].acf.technologies}
            />
            <ProjectContent content={restData[0].acf.project_content} />
            <PageHome />
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default PageSingleWork;
