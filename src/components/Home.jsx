import {Link} from "react-router-dom";
export default function Home() {
  return (
    <div id="home">    <div id="homecontainer" className="col-11 col-md-8 col-lg-6">
      {/* First container */}
                    <div>
                      <h3
                      style={{
                        fontWeight: "bold"
                      }}>Fast QR code Scanner</h3>
                    </div>
      {/* Second container */}
                     <div className="p-3" >
                        <img src="QR.webp" id="image" style={{
                          borderRadius:"20px",
                          width: "200px",
                          height: "200px",
                          objectFit: "cover"
 
                        }}/>
                     </div>
         {/* Third container */}
              <div id="choices">
                     {/* Upload */}
                      <div>
                        <button id="upload" className="m-3  ">
                        <Link to="/Upload" className="text-dark text-decoration-none"  >Upload</Link>   
                        </button>
                      </div>
                      {/* Take A picture */}
                      <div>
                        <button id="takepic" className="m-3 " >
                        <Link to="/Takepic"  className="text-dark text-decoration-none" >Take a picture</Link>
                        </button>
                      </div>
                
              </div>

    </div>
    </div>

  );
}