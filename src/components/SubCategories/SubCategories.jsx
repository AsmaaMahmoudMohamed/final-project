import React, { useEffect, useState } from 'react';
import style from "./SubCategories.module.css";
import axios from 'axios';


export default function SubCategories() {
  const [products, setproducts] = useState([]);

    function getSubCagories(){
   return   axios.get(`https://ecommerce.routemisr.com/api/v1/subcategories`)
  .then((data)=>{
    console.log(data.data.data)  
  setproducts (data.data.data);

  })
  .catch((data)=>{
    console.log(data.data)
  })
  }
useEffect(()=>{
  getSubCagories()
},[])
  return <>
 {/* //// products.map is not a function///////////////////////// */}

<h1>oneeeeeeeeeeeeeeeeeeeeeeeee</h1>
   <div className='row gap-4'>
  {products?.map((product)=> <div key={product._id} className='w-1/6'>
      <div className="product p-4 ">
        <h1> name: {product?.name}</h1>
        <h1> category : {product?.category}</h1>
        <h1> createdAT :{product?.createdAt}</h1>

      </div>

    </div>
  )}

</div> 

    
    </>
 

}
