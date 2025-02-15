
import style from "./UpdateUser.module.css";

import React, {  useState } from "react";

import { useFormik } from "formik";

import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export default function UpdateUser() {
  // let{userLogin , setuserLogin} = useContext(UserContext);
  let headers = {token:localStorage.getItem ("userToken")} 

  let navigate = useNavigate();
// const [ApiError, setApiError] = useState("")
// const [isLoding, setisLoding] = useState(false)

 

 async function handleUpdateUser(values){

    // setisLoding(true)


    ///// why he said that Request failed with status code 401/////
     let x = await  axios.put(`https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`, {values},{headers })


     .then( (x)=>{
      console.log(x);
    
     })
   .catch((x)=>{
    console.log(x);
   })
   
      

  };


let myValidation = Yup.object().shape ({
 
  currentPassword :Yup.string().required("password is required").min(6 , "password min length is 6"),
  password: Yup.string().required("password is required").min(6 , "password min length is 6"),
  rePassword : Yup.string().required("rePassword is required").oneOf([Yup.ref('password')], "not match with password"),


});

  

  let formik = useFormik( {
    initialValues : {
    
      currentPassword : "",
      password : "",
      rePassword : "",
    
    },
    validationSchema : myValidation ,

    onSubmit : handleUpdateUser,
  });





  return (
    <>

    
    {/* {ApiError? <div className="w-1/2 mx-auto bg-red-700 text-center text-white font-bold rounded-lg p-3 mb-5">
      {ApiError}
    </div>:null} */}
    <div className="text-center py-8 font-mono font-bold">Update Logged user password</div>
    
      <form onSubmit={formik.handleSubmit}  className="max-w-md mx-auto my-4">
       

        
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="Password"
            name="currentPassword"
            value = {formik.values.currentPassword }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="currentPassword"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
             border-gray-300 appearance-none
             focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="currentPassword"
            className="peer-focus:font-medium left-0  absolute text-sm text-gray-500
            duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
              peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Enter Your currentPassword :
          </label>
          {formik.errors.password && formik.touched.password ? (
            <div className="p-4 text-sm text-red-800 rounded-lg " role="alert">
              <span className="font-medium">{formik.errors.currentPassword} </span>

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

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="rePassword"
            value = {formik.values.rePassword }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="rePassword"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
             border-gray-300 appearance-none
             focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="rePassword"
            className="peer-focus:font-medium left-0  absolute text-sm text-gray-500
            duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
              peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Enter Your rePassword :
          </label>
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className="p-4 text-sm text-red-800 rounded-lg " role="alert">
              <span className="font-medium">{formik.errors.rePassword} </span>

            </div>
          ): null}
    
        </div>

       
        
        <div className="flex gap-3 items-center"> 
          <Link to ={"/login"}>  <button type="submit" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald -300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
        Register
          </button>    </Link>
       
          <Link to = {"/login"}> <span  className="text-blue-500 underline"  > Do you have an account? Login now</span> </Link>
        

           </div>
        


      </form>
    </>
  );
}
