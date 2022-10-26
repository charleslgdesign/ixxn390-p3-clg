import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import background from './1.jpg'
import Grid3 from './Grid3'
import ContactUs from './ContactUs.js'
import AboutUs from './AboutUs.js'

export default function Home3() {

  const scrollToHome = () => {
    refHome.current?.scrollIntoView({behaviour: 'smooth'})
  }

  const scrollToProducts = () => {
    refProducts.current?.scrollIntoView({behavior: 'smooth'});
    // const location = props.location
  }

  const scrollToContact = () => {
    refContact.current?.scrollIntoView({behaviour: 'smooth'});
  }

  const scrollToAbout = () => {
    refAbout.current?.scrollIntoView({behaviour: 'smooth'});
  }


  const refHome = useRef(null)
  const refProducts = useRef(null)
  const refContact = useRef(null)
  const refAbout = useRef(null)

    function DropDown(props) {
      
      const [open, setOpen] = useState(false)
     

     


      function handleOpen() {
      
      setOpen(!open)

      }  

      return (
        <>
      <a className='home-link-3' onClick={handleOpen}>{props.name}</a>
        {open?<div className='link-text'><div className='animation'>
        <div onClick={props.function}>{props.one}</div>
        <div>{props.two}</div>
        <div>{props.three}</div><br/>
        </div></div>:null}
      </>
      )

    }

    return (
  <>
      <div ref={refHome}>
   <div className='animation'>
        <div className='landing-container' style={{ backgroundImage: `url(${background})`} }>
         
      <div className='home-block-3'>the salon club</div>
      <ul>
    <li className='home-3'>
      <DropDown function={scrollToProducts}link1='fudge' link2='joico' link3='schwarkopf' name='home' one='fudge' two='joico' three='schwarzkopf' />
      <br/><DropDown function={scrollToAbout} link1='ourpeople' name='about us' one='our people' two='privacy policy' three='providers' />
      <br/><DropDown function={scrollToContact} link='contact' name='contact us' one='phone number' two='email' three='location' />


    </li>
    
</ul></div></div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<div ref={refProducts}><Grid3/></div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
 <div ref={refContact}><ContactUs/></div>
 <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<div ref={refAbout}><AboutUs/></div>
 </div>    
    </>
    
    
  )

  }


    