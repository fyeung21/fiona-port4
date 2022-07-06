import { useState, useEffect } from 'react';
import Skills from '../components/Skills/Skills';

const PageAbout = () => {
  const restPath = 'https://fionayeung.site/wp-portfolio/wp-json/wp/v2/pages/9';
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
          <Skills />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default PageAbout;
