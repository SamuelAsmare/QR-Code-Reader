import {Link} from "react-router-dom";
export default function Home() {
  return (
    <div id="home">    <div id="homecontainer" className="col-11 col-md-8 col-lg-6">
      {/* First container */}
                    <div>
                      <h1>Fast QR code Scanner</h1>
                    </div>
      {/* Second container */}
                     <div className="p-3" >
                        <img src="QR.webp" id="image" style={{
                          borderRadius:"20px"
                        }}/>
                     </div>
         {/* Third container */}
              <div id="choices">
                     {/* Upload */}
                      <div>
                        <button id="upload" className="m-5 sm-2 m-lg-5 m-md-4 ">
                        <Link to="/Upload" className="text-dark text-decoration-none"  >Upload</Link>   
                        </button>
                      </div>
                      {/* Take A picture */}
                      <div>
                        <button id="takepic" className="sm-2 m-lg-5 m-md-4" >
                        <Link to="/Takepic"  className="text-dark text-decoration-none" >Take a picture</Link>
                        </button>
                      </div>
                
              </div>

    </div>
    </div>

  );
}