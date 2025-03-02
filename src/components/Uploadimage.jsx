import {useState}   from 'react';

const Upload=()=>{
   const [pic , setpic] = useState("");
   
   const pichandler=(e)=>{
    setpic(URL.createObjectURL(e.target.files[0]));
   }
   const copy=()=>{
    navigator.clipboard.writeText(pic);
    document.getElementById('copy').textContent = "copied";     
    document.getElementById('copy').style.backgroundColor = "yellow";     
    document.getElementById('copy').style.color = "black";     
   }
   const qrcodereader=()=>{
    
   }
  
    return(
        <div className="" id="Upload">

        <div className="col-11 col-md-8 col-lg-6" id="littlecontainer">
            <div id="uploadedimage">
         <img   src={pic} alt="uploaded pic"id="theuploadedimage"  />
            </div>
            <div >
                <input type="file"  
               
                onChange={pichandler}  
                accept="image/*" id="uploadimage" />
            </div>
            <div>
                <button id="uploadbutton"
                 onClick={qrcodereader}
               >Get URL</button>
            </div>
            <div className="w-75" id="resultdiv">
                <p id="result">
                   it is your result &nbsp;&nbsp;&nbsp;
                </p>
                  <button id="copy" onClick={copy}>
                    copy
                   </button>
            </div>
            

            
            
        </div>
        </div>
    )}
export default Upload;