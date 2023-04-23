import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as Components from '../pages/Login-Register-components/Components';


//import Logo

import Logo from '../assets/img/logo.svg'

export const Login = () => {
  const { register, handleSubmit } = useForm();
  var navigate = useNavigate();
  const [roles, setroles] = useState();

  const submit = (data) => {
    axios
      .post("http://localhost:5000/user/user/login", data)
      .then((res) => {
        if (res.data.data) {
          console.log("user found....");
          toast.success("🦄 User Login Successfully...!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          
          console.log(res.data.data[0].role.name);
          console.log(res.data.data[0]?._id);
          localStorage.setItem("_id", res.data.data[0]?._id);
          console.log(res.data.data[0]?.role.name);
          if (res.data.data[0]?.role.name === "user") {
            navigate("/userdashboard/userdashboard");
           
           
          } else if (res.data.data[0]?.role.name === "admin") {
            navigate("/admindashboard/admindashboard");
          
            
          } else if (res.data.data[0]?.role.name === "pgowner") {
            navigate("/admindashboard/admindashboard");
          }
          //role...
        }
      })
      .catch((err) => {
        console.log("user not found....");
      });
  };

      const signup = (data)=>
      {
      
        axios.post('http://localhost:5000/user/user',data).then((res)=>{
            console.log(res.data.data)  
            toast.success("🦄 User Register Successfully...!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              
        }).catch((err)=>{
            console.log("user not found....")
            alert("user not found....")
        })
      }

      useEffect(() => {
        getRoles();
      }, []);
    
      const getRoles = () => {
        axios.get("http://localhost:5000/role/get").then((res) => {
          console.log(res.data.data)
          setroles(res.data.data);
        });
      };
     


  
  
    const [signIn, toggle] = React.useState(true);
      return(
        <>
       
       <header className='py-5 border-b'>
    <div className='container mx-auto flex items-center  '>
      {/* Logo */}
      <Link to='/'>
        <img src={Logo} alt=""/>
      </Link>

      {/* Navbar Links */}

     

      

      

    </div>
  </header>
          <Components.Container>
          
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Create Account</Components.Title>
                      <Components.Input type="text" placeholder="Enter your name" required {...register("fullName")}/>
                      <Components.Input type='text' placeholder='Enter your Username' {...register('username')}/>
                      <Components.Input type='email' placeholder='Enter your Email' {...register('email')}/>
                      <Components.Input type='phone' placeholder='Enter your Phone Number' {...register('phone')}/>
                      <Components.Input type='text' placeholder='age' {...register('age')}/>
                      <Components.Input type='password' placeholder='Password'{...register('password')} />
                      <Components.RoleDetails>
                          <Components.RoleLabel>Role</Components.RoleLabel>
                          <Components.RoleSelect {...register('role')}>
                          {
                            roles?.map((role)=>{
                              return(
                                <Components.RoleOption value={role._id}>{role.name}</Components.RoleOption>
                                )
                              })
                            }
                            </Components.RoleSelect>
                          
                      </Components.RoleDetails>
                     
                      
                      <Components.Button onClick={handleSubmit(signup)}>Sign Up</Components.Button>
                      
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>Sign in</Components.Title>
                       <Components.Input type='email' placeholder='Email'  {...register('email')}/>
                       <Components.Input type='password' placeholder='Password'  {...register('password')}/>
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Components.Button onClick={handleSubmit(submit)}>Sign Up</Components.Button>
                       
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          To keep connected with us please login with your personal info
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sigin Up
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
          <footer className='bg-white py-3 text-black text-center'>
    <div className="container mx-auto">
      Copyright &copy; by HomeLand. 2022. All rights reserved
    </div>
  </footer>
         
    
    </>
      )
      

 
};
