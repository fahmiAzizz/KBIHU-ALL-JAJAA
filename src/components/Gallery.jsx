import React from 'react'

const Gallery = () => {
    return (
        <div className='flex flex-col w-full h-auto'>
            <p className='text-3xl font-bold text-center p-5'>Gallery</p>
            <div className='grid items-center justify-evenly grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3'>
                <div>
                    <img src="./assets/gallery/img1.jpeg" alt="" />
                </div>
                <div>
                    <img src="./assets/gallery/img1.jpeg" alt="" />
                </div>
                <div>
                    <img src="./assets/gallery/img1.jpeg" alt="" />
                </div>
                <div>
                    <img src="./assets/gallery/img1.jpeg" alt="" />
                </div>
                <div>
                    <img src="./assets/gallery/img1.jpeg" alt="" />
                </div>
                <div>
                    <img src="./assets/gallery/img1.jpeg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Gallery