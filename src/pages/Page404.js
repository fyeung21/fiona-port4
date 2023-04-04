import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Loader from '../components/Loader/Loader';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page Not Found | Fiona's Portfolio Website</title>
      </Helmet>
      <section className="page-not-found">
        <h2>Page Not Found</h2>
        <p>Oops! You have reached the 404 page.</p>
        <Link to="/work">Back to Home</Link>
      </section>
        <Loader/>
    </>
  );
};

export default NotFoundPage;
