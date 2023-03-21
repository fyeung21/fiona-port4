import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageAbout from '../pages/PageAbout';
import PageHome from '../pages/PageHome';
import PageSingleProject from '../pages/PageSingleProject';
import NotFoundPage from '../pages/Page404';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ParticleEffect from '../components/ParticleEffect/ParticleEffect';
import ScrollToTop from '../components/Utils/ScrollToTop';
import NavBar from '../components/NavBar.js/NavBar';
import PageContact from '../pages/PageContact';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <NavBar/>
      <div className="wrapper">
        <main>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/contact" element={<PageContact />} />
            <Route path="/projects/:slug" element={<PageSingleProject />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <ParticleEffect />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
