import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// bootstrap linked
// 
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Takepic from "./components/Takepic";
import Upload from "./components/Uploadimage";
import Contact from "./components/Contact";

const App=()=> {
  return (
    <div id="largest">   
      <Router>
      <div  >
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />}  />
          <Route path="/Takepic" element={<Takepic />} />
          <Route path="/Upload" element={<Upload/>} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </div>
 
  );
}
export default  App;