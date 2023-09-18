import './Adventure.css'
import React from 'react'
import video from '../../video/video.mp4'
import playico from '../../images/svg/play.svg'
function Adventure() {
    return (
        <div className='app-container'>
            <h2>Adventure Is The Best Therapy</h2>
            <p>Adventure is like medicine for the soul , feel better and help us grow. Explore new places and try new things, brings us joy and makes us stronger. Adventure is the best way to
                heal and feel happy.</p>
            <div className='video'>
                <div className='overlay'></div>
                <div className='playbutton'>
                    <img src={playico} className='play'></img>
                </div>
                <video autoPlay="autoplay" muted className='mx-auto video'>
                    <source src={video} type="video/mp4"></source>
                        Your browser does not support the video tag.
                        </video>
                    </div>
            </div>
            )
}

            export default Adventure