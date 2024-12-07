import React from 'react'
import {Field} from 'formik'
export default function WrapperInput({ name, placeholder, isDefault, isPassword }) {

  return (
      <div>
          
         
              {isDefault && <Field name={name} placeholder={placeholder} />}
              
  
         
             
              {isPassword &&  <Field name={"password"} >
                          {({field})=><input type='password' placeholder='password' {...field} id="MyInput"></input>}
                      </Field>}
            
    </div>
  )
}
