import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import VisiMisi from './about/VisiMisi';
import CarouselGallery from './CarouselGallery';
import Partnership from './about/Partnership';

const Home = () => {
    return (
        <div className=' h-auto  w-full'>
            <Carousel className=''
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
            >
                <div>
                    <img src="./assets/gallery/img1.jpeg" alt='imgaa' className='max-h-screen' />
                </div>
                <div>
                    <img src="./assets/gallery/img2.jpeg" alt='imgaa' className='max-h-screen ' />
                </div>
                <div>
                    <img src="./assets/gallery/img4.jpeg" alt='imgaa' className='max-h-screen ' />
                </div>
            </Carousel >
            <div className=''>
                <VisiMisi />
            </div>
            <div className='bg-gradient-to-br from-green-400 to-green-600'>
                <CarouselGallery />
            </div>
            <div>
                <Partnership />
            </div>
        </div>
    )
}

export default Home