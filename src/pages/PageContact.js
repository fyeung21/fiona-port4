import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const PageContact = () => {
  const restPath =
    'https://fiona-yeung.com/wp-portfolio/wp-json/wp/v2/pages/110?&_embed&acf_format=standard';
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
            <title>Contact Me | Fiona's Portfolio Website</title>
          </Helmet>
          <section className="page-contact">
            <h2>{restData.title.rendered}</h2>
            <article className="contact-container">
              <p>{restData.acf.contact_message}</p>
            </article>
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default PageContact;
