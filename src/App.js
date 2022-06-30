import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Work from './pages/work';
import About from './pages/about';
import SingleWork from './pages/singleWork';
import NotFoundPage from './pages/404';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Work />} />
        <Route path='/about' element={<About />} />
        <Route path='/works/:id' element={<SingleWork />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;