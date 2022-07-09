import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageAbout from '../pages/PageAbout';
import PageHome from '../pages/PageHome';
import PageSingleWork from '../pages/PageSingleWork';
import NotFoundPage from '../pages/Page404';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AppRouter = () => {
  return (
    <BrowserRouter basename='/'>
      <Header />
      <div className="wrapper">
        <main>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/works/:slug" element={<PageSingleWork />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
