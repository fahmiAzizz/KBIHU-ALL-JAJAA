import React, { useState, useEffect } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import 'pure-react-carousel/dist/react-carousel.es.css'


const CarouselGallery = () => {


    const [visibleSlides, setVisibleSlides] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setVisibleSlides(1);
            } else if (window.innerWidth < 1024) {
                setVisibleSlides(2);
            } else {
                setVisibleSlides(3);
            }
        };

        // Inisialisasi
        handleResize();

        // Tambahkan event listener untuk mendeteksi perubahan ukuran layar
        window.addEventListener('resize', handleResize);

        // Pastikan untuk membersihkan event listener saat komponen unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='text-white flex w-full flex-col justify-center  p-5 mx-auto h-auto'>
            <p className='text-center text-3xl font-semibold p-10'>Gallery</p>
            <div className='relative'>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={5}
                    visibleSlides={visibleSlides}
                    className='  mx-auto'
                    infinite={true}
                >
                    <div className='max-w-screen-[90%]  mx-auto text-center relative'>
                        <Slider className=''>
                            <Slide className='' index={0}>
                                <div className='mx-auto  p-2 rounded-lg'>
                                    <img src='./assets/gallery/img1.jpeg' className=' mx-auto' alt="" />
                                </div>
                            </Slide>
                            <Slide className='' index={1}>
                                <div className='mx-auto  p-2 rounded-lg'>
                                    <img src='./assets/gallery/img2.jpeg' className=' mx-auto' alt="" />
                                </div>
                            </Slide>
                            <Slide className='' index={2}>
                                <div className='mx-auto  p-2 rounded-lg'>
                                    <img src='./assets/gallery/img3.jpeg' className=' mx-auto' alt="" />
                                </div>
                            </Slide>
                            <Slide className='' index={3}>
                                <div className='mx-auto  p-2 rounded-lg'>
                                    <img src='./assets/gallery/img4.jpeg' className=' mx-auto' alt="" />
                                </div>
                            </Slide>
                            <Slide className='' index={4}>
                                <div className='mx-auto  p-2 rounded-lg'>
                                    <img src='./assets/gallery/img5.jpeg' className=' h-2/3 mx-auto' alt="" />
                                </div>
                            </Slide>
                        </Slider>
                    </div>
                    <ButtonBack className='hidden md:block absolute hover:text-green-900 hover:scale-110 -left-6 bottom-[60%]'><MdArrowBackIosNew size={30} /></ButtonBack>
                    <ButtonNext className='hidden md:block absolute hover:text-green-900 hover:scale-110 -right-6 top-[35%]'><MdArrowForwardIos size={30} /></ButtonNext>
                </CarouselProvider>
            </div>
        </div>
    )
}

export default CarouselGallery