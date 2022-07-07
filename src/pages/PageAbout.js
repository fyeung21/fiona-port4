import { useState, useEffect } from 'react';
import Skills from '../components/Skills/Skills';

const PageAbout = () => {
  const dummyData = ['hello', 'goodbye', 'please', 'thank you'];

  const restPath = 'https://fiona-yeung.com/wp-portfolio/wp-json/wp/v2/pages/9';
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
          <h2>{restData.title.rendered}</h2>
          <div className="profile-img-container">
            <img src={''} alt="profile img" />
          </div>
          <p>Location: {restData.acf.location}</p>
          <p>{restData.acf.bio}</p>
          {/* <Skills 
            frontEnd={restData.acf['front-end']}
            backEnd={restData.acf['back-end']}
            mobile={restData.acf.mobile}
            toolSystems={restData.acf.tools_and_systems}
            /> */}
            <Skills 
            frontEnd={dummyData}
            backEnd={dummyData}
            mobile={''}
            toolSystems={dummyData}
            />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default PageAbout;
