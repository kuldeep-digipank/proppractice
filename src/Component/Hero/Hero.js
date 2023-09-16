import React from 'react'
import img from '../../images/png/hero.png'
import './Hero.css'
function Hero() {
  return (
    <div className='hero' style={{backgroundImage:`url(${img})`}}>
        <div className='overlay'></div>
        <div className='banner'>
        <p className='text-center'>Neque porro quisquam est qui dolorem ipsum 
        quia dolor sit amet</p>
        <div className='inp d-flex justify-content-center '>
        <input className='form-control '/>
        </div>
        </div>
    </div>
  )
}

export default Hero