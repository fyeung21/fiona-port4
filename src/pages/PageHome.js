import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import MainProjects from '../components/MainProjects/MainProjects';
import AOS from 'aos';

const PageHome = () => {
  const restPath = `https://fiona-yeung.com/wp-portfolio/wp-json/wp/v2/pages/31?&_embed&acf_format=standard`;
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

  var testArray = [];

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
            <title>Home | Fiona's Portfolio Website</title>
          </Helmet>
          <section className="page-home">
          <p
            className="welcome-message"
            data-aos="fade-in"
            data-aos-easing="ease-in"
            data-aos-duration="1000">
            {restData.acf.welcome_message}
          </p>
          {restData.acf.projects.map((item) => {
            let someArr = testArray.push(item.ID);
          })}
          <MainProjects projectArr={testArray} />
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default PageHome;
