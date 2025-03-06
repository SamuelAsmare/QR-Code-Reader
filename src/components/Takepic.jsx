// take picture page
import{useState} from 'react'
import jsQR from 'jsqr';
import { Html5QrcodeScanner } from "html5-qrcode";

const Takepic=()=>{
     



  const [scanResult, setScanResult] = useState(null);
  const [scanner, setScanner] = useState(null);

  const startScanner = () => {
      const newScanner = new Html5QrcodeScanner(
        "camera",
        {
          fps: 10,
          qrbox: { width: 100, height: 100 },
        },
        false
      );

      newScanner.render(
        (decodedText) => {
          setScanResult(decodedText);
         
          newScanner.clear();
          setScanner(null); // Stop scanner after successful scan
        },
        (errorMessage) => {
          console.warn("QR Scan Error:", errorMessage);
        }
      );

      setScanner(newScanner);
    
  };

   const copy=()=>{
     navigator.clipboard.writeText(scanResult);
     alert("Link copied to clipboard");
   }
    return(
        <div id="takepicfullpage">
            <div id="littletakepicdiv" className="col-11 col-md-8 col-lg-6">
                        {/* Camera div */}
                         
                        <div id="camera">
                            <video id="hi" width="100%" height="100%"  ></video>
                           
                        </div>
                        
                        {/* Take picture button */}
                        <div className="w-100" id="buttoncontainer">
                            <button id="takepicbutton" className="m-4"
                             onClick={startScanner}>Start Camera</button>
                        
                        </div>
                        {/* result div for the link */}
                        <div id="copyandresult">
                            <h6 id="cameraresult">
                                {scanResult}
                            </h6>
                            <button id="co" className="p-0"  onClick={copy}>
                               
                                <img src="copyicon.png"  id="icon"/>
                            </button>

                        </div>

                        {/* Result qr code button */}
                        

            
                    
            </div>
        </div>
    )
}

export default Takepic;

















/*
//   const [videostream, setvideostream] = useState(null);
      const [samvideo,  setsamvideo] = useState(null);
      const [qrresult,setqrresult] = useState(null);
      const  startvideostream=async ()=>{
            try{
               const stream = await navigator.mediaDevices.getUserMedia({video: true});
                setsamvideo(stream);
                const videoelement = document.getElementById('hi');
                    setsamvideo(videoelement); 
                    if(videoelement) {
                    videoelement.srcObject = stream;
                    videoelement.play();}
            }
            catch (error){
            setqrresult("Error is occured when the  camera access denied");
            console.log("error occurred when accessing the camera");
            }
          


const video= document.getElementById("hi"); 
           if (!video){
              setqrresult("No image found!");
                     return;}

        
       
 setTimeout(() => {
    
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = video.naturalWidth;
    canvas.height = video.naturalHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const qrCode = jsQR(imageData.data, imageData.width, imageData.height);

    if (qrCode) {
        setqrresult(qrCode.data);
    } else {
        setqrresult("No QR code found.");
    }
},50);
      }

 
 */