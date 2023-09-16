import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='Footer'>
        <div className='app-container'>
            <div className='row'>
                <div className='col-lg-3'>
                    <h3>Buddhajourney.com</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <div className='col-lg-3'>
                    <h3>Explore</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us Us</li>
                        <li>Blog</li>
                        <li>Favourite Places</li>
                    </ul>
                </div>
                <div className='col-lg-3'>
                    <h3>Legal</h3>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy policy</li>
                        <li>Terms of use</li>
                        
                    </ul>

                </div>
                <div className='col-lg-3'>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>trip@Buddhajourney.com</li>
                    </ul>
                </div>
                
            </div>
            <div>
                <hr />
                <h3 className='text-center'>2023 Buddhajourney.co.in All right reserved</h3>
            </div>
        </div>
    </div>
  )
}

export default Footer