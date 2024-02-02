import "../../scss/layouts/mainBody.scss"
import LowerBody from "./LowerBody"
import UpperBody from "./UpperBody"

function MainBody() {
   return (
      <div className="container flex flex-1 justify-center">
         <section
            id="app-body"
            className="text-center bg-white">
            <div className="p-8">
               <p className="uppercase">
                  100k pageviews
               </p>
               <UpperBody />
            </div>
               <LowerBody />
         </section>     
      </div>
   )
}
export default MainBody