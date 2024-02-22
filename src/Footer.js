import React from 'react';
import './Footer.css'
import './Home.css'
function Links({ linkProp }){
   // linkData ? linkData :
 // const links = ["FAQ",'Help Account','Account','Media Center','Investor Relations','Jobs','Ways to Watch','Terms of Use','Privacy','Cokkie Prefernces'];
    return (
        <div>
          {/* <ul className='footer-container'> */}
            {/* {links.map((data,index) => ( */}
                <li  className='link-text'>
                    <a href="javascript:void(0);alert('Sory i am Useless Link')" target="_blank" rel="noopener noreferrer">{linkProp}</a>
                </li>
            {/* ))} */}
          {/* </ul> */}
        </div>
    );
}

function FooterLinks({ home, signinfooter }){
 return (
   <div>
    <footer>
       <div className='footer-line'></div>

   <div className="main-container">
     <h4 >Questions? Call 000-800-919-1694</h4>

        <ul className="footer-container">
          {home ?  <>
    <div className='link-box'>
      <Links linkProp={'FAQ'} />
      <Links linkProp={'Help Account'} />
      <Links linkProp={'Account'} />
      <Links linkProp={'Media Center'} />
      </div>
      <div className='link-box'>
      <Links linkProp={'Investor Relations'} />
      <Links linkProp={'Jobs'} />
      <Links linkProp={'Ways to Watch'} />
      <Links linkProp={'Terms of Use'} />
      </div>
      <div className='link-box'>
      <Links linkProp={'Account'} />
      <Links linkProp={'Corporate Information'} />
      <Links linkProp={'Only On Netflix'} />
      <Links linkProp={'Terms of Use'} />
      </div>
      <div className='link-box'>
      <Links linkProp={'Media Center'} />
      <Links linkProp={'Terms of Use'} />
      <Links linkProp={'Contact Us'} />
     
      </div> 
      </>
      : null}
      {signinfooter ? <><div className='link-box'>
      <Links linkProp={'FAQ'} />
      <Links linkProp={'Cookie Prefernces'} />
     
      </div>

       <div className='link-box'>
       <Links linkProp={'Help Center'} />
       <Links linkProp={'Corporate Information'} />
 </div>

       <div className='link-box'>
       <Links linkProp={'Terms of Use'} />
      
       </div>
       <div className='link-box'>
       <Links linkProp={'Privacy'} />
      
      
       </div>
       </> : null }
      </ul>
      <div className='select-language'>
              <select className='box-style'>
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
            <h5>Netflix India</h5>
      </div>

      </footer>
   </div>
 );
}
export default FooterLinks