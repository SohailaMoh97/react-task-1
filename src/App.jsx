import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />         
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
