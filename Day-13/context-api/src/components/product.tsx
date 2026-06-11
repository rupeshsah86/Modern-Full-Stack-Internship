//create the cart context 
import { createContext, useState } from "react";


// create the cart context
export const CartContext = createContext<any>(null);

//create the cartContextProvidor - CartProvidor 

export const CartProvidor =({children}:any)=>{
    const[cart,setCart]=useState([]);
    return(
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    )
}
//wripe the entire app componenet inside cartProvider


