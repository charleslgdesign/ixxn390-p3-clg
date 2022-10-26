import React from 'react'
import img from './3.jpeg'

function AboutUs() {
  return (
    <div className='checkout-container'>
    <div className='info-grid'>
    <div className='body-text'>Ut accumsan id leo at malesuada. Nullam non nisi interdum, consectetur diam eget, laoreet est. Etiam diam diam, eleifend vel consequat non, pharetra vitae dui. Etiam mollis condimentum placerat. Aenean dolor dui, interdum vel mi ut, ultrices malesuada urna. In hac habitasse platea dictumst. Nullam posuere, nisi quis condimentum vehicula, odio arcu feugiat ligula, vel feugiat felis purus eget ipsum. Proin tempus ligula hendrerit nulla sodales porta. Morbi aliquet scelerisque purus, at sollicitudin justo luctus vitae. Donec sit amet feugiat nisi, ut auctor mauris. Pellentesque odio augue, iaculis in mollis in, sodales non enim. Etiam a venenatis elit. Aliquam ac mauris non diam lacinia finibus. Maecenas molestie porta orci sed posuere. Aenean id bibendum libero, eget feugiat libero. Duis posuere tincidunt ipsum, non blandit purus pellentesque sit amet.</div>
    <div className='info-image-container'><img className='img-info' src={img}/></div>
    </div>
</div>
    
  )
}

export default AboutUs