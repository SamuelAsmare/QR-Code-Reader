import {useState}   from 'react';
import jsQR from "jsqr";
const Upload=()=>{
   const [pic , setpic] = useState("");
   const [qrResult, setQrResult] = useState("");

   const pichandler=(e)=>{
    setpic(URL.createObjectURL(e.target.files[0]));
   };
   const copy=()=>{
    navigator.clipboard.writeText(qrResult);
    document.getElementById('copy').textContent = "copied";     
    document.getElementById('copy').style.backgroundColor = "yellow";     
    document.getElementById('copy').style.color = "black";     
   };
  

    const readQRCode = () => {
       
        
        
        const img = document.getElementById("theuploadedimage"); 
      
        
        if (!img){
            setQrResult("No image found!");
                     return;}

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
  img.onload = () => {
    
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const qrCode = jsQR(imageData.data, imageData.width, imageData.height);

    if (qrCode) {
        setQrResult(qrCode.data);
    } else {
        setQrResult("No QR code found.");
    }
};
    };
  
    return(
        <div className="" id="Upload">

        <div className="col-11 col-md-8 col-lg-6" id="littlecontainer">
            <div id="picdiv">
         <img   src={pic} alt="uploaded picure"id="theuploadedimage"  />
            </div>
            <div >
                <input type="file"  
               
                onChange={pichandler}  
                accept="image/*" id="uploadimage" />
            </div>
            <div>
                <button id="uploadbutton"
                 onClick={readQRCode}
               >Get URL</button>
            </div>
            <div className="w-75" id="resultdiv">
                <p id="result">
                   {qrResult}
                </p>
                  <button id="copy" onClick={copy}>
                    copy
                   </button>
            </div>
            

            
            
        </div>
        </div>
    );}
export default Upload;