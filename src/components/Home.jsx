import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import VisiMisi from './about/VisiMisi';

const Home = () => {
    return (
        <div className=' h-auto  w-full'>
            <Carousel className=''
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
            >
                <div>
                    <img src="./assets/home1.jpg" alt='imgaa' className='max-h-screen' />
                </div>
                <div>
                    <img src="./assets/home2.jpg" alt='imgaa' className='max-h-screen ' />
                </div>
                <div>
                    <img src="./assets/home3.jpg" alt='imgaa' className='max-h-screen ' />
                </div>
            </Carousel >
            <div>
                <VisiMisi />
            </div>
        </div>
    )
}

export default Home