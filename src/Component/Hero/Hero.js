import React from 'react'
import img from '../../images/png/hero.png'
import './Hero.css'
import search from '../../images/svg/search.svg'
function Hero() {
  return (
    <div className='hero' style={{backgroundImage:`url(${img})`}}>
        
        <div className='banner'>
        <p className='text-center'>Neque porro quisquam est qui dolorem ipsum 
        quia dolor sit amet</p>
        <div className='inp '>
        <div className='white-overlay'></div>
        <div className=' d-flex justify-content-between'>

        <input className='input-hero ' placeholder='Search your destination'/>
        <img src={search} className='search-ico'></img>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Hero