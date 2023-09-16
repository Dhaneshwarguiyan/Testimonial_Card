import Card from './Card.js';
import './main.css';
import { useState } from 'react';



export default function Testimonials({ details }) {
    const [id, setId] = useState(0);
    function leftHandler() {
        if (id - 1 < 0) {
            setId(details.length - 1);
        }
        else {
            setId(id - 1);
        }
    }
    function rightHandler() {
        if (id + 1 >= details.length) {
            setId(0);
        }
        else {
            setId(id + 1);
        }
    }

    function randomHandler() {
        let index = Math.floor(Math.random() * details.length);
        setId(index);
    }
    return (
        <div className='hero'>
            <div className='testimonials'>
                <div className='top-header'>
                    <span className='main-header'>Our Testimonials</span>
                    <div className="header-line"></div>
                </div>
                <Card review={details[id]} rightHandler={rightHandler} leftHandler={leftHandler} randomHandler={randomHandler} />

            </div>
        </div>
    );
}