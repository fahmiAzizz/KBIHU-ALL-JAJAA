import React from 'react'

const Gallery = () => {
    return (
        <div className='flex flex-col w-full h-auto'>
            <p className='text-center text-4xl font-semibold my-3'>Gallery</p>
            <div className='grid items-center justify-evenly grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-3'>
                <div className='hover:scale-105 duration-300'>
                    <img src="./assets/gallery/img1.jpeg" alt="" />
                </div>
                <div className='hover:scale-105 duration-300'>
                    <img src="./assets/gallery/img2.jpeg" alt="" />
                </div>
                <div className='hover:scale-105 duration-300'>
                    <img src="./assets/gallery/img3.jpeg" alt="" />
                </div>
                <div className='hover:scale-105 duration-300'>
                    <img src="./assets/gallery/img4.jpeg" alt="" />
                </div>
                <div className='hover:scale-105 duration-300'>
                    <img src="./assets/gallery/img5.jpeg" alt="" />
                </div>
                <div className='hover:scale-105 duration-300'>
                    <img src="./assets/gallery/img7.jpeg" alt="" />
                </div>
                <div className='hover:scale-105 duration-300'>
                    <img src="./assets/gallery/img8.jpeg" alt="" />
                </div>
                <div className='hover:scale-105 duration-300'>
                    <img src="./assets/gallery/img12.jpeg" alt="" />
                </div>
                <div className='hover:scale-105 duration-300'>
                    <img src="./assets/gallery/img15.jpeg" alt="" />
                </div>
                <div className='hover:scale-105 duration-300'>
                    <img src="./assets/gallery/img13.jpeg" alt="" />
                </div>
                <div className='hover:scale-105 duration-300'>
                    <img src="./assets/gallery/img6.jpeg" alt="" />
                </div>
                <div className='hover:scale-105 duration-300'>
                    <img src="./assets/gallery/img16.jpeg" alt="" />
                </div>
                <div className='hover:scale-105 duration-300'>
                    <img src="./assets/gallery/img14.jpeg" alt="" />
                </div>
                <div className='hover:scale-105 duration-300'>
                    <img src="./assets/gallery/img10.jpeg" alt="" />
                </div>
                <div className='hover:scale-105 duration-300'>
                    <img src="./assets/gallery/img17.jpeg" alt="" />
                </div>
                <div className='hover:scale-105 duration-300'>
                    <img src="./assets/gallery/img9.jpeg" alt="" />
                </div>
                <div className='hover:scale-105 duration-300'>
                    <img src="./assets/gallery/img11.jpeg" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Gallery