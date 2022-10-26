import React from 'react'
import { useState } from 'react'


 function Checkout3(props) {

  const fuckMyLife = props.products
  console.log(fuckMyLife)

  return (

    <>


    <div className='animation'>
      <div className='checkout-container'>
      <div className='checkout-grid'>

    <div className='items'>
    <div className='checkout-text'>
      <br/>
      <div className='brand'>Items:</div>
      {fuckMyLife.map((item)=>{
        return <><h3><b>1x</b> - {item}</h3></>
      })}


    </div>
    </div>
    <div className='checkout-item-3'>
      <div className='checkout-text'><h2 >Total:</h2>
  <div className='shift'>
      $20
      <br/>
      $30
      <br/>
      $15
      <br/>
      <br/>
      <b>$65</b>

      </div>
      </div>
    </div></div></div></div>
    
    </>
  )
}

export default Checkout3