import React from 'react'
import img from "../../../images/png/HolidayDestination.png";
import './BlogCard.css';
function BlogCard() {
  return (
    <div className='card'>
        <div className='overlay'></div>
        <h4 className='card-text1 '>ANDAMAN</h4>
        <h4 className='card-text2 '>Starting at</h4>
        <h4 className='card-text3 '>Rs. 16,000 /-</h4>
        <img src={img} className='card-img-top' ></img>
    </div>
  )
}

export default BlogCard