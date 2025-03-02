import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
   <nav id="navbar">
     <ul className=" col-12 col-md-8 col-lg-4" id="navbar" >
       <li><Link to="/"  id="List" className="fs-7 fs-md-4 fs-lg-3" >Home</Link></li>
        <li><Link to="/Upload"  id="List" className="fs-7 fs-md-4 fs-lg-3" >Upload</Link></li>
       <li ><Link to="/Takepic" id="List" className="fs-7 fs-md-4 fs-lg-3"  >Take Picture</Link></li>
       <li ><Link to="/Contact" id="List"className="fs-7 fs-md-4 fs-lg-3" >Contact</Link></li>
     </ul>
   </nav>
  );
}