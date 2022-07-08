import { useState, useEffect } from 'react';

const Footer = () => {
  const restPath = `https://fiona-yeung.com/wp-portfolio/wp-json/wp/v2/pages?acf_format=standard&id=31`;
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
      <section className="footer-section">
        <cite>&copy; {restData[0].acf.copyright_year} Fiona Yeung</cite>
        <div>
          <p>{restData[0].acf.footer_message}</p>
          <ul>
            <li>
              <a href={`mailto:${restData[0].acf.email_link}`}>email</a>
            </li>
            <li>
              <a href={restData[0].acf.linkedin_link.url}>{restData[0].acf.linkedin_link.title}</a>
            </li>
            <li>
              <a href={restData[0].acf.github_link.url}>{restData[0].acf.github_link.title}</a>
            </li>
          </ul>
        </div>
      </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Footer;
