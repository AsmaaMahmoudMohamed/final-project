import React, { useContext, useEffect, useState } from 'react';
import style from "./RecentProducts.module.css";
import  axios  from 'axios';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useProducts from '../../Hooks/useProducts';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
import { WishlistContext } from '../../Context/WishlistContext';







export default function RecentProducts() {

  let {data , isError , error ,isLoading}= useProducts();
  let {addproductWishlist} = useContext (WishlistContext);



  let {addProductToCard,setnumberItem,numberItem } = useContext(CartContext);
  const [loding, setloding] = useState(false);
  const [currentId, setcurrentId] = useState(0);
///////////////////////////////////////////////////////////////////////////
 async function addWishlist(id){
   let response =  await addproductWishlist(id)
console.log(response.data);
if(response.data.status == "success"){
 toast.success(response.data.message,{icon:"❤️"})
}
else{
  toast.error(response.data.message)
  };
};
////////////////////////////////////////////
   async function addToCart(id){
    setcurrentId(id);
    setloding(true);
   let response = await addProductToCard(id);
   console.log(response);
   if(response.data.status=="success"){
    setnumberItem(numberItem + 1)
    toast.success ( response.data.message);
    setloding(false);

   }
   else{
    toast.error ( response.data.message);
    setloding(false);
   }
  }

 

  if(isError){
    return <h3>{error}</h3>
  }
  if(isLoading){
    return  <div className="spinner">
  <div className="bounce1"></div>
  <div className="bounce2"></div>
  <div className="bounce3"></div>
</div>
  }



  return <>
    <div className="row">
      {/* // [] instead ofproducts // */}
    {  
     data?.data.data.map((product)=>  <div key={product.id }  className='w-1/6'>

 

   <div   className='product p-3 '>
   <Link to={`/productdetails/${product.id } /${product.category.name}`}> 

   

      <img src={ product.imageCover} className='w-full' alt="" />
      <h3 className='text-emerald-600 ' >  {product.category.name}  </h3>
      <h3 className='font-semibold mb-3 '>{product.title.split(" ").slice(0,2).join(" ")}</h3>
      <div className='flex justify-between'>
        <span>{product.price} EGP</span>
        <span>  <i className='fas fa-star text-yellow-400'></i> {product.ratingsAverage}</span>
      </div>
      </Link>
      
      
    <div className="flex justify-between">   
      
    <button   onClick={()=>addToCart( product.id)}  className='btn'>
        {loding && currentId == product.id  ? <i className='fas fa-spinner fa-spin '></i>: "Add To Cart"}</button>
      {/* //onClick={()=>addProductToCard(product.id)}//this is  for button first but changer to function above */}

      <button onClick={()=>addWishlist(product.id) } className=' p-4'>
      <i className='fa-solid fa-heart h1   hover:text-red-500  '/> </button>
      
       </div>



       </div>
  

    </div>)
    
 //    : <div className="spinner">
  // <div className="bounce1"></div>
  // <div className="bounce2"></div>
 
  // <div className="bounce3"></div>
  //  </div>


 }
    </div>
    
    </>
 
}
