import { useState, useEffect } from 'react';
import Skills from '../components/Skills/Skills';

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

  return (
    <>
      {isLoaded ? (
        <section className="page-about-container">
          <h2>{restData.title.rendered}</h2>
          <p>test</p>
          <div className="profile-img-container">
            <img
              src={restData._embedded['wp:featuredmedia'][0].source_url}
              alt={restData._embedded['wp:featuredmedia'][0].alt_text}
            />
          </div>
          <p>Location: <span className='location'>{restData.acf.location}</span></p>
          <p>{restData.acf.bio}</p>
          {console.log(restData.acf['front-end'])}
          <Skills
            frontEnd={restData.acf['front-end']}
            backEnd={restData.acf['back-end']}
            mobile={restData.acf.mobile}
            toolSystems={restData.acf.tools_and_systems}
          />
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default PageAbout;
