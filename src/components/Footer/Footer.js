import { useState, useEffect } from 'react';
import Email from '../Icons/Email';
import Github from '../Icons/Github';
import Linkedin from '../Icons/Linkedin';
import Loader from '../Loader/Loader';

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
        <footer>
          <div className="footer-container">
            <cite>&copy; {restData[2].acf.copyright_year} Fiona Yeung</cite>
            <div>
              <ul>
                <li>
                  <a
                    href={`mailto:${restData[2].acf.email_link}`}
                    title="Link to Email"
                    rel="noreferrer noopener">
                    <Email/>
                  </a>
                </li>
                <li>
                  <a
                    href={restData[2].acf.linkedin_link.url}
                    title={"Link to " + restData[2].acf.linkedin_link.title}
                    rel="noreferrer noopener">
                    <Linkedin/>
                  </a>
                </li>
                <li>
                  <a
                    href={restData[2].acf.github_link.url}
                    title={"Link to " + restData[2].acf.github_link.title}
                    rel="noreferrer noopener">
                      <Github/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      ) : (
        <Loader/>
      )}
    </>
  );
};

export default Footer;
