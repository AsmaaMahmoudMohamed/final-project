import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';


export default function useProducts() {
    function getProducts(){

        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
    
      }
    
      let productInfo =  useQuery({
    
        queryKey :["recentProduct"],
        queryFn  : getProducts ,
        staleTime : 20000 , 
        gcTime : 2000 ,
        // retry : 7 ,
        // retryDelay : 6000,
        // refetchInterval : 3000 ,
    
      } );
  return (
    productInfo
  )
}
