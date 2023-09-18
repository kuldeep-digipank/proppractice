import React from 'react'
import img from '../../images/png/hero.png'
import './Hero.css'
function Hero() {
  return (
    <div className='hero' style={{backgroundImage:`url(${img})`}}>
        
        <div className='banner'>
        <p className='text-center'>Neque porro quisquam est qui dolorem ipsum 
        quia dolor sit amet</p>
        <div className='inp d-flex justify-content-center '>
        <input className='input-hero ' placeholder='Search here'/>
        </div>
        </div>
    </div>
  )
}

export default Hero