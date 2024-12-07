import React, { useState } from 'react'
import {Form, Formik } from 'formik'
import * as Yup from "yup";
import WrapperInput from '../Wrapper/WrapperInput';
import { FaRegEye } from "react-icons/fa6";





export default function LoginPage() {
    const validationSchema = Yup.object({
       email: Yup.string().email("must be email ...").required("email is required"),
        password: Yup.string().min(7).max(15).required("password is required"),
    });
    const initialValues = {
        email: "",
        password:""
    }
    const input = document.getElementById("MyInput") ;

    const icon = document.getElementById("iconClick");

    const [showPassword, setShowPassword] = useState(false);
    icon?.addEventListener("click", () => {
        setShowPassword(!showPassword);
       
        if (showPassword==true) {
       input.type="text"
        } else {
             input.type="password"
   }
    })
  
  return (
      <div className='login'>
          <div className='container'>
               <h1>Login </h1>
          <Formik initialValues={initialValues} onSubmit={(values) => {return console.log(values) }} validationSchema={validationSchema}>
              {({errors}) => (
                  <Form>
                          <div className='loginEmail'>
                          <label htmlFor="">email/phone</label><br />
                              <WrapperInput name={"email"} placeholder={"email"} isDefault />

                              <p>{errors.email}</p>
                              </div>
  <div className='loginPassword'>
                              <label htmlFor="">password</label><br />
                              <div className='InputIcon'>
                                  <FaRegEye className='icon' id='iconClick' />

                                <WrapperInput name={"password"} placeholder={ "password"} isPassword/>
                              </div>
                            
                    
                    
                        <p>{errors.password}</p>
 </div>
                          <button type='submit'>login</button>
                
                     
                  
              </Form>
             )}
          </Formik>
         </div>

    </div>
  )
}
