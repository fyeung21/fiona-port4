import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Work from '../pages/work';
import About from '../pages/about';
import SingleWork from '../pages/singleWork';
import NotFoundPage from '../pages/404';
import Header from '../components/Header/Header';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Work />} />
        <Route path='/about' element={<About />} />
        <Route path='/works/:id' element={<SingleWork />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;