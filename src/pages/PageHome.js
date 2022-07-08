import { useState, useEffect } from 'react';
import MainProjects from '../components/MainProjects/MainProjects';

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

  return (
    <>
      {isLoaded ? (
        <>
          {restData.acf.projects.map((item) => {
            let someArr = testArray.push(item.ID);
          })}
          <MainProjects projectArr={testArray} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default PageHome;
