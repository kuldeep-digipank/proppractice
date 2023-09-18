import Button from '../Button/Button';
import './Card.css'

function Card(prop) {
    return (
        <div className="card rounded">
            <div className="card-body">
                <div className='image'>
                    <img src={prop.image} className='img-fluid'></img>
                </div>
                <div className='d-flex justify-content-between'>
                    <div>
                        <></>
                        <>{prop.location}</>
                    </div>
                    <div>
                        <>star</>
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
                    <Button></Button>
                </div>
                }
            </div>
        </div>
    )
}

export default Card;