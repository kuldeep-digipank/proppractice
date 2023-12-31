import './Contact.css'
import img from '../../images/png/Contact.png'
import Button from '../Global/Button/Button';
function Contact() {
    return (
        <div className="" style={{ backgroundImage: `url(${img})` }}>
            <div className='contact app-container'>
                <div className='row'>
                    <div className='col-lg-6 d-flex align-items-center'>
                        <p>Feel Free to Contact us, or
                            Just Fill in Your Details</p>
                    </div>
                    <div className='col-lg-6'>
                        <div className=' contact-card m-2 my-5'>
                            <div className='card-body'>
                                <div className='contact-form-group'>
                                    <input className='contact-form' placeholder='Your Full Name' />

                                </div>

                                <div className='contact-form-group'>
                                    <input className='contact-form' placeholder='Your Email ID' />

                                </div>

                                <div className='contact-form-group'>
                                    <input className='contact-form' placeholder='Your Mobile Number' />

                                </div>

                                <div className='d-flex justify-content-end butn'>
                                    <Button>Register</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Contact;