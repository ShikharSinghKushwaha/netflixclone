import React from 'react'
import './Home.css';
import './Shows.css';
import tv from './Images/tv.png';
import st from './Images/mobile-0819.jpg';
import downloadIcon from './Images/download-icon.gif';
import boxShot from './Images/boxshot.png';
import device from './Images/device-pile-in.png';
import children from './Images/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png';



function Shows({ heading, para,leftImage, images , another, right ,download,first,second}) {


  return (
    <div>
       <div className='parent_container '>
        <div className="single-container" style={{display:'flex',alignItems:'center'}}>

         <div className='image-container'>
          {/* <span style={{border:'2px solid white'}}> */}
      <img src={leftImage} />
      {first ?  <div className="extra_info">
            <img src={boxShot} style={{width:'50px',height:'70px'}}/>
            <span style={{color:'white'}}>
              StrangerThings<br/>
              <small style={{color:'blue'}}>Downloading...</small>
            </span>
            <img style={{width
            :'50px',height:'50px'}} src={downloadIcon} />
            <div className='download_icon'>
              <img src={download} />
            </div>
          </div> : null}
          </div>
          {another ?  <div className='side_text'>
            <h1>{heading}</h1>
            <p>{para}</p>
          </div> : null }
          </div> 
      
    
          {/* </span> */}
        {/* <span className='responsive-direction' style={{border:'2px solid red',display:'flex',alignItems:'center',justifyContent:'space-around'}} > */}
        {right ?   <div className='side_text'>
            <h1>{heading}</h1>
            <p>{para}</p>
          </div>
          :null}
         {second ? <div className='image-container'>
          <img src={images} />
         
         </div> : null}
         {/* </span> */}
       </div>
       <div className='footer-line'></div>
     
    </div>
  )
}


function ExportAllShows(){
    return (
      <div>
    <Shows images= {tv} heading={'Enjoy on your TV'}
    para={'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'}
    second={true} right={true}/>

     <Shows leftImage= {st} heading={'Download your shows to watch offline.'}
    para={'Save your favourites easily and always have something to watch.'}
    first={true} another={true}/>

    <Shows images= {device} heading={'Watch everywhere.'}
    para={'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'}
    second={true} right={true}/>

     <Shows leftImage= {children} heading={'Create profiles for kids.'}
    para={'Send children on adventures with their favourite characters in a space made just for them—free with your membership.'}
    another={true} />
    
    </div>
    );
}
export default ExportAllShows;

