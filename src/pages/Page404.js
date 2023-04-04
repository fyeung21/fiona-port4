import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import Loader from '../components/Loader/Loader';

const NotFoundPage = () => {
  const restPath = `https://fiona-yeung.com/wp-portfolio/wp-json/wp/v2/pages/132?&_embed&acf_format=standard`;
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
            <title>{restData.title.rendered} | Fiona's Portfolio Website</title>
          </Helmet>
          <section className="page-not-found">
            <h2>{restData.title.rendered}</h2>
            <section dangerouslySetInnerHTML={{ __html: restData.acf.page_404_content }}></section>
            <Link to="/work">{restData.acf.back_home}</Link>
          </section>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default NotFoundPage;
