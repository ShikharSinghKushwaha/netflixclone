import React from "react";
import { useState }from 'react'
import './Home.css'
import './Sign.css'
import backgorund from './Images/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg'
import Logo from './Images/Netflix_Logo_PMS.png'
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { auth } from "./firebase";
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"
import mobile from './Images/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg'
import FooterLinks from './Footer'

function SignIn(){
    const imageUrl = window.innerWidth < 768  ? mobile : backgorund ;
    
    const navigate = useNavigate();
    const [ email, setEmail] = useState("")
    const [ password, setPassword ] = useState('');
    const [ error ,setError ]  = useState('');
    const [showError, setShowError ] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        if (email === "" || password === ""){
            setError("Please fill the field first");

        }else{
            signInWithEmailAndPassword(auth,email,password)
            .then((auth) => {
               navigate('/dashboard')
               localStorage.setItem('sign-in',true)
               console.log(auth)
            }).catch((error) => {
               console.log(error.message)
                setError("Invalid credentials ,Please recheck or Register")
               setShowError(!showError)
            });
        }
    }

    function  handleRegister(e){
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)

      .then((auth) => {
        navigate('/dashboard')
       localStorage.setItem('registered',true)
        console.log(auth)
      }).catch((error) => {console.log(error.message)
        setError("Password should be at least 6 characters: weak Password")
        if(email === email){
            setError('This Email is already in use,Try another one ')
           
        }
        setShowError(!showError)
    });
    }

    return (
        <div>
            <div className="navbar_container">
             <div className="logo">
            <NavLink to="/">
            <img src={Logo} />
            </NavLink>
            </div>
            </div>
            <div className="hero_section"style={{
    backgroundImage:`linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%),url(${imageUrl})`,
    minHeight:'100%',
    minWidth:'100%',

        }}>
              <div className="sign-container">
              <h1>Sign In</h1>
              {setShowError && <p> {error}</p>}
              <form onSubmit={handleSubmit} className='get-started'>
          <input type="email" name="email" placeholder="Email Address"
                onChange={(e) => {setEmail(e.target.value)}}
          
          /><br/><br/>
          <input 
                type="password"
                placeholder="Password"
                name="pass"
                onChange={(e) => {setPassword(e.target.value)}}
                /><br/><br/>
                <div className="btn_container">
          <button type="submit">Sign In</button>
          <button type="submit" onClick={handleRegister}>Register</button>
          </div>
          </form>
              
              </div>

              </div>
              <FooterLinks signinfooter={true} />
        </div>
    );
}

export default SignIn