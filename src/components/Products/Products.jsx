import React from 'react';
 import style from "./Products.module.css";
 import axios from 'axios';
 import { useQuery } from '@tanstack/react-query';
 import { Link } from 'react-router-dom';
 import useProducts from '../../Hooks/useProducts';
import RecentProducts from '../RecentProducts/RecentProducts';



 export default function Products(){


  return <>
  <h1 className='text-center mt-5'> Products</h1>
  <RecentProducts/>
  </>
 
 }


// export default function Products() {

// let {data , isError , error ,isLoading}= useProducts()

// // (we will do custom hook at useProducts.jsx)//
//   // function getProducts(){

//   //   return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);

//   // }

//   // let {data , isError , error, isLoading}=  useQuery({

//   //   queryKey :["recentProduct"],
//   //   queryFn  : getProducts ,
//   //   staleTime : 20000 , 
//   //   gcTime : 2000 ,
//   //   // retry : 7 ,
//   //   // retryDelay : 6000,
//   //   // refetchInterval : 3000 ,

//   // } );
//   // console.log(data.data.data)


//   if(isError){
//     return <h3>{error}</h3>
//   }
//   if(isLoading){
//     return  <div className="spinner">
//   <div className="bounce1"></div>
//   <div className="bounce2"></div>
//   <div className="bounce3"></div>
// </div>
//   }

//   // const [products, setproducts] = useState([])

//   // function getProducts(){

//   //   axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
//   //   .then((res)=>{ 
//   //     // console.log(res.data.data);
//   //     setproducts(res.data.data)
//   //   })
//   //   .catch((res)=>{})
//   //  }
//   //  useEffect(()=>{
//   //   getProducts()
//   //  },[])


//   return <>
//     <div className="row">
//       {/* // [] instead ofproducts // */}
//     {  
//      data?.data.data.map((product)=>  <div key={product.id }  className='w-1/6'>

 

//    <div   className='product p-3 rounded-lg '>
//    <Link to={`productdetails/${product.id } /${product.category.name}`}> 

//       <img src={ product.imageCover} className='w-full' alt="" />
//       <h3 className='text-emerald-600 ' >  {product.category.name}  </h3>
//       <h3 className='font-semibold mb-3 '>{product.title.split(" ").slice(0,2).join(" ")}</h3>
//       <div className='flex justify-between'>
//         <span>{product.price} EGP</span>
//         <span>  <i className='fas fa-star text-yellow-400'></i> {product.ratingsAverage}</span>
//       </div>
//       </Link>
//       <button className='btn'> Add To Cart</button>

//        </div>
  

//     </div>)
    
//  //    : <div className="spinner">
//   // <div className="bounce1"></div>
//   // <div className="bounce2"></div>
 
//   // <div className="bounce3"></div>
//   //  </div>


//  }
//     </div>
    
//     </>
 
 
 
// }
