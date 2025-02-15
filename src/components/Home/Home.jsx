import React, { useContext } from 'react';
import style from "./Home.module.css";
import RecentProducts from '../RecentProducts/RecentProducts';
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider';
import MainSlider from '../mainSlider/mainSlider';






export default function Home() {
  
  return <>
    <h1 className='text-center mt-5'> Home</h1>

    <MainSlider/>

  <CategoriesSlider/>
  
   <RecentProducts/>

  
    </>
 
}
