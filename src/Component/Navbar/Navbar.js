import React from 'react'
import './Navbar.css'
import img from '../../images/png/logo.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <img src={img} className='img-fluid' />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">About Us</a>
                        </li>
                        <li className="nav-item mx-1">
                            
                            
                            <a className="nav-link active" aria-current="page" href="#">FAQs</a>
                        </li>
                        <li className="nav-item mx-1">
                            
                            <a className="nav-link active" aria-current="page" href="#">Blog</a>
                        </li>

                        
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">9090909090</a>
                        </li>
                        <li className="nav-item mx-1">
                            
                            <button  className='btn btn-outline-nav' >Sign in</button>
                        </li>
                        <li className="nav-item mx-1">
                            <button  className='btn btn-nav'>Register</button>
                        </li>

                        
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar