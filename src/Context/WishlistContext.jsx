import axios from "axios";
import { createContext } from "react";




export let WishlistContext = createContext ();

export default function WishlistContextProvider (props){

    let headers = {token:localStorage.getItem ("userToken")} 

function addproductWishlist (productId){
   return     axios.post( `https://ecommerce.routemisr.com/api/v1/wishlist` , {productId:productId} , {headers } )
.then((res)=>res)
.catch((err)=>err);
}


function Getloggedwishlist(){
    return  axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers})
    .then((res)=>res)
    .catch((err)=>err);
}

function removeProductwishlist(productId){
  return  axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{headers})
    .then((res)=>res)
    .catch((err)=>err);
}

    return <WishlistContext.Provider value = { { removeProductwishlist ,addproductWishlist ,Getloggedwishlist}}>

        {props.children}
    </WishlistContext.Provider>

}