import React, { useContext } from 'react';
import style from "./Login.module.css";

import { useFormik } from "formik";


import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { UserContext } from '../../Context/UserContext';










export default function Login() {

   let{userLogin , setuserLogin} = useContext(UserContext);
  let navigate = useNavigate();
const [ApiError, setApiError] = useState("")
const [isLoding, setisLoding] = useState(false)
//////////////////////////////////////////////////////why sent me to login page////////////////////////
function Forgetpassword(){

  setuserLogin  (null);
  navigate("/forgetpassword");
};

  
  function handleLogin (values){
    setisLoding(true)
    axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values)
    .then((res) => {
      setisLoding(false)
      if(res.data.message== "success"){
      localStorage.setItem("userToken", res.data.token)
      setuserLogin( res.data.token)
      navigate('/')
     
      } /////////////tried to add it here but did not work////////////////////////////////////////////////////
      //  else{ 
      //   navigate('/forgetpassword')
      //  }
      // else if(res.data.message!== "success"){
      //   navigate('/forgetpassword')
      // }
        
      ;})
    .catch((res) => {
      
      setisLoding(false)
      setApiError(res.response.data.message);});
      

  }


let myValidation = Yup.object().shape ({
  

  email: Yup.string().email("not vaild email").required("email is required"),

  password: Yup.string().required("password is required").min(6 , "password min length is 6"),

  

});

  

  let formik = useFormik( {
    initialValues : {
      name : "",
      email : "",
      password : "",
      rePassword : "",
      phone : "",
    },
    validationSchema : myValidation ,

    onSubmit : handleLogin,
  })





  return (
    <>
    {ApiError? <div className="w-1/2 mx-auto bg-red-700 text-center text-white font-bold rounded-lg p-3 mb-5">
      {ApiError}
    </div>:null}
    <div className="text-center py-8 font-mono font-bold">Login Now</div>
      <form onSubmit={formik.handleSubmit}  className="max-w-md mx-auto my-4">

        

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            value = {formik.values.email }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
             border-gray-300 appearance-none
             focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium left-0  absolute text-sm text-gray-500
            duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
              peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Enter Your Email :
          </label>
          {formik.errors.email && formik.touched.email ? (
            <div className="p-4 text-sm text-red-800 rounded-lg " role="alert">
              <span className="font-medium">{formik.errors.email} </span>


            </div>
          ): null}
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            value = {formik.values.password }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
             border-gray-300 appearance-none
             focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium left-0  absolute text-sm text-gray-500
            duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
              peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Enter Your Password :
          </label>
          {formik.errors.password && formik.touched.password ? (
            <div className="p-4 text-sm text-red-800 rounded-lg " role="alert">
              <span className="font-medium">{formik.errors.password} </span>

            </div>
          ): null}
        </div>

      
       
        <div className="flex gap-3 items-center"> 
        <button type="submit" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald -300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
          {isLoding ? <i className="fas fa-spinner fa-spain"> </i> : "Register"}
          </button>
          <Link to = {"/register"}> <span  className="text-blue-500 underline"  > Do you have an account? Register now</span> </Link>
          <span onClick={Forgetpassword}  className="text-blue-500 underline cursor-pointer"  > forget your password ?</span> 
           </div>
           


      </form>
    </>
  );
}





