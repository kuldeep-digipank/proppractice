import img from '../../images/png/testimonial.png'
function Testimonial()
{
    return(
        <div className='app-container my-5'>
            <h2 className='text-center'>Why to choose us</h2>
            <div className='row'>
                <div className='col-lg-6'>
                    <img src={img} className='img-fluid'></img>
                </div>
                <div className='col-lg-6 d-flex align-items-center'>
                    <div className='mx-4'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five</p>
                    <h2 >Juliet Edison</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonial;