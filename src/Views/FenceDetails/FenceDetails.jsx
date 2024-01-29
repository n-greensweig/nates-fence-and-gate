import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fenceTypes } from "../../Constants/Constants";


function FenceDetails() {

   const { type } = useParams();

   const fenceType = fenceTypes.find(f => f.route === type); // Find the fence type that matches the route
   const name = fenceType.name; // Get the name of the fence type



   useEffect(() => {
       if (fenceType) {
           document.title = `${fenceType.name} Fence Details`;
       }
   }, [fenceType]);


   return (
       <>
           <h1>{name} Fence Details</h1>
       </>
   )
}


export default FenceDetails;