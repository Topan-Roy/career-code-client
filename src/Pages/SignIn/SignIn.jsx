import React, { use, useRef } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import signinlottie from '../../assets/lotties/login.json'
import Lottie from 'lottie-react';
import SocialLogIn from '../../Shared/SocialLogIn';
import { useLocation, useNavigate } from 'react-router';
const SignIn = () => {
     const emailRef=useRef();
     const {signInUser}=use(AuthContext);
     const location=useLocation();
     const Navigate=useNavigate();
     const from=location.state || '/';
        const handelSignIn=e=>{
           e.preventDefault();
           const form=e.target;
           const email= form.email.value;
           const password= form.password.value;
           console.log(email,password)
          //  create user
            signInUser(email,password)
       .then((result) => {
        console.log(result);
        Navigate(from)
       })
  .catch((error) => {
   console.log(error)
  });
        }
        

         
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     <Lottie style={{width:'300px'}} animationData={signinlottie} loop={true}></Lottie>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <h1 className="text-5xl font-bold">Sign In now!</h1>
        <form onSubmit={ handelSignIn}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' ref={emailRef} className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div ><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign In</button>
        </fieldset>
        </form>
        <SocialLogIn from={from}></SocialLogIn>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignIn;