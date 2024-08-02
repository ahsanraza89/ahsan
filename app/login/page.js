"use client";
// import something from "./../../apis/auth`"
import './login.css';
import { toast } from 'react-toastify';

import { useState } from 'react';


import { useForm } from 'react-hook-form';


import auth from '@/apis/auth';
import { Provider } from 'react-redux';
import { meraStore } from '@/store/store';
import axios from 'axios';
import { useRouter } from 'next/router';


export default ()=>{

 return <Provider store={meraStore}>
     <Login></Login>
  </Provider> 

}

function Login(){

  let [users, setUsers] = useState([])
  
  let {register, handleSubmit, formState:{errors}} = useForm();


  function signUpKardo(data){

    users.push(data);
    setUsers([...users])

      axios.post("/api/login").then(function(resp){
      let result = resp.data;
      if(resp.data.success){
toast.success("Login hogaya")
      }
      localStorage.setItem('token',result.token);
      console.log(result);
    })

    // auth.login(data)
    // axios.post("/api/signup").then(function(resp){
    //   let result = resp.data;
    //   localStorage.setItem('token',result.token);
    //   console.log(result);
    // })


    // toast.success("login hogya wa")
    // toast.error("login hogya wa") 
    // toast.warn("login hogya wa")
    // toast.info("login hogya wa")

  }


    return <div className="wrapper fadeInDown">
    <div id="formContent">
      {/* Tabs Titles */}
      {/* Icon */}
      <div className="fadeIn first">
        <img
          src="http://danielzawadzki.com/codepen/01/icon.svg"
          id="icon"
          alt="User Icon"
        />
      </div>
      {/* Login Form */}
      <form onSubmit={handleSubmit(signUpKardo)}>
        <input
                          //        yahan single validation h
          {...register('user_email', { required:true, pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
          type="text"
          id="login"
          className="fadeIn second"          
          placeholder="login"
        />
        {/* single validation per error show krna */}
        {/* {errors.user_email ? <div style={ {color:'red'} }>This field is required</div> :null} */}
        
        {/* multiple validations per error */}
        {errors.user_email && errors.user_email.type == "required" ? <div style={ {color:'red'} }>This field is required</div> :null}
        {errors.user_email && errors.user_email.type == "pattern" ? <div style={ {color:'red'} }>Please enter a valid email</div> :null}
        {errors.user_email && errors.user_email.type == "validate" ? <div style={ {color:'red'} }>2 emails already hogyin</div> :null}
        
        <input
                                          // yahan multiple validations h
          {...register('user_password', {required:true, minLength:6})}
          type="text"
          id="password"
          className="fadeIn third"          
          placeholder="password"
        />
        {/* multiple validations case m type bhi check krni hogi */}
        {errors.user_password && errors.user_password.type =="required" ? <div style={ {color:'red'} }>This field is required</div> :null }
        {errors.user_password && errors.user_password.type =="minLength" ? <div style={ {color:'red'} }>Please enter atleast 6 letters</div> :null }
        

        <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
      </form>
      {/* Remind Passowrd */}
      <div id="formFooter">
        <a className="underlineHover" href="#">
          Forgot Password?
        </a>
      </div>
    </div>
    <table>
      {
        users.map((user)=>{
          return <tr>
            <td>{user.user_name}</td>
            <td>{user.user_email}</td>
            <td>{user.user_password}</td>
          </tr>
        })
      }
      </table>
  </div>
  

}