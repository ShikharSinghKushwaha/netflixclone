import React from 'react'
import './Home.css';
import ExportAllShows from './Shows';
import FaqData from './FaqData.js';
import Navbar from './Navbar.js';
import backgorund from './Images/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg'
import mobile from './Images/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg'
import FooterLinks from './Footer'
import { useNavigate } from 'react-router-dom';
function Home() {
  const imageUrl = window.innerWidth < 768  ? mobile : backgorund;
  const handleNavigate = useNavigate()
  function handlePage(){
    handleNavigate('/signin')
  }


  return (
    <div>
      <Navbar/>
      <div className="home_container">
        <div className='hero_section' style={{
    backgroundImage:`linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%),url(${imageUrl})`,
   
        }}>
         
      <div className='landing_text'>
        <h1 data-testid="welcome" id='welcome'>Unlimited movies, TV shows and more</h1>
        <h2>Watch Anywhere. Cancel anytime</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <form onSubmit={handlePage} className='get-started'>
          <input type="email" name="email" placeholder="Email Address"/>
          <button type="submit">Get Started</button>
          </form>
      </div>
      </div>
      </div>

      <div  className='footer-line'></div>
      <ExportAllShows />
      <FaqData/>
      <FooterLinks  home={true}/>
    </div>
  )
}

export default Home
