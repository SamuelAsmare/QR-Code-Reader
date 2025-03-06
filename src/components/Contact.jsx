
import {useRef,useState} from 'react'

const hi=()=>{
  
 const sami=useRef(0);
const [sam ,setsam]=useState(0);
console.log(sam.current);
  return (
    <div>
      <h1>Hello, {sam}</h1>
      <button onClick={()=>{setsam(sam+1)}}>Change</button>
      <button onClick={()=>{sam.current=sam.current+1}}>Change</button>
      <h1>Hello, {sami.current}</h1>
      

    </div>
    
  )
}
export default hi ;