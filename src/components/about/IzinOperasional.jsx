import React from 'react'

const IzinOperasional = () => {
    return (
        <div className='w-full h-auto flex flex-col bg-slate-200 p-2'>
            <p className='text-center text-4xl font-semibold my-3'>Izin Operasional</p>
            <div className='max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center mx-auto'>
                <div>
                    <img src="./assets/izin/izinOP1.png" alt="" />
                </div>
                <div>
                    <img src="./assets/izin/izinOP1.png" alt="" />
                </div>
                <div>
                    <img src="./assets/izin/izinOP1.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default IzinOperasional