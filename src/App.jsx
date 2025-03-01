import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// bootstrap linked
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}