import React from 'react'

const About = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center'>
            <p className='text-3xl text-center font-semibold p-8'>Tentang Kami</p>
            <div className='p-10  bg-gradient-to-r to-green-500 from-green-700 flex flex-col md:flex-row justify-center items-center mx-auto '>
                <div>
                    <img src="../assets/gallery/img4.jpeg" alt="" />
                </div>
                <div className='text-white text-justify p-2 md:p-5 font-semibold'>
                    <p className='text-2xl'>KBIHU AL JAJAA</p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum harum possimus et incidunt. Officiis voluptatem fuga obcaecati odit quae harum deserunt velit amet pariatur dolorum, magni quidem inventore provident itaque ab, asperiores totam ad at voluptates nulla! Delectus culpa quidem officia animi nemo deleniti, placeat dolores, veniam esse tenetur quae.
                </div>
            </div>
        </div>
    )
}

export default About