import axios from "axios";
import { createContext, useEffect, useState } from "react";


export let CartContext = createContext ();

export default  function   CartContextProvider(props){

 //here i add variable can use it any time when i need token ma3loma n3melo here not in function addProductToCard
    let headers =  { token:localStorage.getItem("userToken")};
    const [cardId, setcardId] = useState(0)
    const [numberItem, setnumberItem] = useState(0)

    function addProductToCard(productId){

///////headers kan m7tot 3`lat /////////

    return    axios
    .post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId : productId }, { headers })
         .then((res)=>res)
         .catch((err)=> err);



    }

    function getLoggedUserCart(){
       return  axios
        .get( `https://ecommerce.routemisr.com/api/v1/cart`,{ headers})
        .then((res)=> {
            // console.log(res.data.data._id);
            setnumberItem(res.data.numOfCartItems)
            setcardId( res.data.data._id)
            return res
        })
        .catch((err)=>err);
    }

    function updateCartProductQuanti(productId,newCount ){
        return  axios
         .put( `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count:newCount},{headers})
         .then((res)=> res)
         .catch((err)=>err);
     }

 function deletCartItem(productId){
    return    axios
    .delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{headers})
    .then((res)=>res)
    .catch((err)=>err)
 }

 function checkout(cardId , url , formData){
    return    axios
    .post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cardId}?url=${url}`, { shippingAddress : formData},{headers})
    .then( (res) => res)
    
    .catch( (err) => err);
    
 }


useEffect(()=>{
    getLoggedUserCart()
},[])



    return <>   
    <CartContext.Provider value= {{ addProductToCard , getLoggedUserCart ,updateCartProductQuanti , deletCartItem , checkout,setnumberItem,numberItem , cardId}}>
    { props.children}
    </CartContext.Provider>
    </>
}   