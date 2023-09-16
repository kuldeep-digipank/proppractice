    import Card from '../Global/Card/Card';
import './TrendingDestination.css';
import img from '../../images/png/trendingDestination.png';
function TrendingDestination()
{
    const loc="delhi";
    const rating="4.5";
    const para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standa rd dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standa rd dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ";
    const price = "10,000";
    return(
        <>
            <div className='trendingdestination'>
                <h2>Trending Destination</h2>
                <p>
                Experience of India's trending destinations, where ancient traditions intertwine with modern charm, offering a rich tapestry
                of cultural richness and breathtaking natural beauty for travelers to indulge in.
                </p>
                <h2 className='text-end'>View Blogs</h2>
                <div className='row'>
                    <div className='col-lg-4'>
                    <Card image={img} location={loc} star={rating} paragraph={para} price={price}></Card>
                    </div>
                    <div className='col-lg-4'>
                    <Card image={img} location={loc} star={rating} paragraph={para} price={price}></Card>
                    </div>
                    <div className='col-lg-4'>
                    <Card image={img} location={loc} star={rating} paragraph={para} price={price}></Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingDestination;