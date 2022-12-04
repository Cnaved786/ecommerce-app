import React ,{createContext,useState} from "react";
import skin from "../assests/Alter.jpg";
import harper from "../assests/pexels-suzy-hazelwood-2537930.jpg";
import ray from "../assests/headphone.jpg";
import monaf from "../assests/Monaf.jpg";
import ordenary from "../assests/Ordenary.jpg";
import kit from "../assests/banner.jpg";
import headphone from "../assests/pexels-wallace-chuck-3587478.jpg";
 

export const ProductsContext=createContext();

const ProductsContextProvider=(props)=>{
    const [products]=useState([
        {id:1,name:'misolo', price:200,image:monaf,status:'hot'},
        {id:2,name:'skin', price:200,image:skin,status:'new'},
        {id:3,name:'headphone', price:100,image:ray,status:'hot'},
        {id:4,name:'harper', price:100,image:harper,status:'new'},
        {id:5,name:'ordenary', price:300,image:ordenary,status:'hot'},
        {id:6,name:'kit', price:100,image:kit,status:'new'},
        {id:7,name:'headphone', price:500,image:headphone,status:'new'},
    ]);
    
return(
   
  <ProductsContext.Provider value={{products:[...products]}}>
  {props.children}
  </ProductsContext.Provider>
  
);

}
export default ProductsContextProvider;