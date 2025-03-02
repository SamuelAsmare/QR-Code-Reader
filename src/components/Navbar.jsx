import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
   <nav id="navbar">
     <ul className=" col-12 col-md-8 col-lg-4" id="navbar" >
       <li><Link to="/"  id="List"  >Home</Link></li>
        <li><Link to="/Upload"  id="List"  >Upload</Link></li>
       <li ><Link to="/Takepic" id="List"  >Take Picture</Link></li>
       <li ><Link to="/Contact" id="List">Contact</Link></li>
     </ul>
   </nav>
  );
}