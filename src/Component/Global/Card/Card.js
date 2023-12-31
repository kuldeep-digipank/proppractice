import Button from '../Button/Button';
import './Card.css'
import loc from '../../../images/svg/loc.svg'
import star from '../../../images/svg/star.svg'

function Card(prop) {
    return (
        <div className="card rounded blog-card">
            <div className="card-body">
                <div className='image'>
                    <img src={prop.image} className='img-fluid'></img>
                </div>
                <div className='d-flex justify-content-between my-2'>
                    <div>
                        <img src={loc}></img>
                        <>{prop.location}</>
                    </div>
                    <div>
                        
                        <img src={star}></img>
                        <>{prop.star}</>
                    </div>

                </div>
                <p className='mb-0'>
                    {prop.paragraph}
                    {prop.hasprice && <span className='readmore'>Read more...</span> }
                    
                </p>
                        
                {prop.price &&
                <div className='d-flex justify-content-between mt-4'>
                    <div className='font-weight-bold'>
                        Starts at
                        <span className='price'>&nbsp;&nbsp;Rs. {prop.price}</span>
                        
                    </div>
                    <Button>Buy Now</Button>
                </div>
                }
            </div>
        </div>
    )
}

export default Card;