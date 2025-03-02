// take picture page
const Takepic=()=>{
    return(
        <div id="takepicfullpage">
            <div id="littletakepicdiv" className="col-11 col-md-8 col-lg-6">
                        {/* Camera div */}
                        <div id="camera">
                            
                        </div>   
                        
                        {/* Take picture button */}
                        <div>
                            <button id="takepicbutton" >Take a picture</button>
                        </div>
                        {/* result div for the link */}
                        <div id="copyandresult">
                            <h3 id="cameraresult">
              
                            </h3>
                            <button id="co" className="p-0">
                                <img src="copyicon.png"  id="icon"/>
                            </button>

                        </div>

                        {/* Result qr code button */}
                        <div>
                            <button id="resultqrcodebutton" >Show QR Code</button>
                        </div>
            
                    
            </div>
        </div>
    )
}
export default Takepic;