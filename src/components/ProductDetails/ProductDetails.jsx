import React, { useEffect, useState } from 'react';
import style from "./ProductDetails.module.css";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from "react-slick";


export default function ProductDetails() {
  const [relatedProducts, setrelatedProducts] = useState([])
  const [product, setproduct] = useState(null);
  let{ id, category }= useParams();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:1000,
    arrows:false,
  };
 
  function getProduct(id){
    axios.get( `https://ecommerce.routemisr.com/api/v1/products/${id}`)
    .then((res)=>{
      // console.log(res.data.data);
      setproduct(res.data.data)
    })
    .catch((res)=>{
      // console.log(res);
    });
  }

   function getAllProducts(){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then((res)=>{
     let related = res.data.data.filter((product)=>product.category.name == category);
    //  console.log(related);
    setrelatedProducts(related)
    })
   }

  useEffect(()=>{
    getProduct(id);
    getAllProducts()
  },[ id,category])

  return <>

   <div className="row items-center">
    <div className="w-1/4">
    <Slider {...settings}>  
    {product?.images.map((src)=><img src={src} className='w-full' alt="" /> )}
    </Slider>

  
    </div>

    <div className="w-3/4 p-4">
    <h3 className='font-semibold capitalize text-2xl'>{product?.title}</h3>
    <h3 className='text-gray-700 my-4'>{product?.description}</h3>
    <h3 className='text-gray-700 my-4'>{product?.category.name}</h3>
    <div className='flex justify-between p-3 mb-4'>
        <span>{product?.price} EGP</span>
        <span>  <i className='fas fa-star text-yellow-400'></i> {product?.ratingsAverage}</span>
      </div>
      <button className='btn'>Add To Cart</button>
    
    </div>
   </div>
   <div className="row">
    {  relatedProducts.length >0?   relatedProducts.map((product)=>  <div key={product.id }  className='w-1/6'>

 

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
      <button className='btn'> Add To Cart</button>

       </div>
  

    </div>): <div class="spinner">
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>
</div>}
    </div>
    
    </>
 
}
