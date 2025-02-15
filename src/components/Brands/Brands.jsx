import React, { useEffect, useState } from 'react';
import style from "./Brands.module.css";
import axios from 'axios';


export default function Brands() {
  const [products, setproducts] = useState(null);
  // const [Model, setModel] = useState("");
  const [Model, setModel] = useState(null);

function getBrands(){
 return   axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  .then((res)=>{
    console.log(res.data.data)
    setproducts( res.data.data)
  })
  .catch((res)=>{})
}
useEffect(()=>{
  getBrands()

},[])


function handleClick( ){
  // setModel(products.image);
  setModel(products);
  
 
}

  return <>

   <div> 
   <div className="row gap-5">
   {products?.map((product)=> 

  ////////////////// onClick={()=> {handleClick()}}
    <div  onClick={()=> setModel(product.image)}
     key={product._id}  className='w-1/6'>
      <div 
         className="product text-sm  hover:border-emerald-300     rounded-lg border-emerald-500  text-center  w-full">
        <img src={product.image} className='w-full' alt="" />
        <h3>{product.name}</h3>

      </div>

    </div> )}
   </div>
   {/* Model  !== "" ?  */}
{Model && (<img src={Model}/>) ? <div  onClick = {(e)=>{ if(e.target.tagName=="DIV" ){setModel("")} }}  

 className="fixed inset-0 justify-center items-center     bg-emerald-400/50">

<div className="justify-center items-center m-auto  text-center mt-[100px] p-10" >

<img src={Model} className='w-2/3 xl:w-1/3 p-6 m-auto mt-7' alt="" />


</div>

</div>: ("")}

   </div>

    </>
 
}
