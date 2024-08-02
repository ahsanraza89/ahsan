"use client"
import axios from 'axios';
import './login.css';
import { useForm } from 'react-hook-form';

export default ()=>{



let {handleSubmit,register} = useForm();


const signupKro = (meraUser)=>{

  axios.post("/api/signup",meraUser).then((resp)=>{

  })


}


    return <div className="wrapper fadeInDown">
      <h1>Sign up Form</h1>
    <div id="formContent">
      {/* Tabs Titles */}
      {/* Icon */}
      <div className="fadeIn first">


       {/* <button onClick={function(meraUser){
        // axios.post('/api/signup' , {name : 'Ahsan'}).then(function(resp){
        //   console.log(resp.data);
        // })
        axios.post("/api/signup",meraUser).then((resp)=>{

        })

       }}> 
                 Web Developer coding
       </button> */}



        <img
          src="http://danielzawadzki.com/codepen/01/icon.svg"
          id="icon"
          alt="User Icon"
        />
      </div>
      {/* Login Form */}
      <form onSubmit={handleSubmit(signupKro)} >
        <input type='file' ></input>
        <input
          type="text"
          id="login"
          className="fadeIn second"
          name="login"
          placeholder="login"
          {...register("email")}
        />
        <input
          type="text"
          id="password"
          className="fadeIn third"
          name="login"
          placeholder="password"
          {...register("password")}
        />
        <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
      </form>
      {/* Remind Passowrd */}
      <div id="formFooter">
        <a className="underlineHover" href="#">
          Forgot Password?
        </a>
      </div>
    </div>
  </div>


}