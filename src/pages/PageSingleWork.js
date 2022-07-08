import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ProjectNav from '../components/ProjectNav/ProjectNav';
import BannerImg from '../components/SingleWork/BannerImg';
import Stats from '../components/SingleWork/Stats';
import Placeholder from '../components/coffee-wireframes.jpg';

const PageSingleWork = () => {
  const testData = ['hello', 'goodbye', 'please', 'thank you']

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
      {isLoaded ? (
        <>
<section className="page-single-work">
            <BannerImg 
              hero={Placeholder}
              alt={"placeholder"}
              />
            {/* <Stats
              title={restData[0].title}
              briefText={restData[0].acf.brief_description}
              liveLink={restData[0].acf.live_demo.url}
              githubLink={restData[0].acf.view_github.url}
              platforms={restData[0].acf.platforms}
              roles={restData[0].acf.my_roles}
              technology={restData[0].acf.technology}
            /> */}
            <Stats
              title={"Project Title"}
              briefText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pretium, augue ac facilisis mattis, dui lorem dictum libero, quis imperdiet lorem dui sit amet lorem. Aliquam erat volutpat."}
              liveLink={"#"}
              githubLink={"#"}
              platforms={testData}
              roles={testData}
              technology={testData}
            />
            <ProjectNav />
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default PageSingleWork;
