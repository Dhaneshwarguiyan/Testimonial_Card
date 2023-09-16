import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


export default function Card(props) {
    let review = props.review;
    let randomHandler = props.randomHandler;
    let rightHandler = props.rightHandler;
    let leftHandler = props.leftHandler;
    return (
        <div className='card'>
            <div>
                <img src={review.image} className='image' />
                <div className='image-circle'></div>
            </div>
            <div className='card-content'>
                <div className='name'>{review.name}</div>
                <div className='job'>{review.job}</div>
                <div>

                </div>
                <div>
                    <FaQuoteLeft className='quote' />
                </div>
                <p className='card-text'>{review.text}</p>
                <div>
                    <FaQuoteRight className='quote' />
                </div>



                <div className='main-slider'>

                    <FaChevronLeft className='slider' onClick={leftHandler} />



                    <FaChevronRight className='slider' onClick={rightHandler} />

                </div>
                <button onClick={randomHandler} className='buttton'>
                    Surprise Me
                </button>

            </div>
        </div>
    );
}