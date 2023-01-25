import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page Not Found | Fiona's Portfolio Website</title>
      </Helmet>
      <section className="page-not-found">
        <h2>This is the 404 page</h2>
        <p>Oops! You have reached the 404 page.</p>
        <Link to="/work">Back to Home</Link>
      </section>
    </>
  );
};

export default NotFoundPage;
