import React from 'react'
import { useState } from 'react'
import './FAQ.css'


function FAQ({faqdata}) {
  
  const [ show, setShow] = useState(false);

 function handleShow(index){
  setShow((accor) => (accor === index ? false : index));
 }
  return (
    <div>
      <article>
        <h1 className='heading'>Frequently Asked Questions</h1>
      <section id="faq" className="mt-4">
         
          <div className='faq_container'>
    <div className="question_container">
      {faqdata.map ((item,index) => (
          <div key={index} onClick={() => handleShow(index) } style={{color:'white'}} className='question'>
            <span style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <p>{item.question}</p>
            <i class="fa-solid fa-plus"></i>
            </span>
           
            {show === index  && <div className='answer'>
               <h2 style={{color:'white'}}>{item.answer}</h2>
          
              </div>}

          </div>

))}
</div>
         
          </div>
               
       </section>
       </article>
    </div>
  )
}

export default FAQ ;
