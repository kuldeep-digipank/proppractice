import React from 'react'
import './SpecialHolidayDestination.css';
import BlogCard from '../Global/BlogCard/BlogCard'
function SpecialHolidayDestination() {
    return (
        <div className='SpecialHolidayDestination'>
            <h2>Special Holiday Destination</h2>
            <p>Amazing travel destinations filled with diverse cultures and stunning natural scenery. Dive into the vibrant mix of old traditions and modern charm. Visit these top hotspots
                where ancient customs and beautiful landscapes come together, creating unforgettable experiences. Let yourself be captivated by the perfect blend of history and modernity,
                leaving you with cherished memories.
            </p>
            <div className='row blog-cards'>
                    <div className='col-lg-2'>
                    <BlogCard></BlogCard>
                    </div>
                    <div className='col-lg-2'>
                    <BlogCard></BlogCard>
                    </div>
                    <div className='col-lg-2'>
                    <BlogCard></BlogCard>
                    </div>
                    <div className='col-lg-2'>
                    <BlogCard></BlogCard>
                    </div>
                    <div className='col-lg-2'>
                    <BlogCard></BlogCard>
                    </div>
                    <div className='col-lg-2'>
                    <BlogCard></BlogCard>
                    </div>
                </div>
        </div>
    )
}

export default SpecialHolidayDestination