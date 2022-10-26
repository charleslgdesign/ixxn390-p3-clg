import React from 'react'
import { useState, useEffect } from 'react'

import { useRef } from 'react'
import Checkout from './Checkout3'



const fudgeCleanBlondeVioletToningConditioner = '/img/fudge-conditioner-clean-blonde-violet-toning.png'
const fudgeCoolBrunetteBlueToningConditioner = '/img/fudge-conditioner-cool-brunette-blue-toning.png'
const fudgeDamageRewindReconstructingConditioner = '/img/fudge-conditioner-damage-rewind-reconstructing.png'
const fudgeLuminizerConditioner = '/img/fudge-conditioner-luminizer.png'
const fudgeCleanBlondeDamageRewindConditioner = '/img/fudge-conditioner-violet-toning-clean-blonde-damage-rewind.png'
const fudgeHedShineFinish = '/img/fudge-finish-hed-shine.png'
const fudgePushItUpFinish = '/img/fudge-finish-push-it-up-slow-dry-big-hair.png'
const fudgeCleanBlondeShampoo = '/img/fudge-shampoo-clean-blonde.png'
const joicoBlondeLifeBrighteningConditioner = '/img/joico-conditioner-blonde-life-brightening.png'


// const imgArray = [
//   fudgeCleanBlondeVioletToningConditioner,
//   fudgeCoolBrunetteBlueToningConditioner,
//   fudgeDamageRewindReconstructingConditioner,
//   fudgeLuminizerConditioner,
//   fudgeCleanBlondeDamageRewindConditioner,
//   fudgeHedShineFinish,
//   fudgePushItUpFinish,
//   fudgeCleanBlondeShampoo,
//   joicoBlondeLifeBrighteningConditioner
// ]


export default function Grid() {

  const [cartArray, setCartArray] = useState([])

  const refCheckout = useRef(null)


  const [cartCount, setCartCount] = useState(0)



  const scrollToCheckout = () => {
    refCheckout.current?.scrollIntoView({behavior: 'smooth'});
    // const location = props.location
  }

  // useEffect(() => {
  //   // Update the document title using the browser API
    
  // },[cartArray]);

 


function GridItem(props) {

  function AddToTheCart() {
    setCartCount(cartCount+1)
    var brand = props.brand
    var product = props.product
    var category = props.category
    var name = brand 
    name += ' '
    name += product
    name += ' '
    name += category
    setCartArray(oldArray => [...oldArray, name])

  }

  const [front,setFront] = useState(true)
  const [back,setBack] = useState(false)

  function handleFlip() {

    if (front) {
      setFront(false)
      setBack(true)
    } else if (back) {
      setBack(false)
      setFront(true)
    }
  }




  return (
  <div className='yo'>
    <div className='grid-item-3'>

    <img className='product-image-3' src={props.image} alt='product-image'/>
    </div>

    <div onClick={handleFlip} className='label-2'><div className='label-text'>
      

      
      {front?<div className='animation'>
      <b><div className='brand'>{props.brand}</div></b><br/>
        <div className='info'>{props.product}</div><br/><b>$20</b><br/>
      </div>:null}
  
      {back?<div className='animation'>
      <a className='add-cart' onClick={AddToTheCart}>Add to Cart</a>
      <div className='back'>
        {props.back}
      </div>
        <br/>
      </div>:null}
        </div>
      </div>
    </div>
  )
}



  const [open, setOpen] = useState(false)

  return (
<>


    <div className='animation'>

      
      
    <div className='grid-container'>
    <div onClick={scrollToCheckout}className='cart'>cart({cartCount})</div>

      <div className='grid-3'>  

      <GridItem brand='Fudge' product='Clean Blonde Violet Toning' category='Conditioner' back='Purple-pigmented conditioner, specially formulated to help condition blonde hair. Removes unwanted brassy tones.' image={fudgeCleanBlondeVioletToningConditioner}/>
      <GridItem brand='Fudge' product='Cool Brunette Blue Toning' category='Conditioner' back='Purple-pigmented conditioner, specially formulated to help condition blonde hair. Removes unwanted brassy tones.' image={fudgeCoolBrunetteBlueToningConditioner}/>
      <GridItem brand='Fudge' product='Damage Rewind Reconstructing' category='Conditioner' back='Purple-pigmented conditioner, specially formulated to help condition blonde hair. Removes unwanted brassy tones.' image={fudgeDamageRewindReconstructingConditioner}/>
      <GridItem brand='Fudge' product='Luminizer' category='Conditioner' back='Purple-pigmented conditioner, specially formulated to help condition blonde hair. Removes unwanted brassy tones.' image={fudgeLuminizerConditioner}/>
      <GridItem brand='Fudge' product='Clean Blonde Damage Rewind' back='Purple-pigmented conditioner, specially formulated to help condition blonde hair. Removes unwanted brassy tones.' category='Conditioner' image={fudgeCleanBlondeDamageRewindConditioner} />
      <GridItem brand='Fudge' product='Hed Shine' category='Finish' back='Purple-pigmented conditioner, specially formulated to help condition blonde hair. Removes unwanted brassy tones.' image={fudgeHedShineFinish}/>
      <GridItem brand='Fudge' product='Push It Up' category='Finish' back='Purple-pigmented conditioner, specially formulated to help condition blonde hair. Removes unwanted brassy tones.' image={fudgePushItUpFinish}/>
      <GridItem brand='Fudge' product='Clean Blonde Shampoo' category='Shampoo' back='Purple-pigmented conditioner, specially formulated to help condition blonde hair. Removes unwanted brassy tones.' image={fudgeCleanBlondeShampoo}/>
      <GridItem brand='Joico' product='Blonde Life Brightening' category='Conditioner' back='Purple-pigmented conditioner, specially formulated to help condition blonde hair. Removes unwanted brassy tones.' image={joicoBlondeLifeBrighteningConditioner}/>
  
     

   
      </div></div>
      </div>
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

     <div ref={refCheckout}><Checkout products={cartArray}></Checkout>
     </div>
 
    </>
  )
}