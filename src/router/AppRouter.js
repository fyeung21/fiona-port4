import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageAbout from '../pages/PageAbout';
import PageHome from '../pages/PageHome';
import PageSingleProject from '../pages/PageSingleProject';
import NotFoundPage from '../pages/Page404';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="wrapper">
        <main>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/projects/:slug" element={<PageSingleProject />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
