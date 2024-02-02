import { useState } from "react"
import "../../scss/components/slider.scss"

function Slider() {
   const [amount, setAMount] = useState(16)
   const [rangeWidth, setRangeWidth] = useState(50)

   const amountHandler = ( e ) => {
      setAMount( 8 + (e * 4) )
      setRangeWidth( 25 * e )
   }
   return (
      <>
         <div className="container">
            <input
               min={0}
               max={4}
               step={1}
               type="range" 
               id="paid-range"
               className="mt-5 w-full"
               onChange={(e) => amountHandler(e.target.value)}
            />
            <div className="progess-bar-container">
               <div className="progess-bar"></div>
               <div 
                  className="progess-bar-active"
                  style={{width:`${rangeWidth}%`}}
               >               
               </div>
            </div>
         </div>
         <div className="flex mt-5 gap-x-2 justify-center items-center">
            <p 
               id="amount"
            >
             {`$${amount}.00`}  
            </p>
            <p>/ month</p>
         </div>
      </>
   )
}
export default Slider