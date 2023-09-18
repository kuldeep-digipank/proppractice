import React from 'react'
import './Blog.css'
import Card from '../Global/Card/Card'
import img from '../../images/png/trendingDestination.png'
import left from '../../images/svg/left.svg'
import right from '../../images/svg/right.svg'
function Blog() {
    const loc="delhi";
    const rating="4.5";
    const para="Lorem Ipsum is simply dummy text of the printing and  industry. Lorem Ipsum has been the industry's standa rd dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standa rd dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ";
    const price = "10,000";
  return (
    <div>
        <div className='app-container my-5'>
            <h2>Blog</h2>
            Experience a captivating journey with our engaging articles, practical tips, and inspiring stories. Let our blog fuel your desire for exploration, ensuring that your upcoming
            adventure transforms into a cherished and extraordinary lifetime memory. Immerse yourself and let wanderlust take you on an unforgettable ride.
           <div className=''>
           </div>
            <div className='row my-5  blog-card-collection  '>

           <img src={left} className='slide-left'></img>
              <img src={right} className='slide-right'></img>
             
            <div className='col-lg-4'>
                    <Card image={img} location={loc} star={rating} paragraph={para} hasprice="true"></Card>
                    </div>
                    <div className='col-lg-4'>
                    <Card image={img} location={loc} star={rating} paragraph={para} hasprice="true"></Card>
                    </div>
                    <div className='col-lg-4'>
                    <Card image={img} location={loc} star={rating} paragraph={para} hasprice="true"></Card>
                    </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Blog