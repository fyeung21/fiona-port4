import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Skills from '../components/Skills/Skills';
import AOS from 'aos';

const PageAbout = () => {
  const restPath =
    'https://fiona-yeung.com/wp-portfolio/wp-json/wp/v2/pages/9?&_embed&acf_format=standard';
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
            <title>About Me | Fiona's Portfolio Website</title>
          </Helmet>
          <section
            className="page-about-container"
            data-aos="fade-in"
            data-aos-easing="ease-in"
            data-aos-duration="1000">
            <h2>{restData.title.rendered}</h2>
            <article className="flex-container">
              <div className="profile-img-container">
                <img
                  src={restData._embedded['wp:featuredmedia'][0].source_url}
                  alt={restData._embedded['wp:featuredmedia'][0].alt_text}
                />
              </div>
              <div>
                <p>
                  Location: <span className="location">{restData.acf.location}</span>
                </p>
                <p>{restData.acf.bio}</p>
              </div>
            </article>
            <Skills
              frontEnd={restData.acf['front-end']}
              backEnd={restData.acf['back-end']}
              mobile={restData.acf.mobile}
              toolSystems={restData.acf.tools_and_systems}
            />
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default PageAbout;
