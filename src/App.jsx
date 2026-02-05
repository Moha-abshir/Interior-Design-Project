import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Home/HomePage';
import About from './About/About';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';
import NotFound from './NotFoundPage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} /> 
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )      
}
export default App
