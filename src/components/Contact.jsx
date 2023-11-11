import React from 'react'
import { BsInstagram, BsYoutube, BsWhatsapp } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

const Contact = () => {
    return (
        // <div className='w-full'>
        //     <div className='max-w-screen-lg grid grid-cols-2 justify-center items-center mx-auto'>
        //         <form className='p-2 mx-auto'>
        //             <div className='grid grid-cols-2 gap-3'>
        //                 <div>
        //                     <input className='w-full border-slate-500 border-2 rounded-sm p-3' placeholder='Name' type="text" name="from_name" required />
        //                 </div>
        //                 <div>
        //                     <input className='w-full border-slate-500 border-2 rounded-sm p-3' placeholder='Email' type="email" name="email_name" required />
        //                 </div>
        //                 <div className='col-span-2'>
        //                     <textarea className='w-full border-slate-500 border-2 rounded-sm p-3 h-64' placeholder='Message' name="message" required />
        //                 </div>
        //             </div>
        //             <div className='w-full text-center mt-4 text-white'>
        //                 <button className='text-center p-2 rounded-lg mx-auto bg-gradient-to-r from-green-500 to-green-600 hover:scale-105 hover:ring-green-700 hover:ring-2' type="submit" value="Send" >Send Message</button>
        //             </div>
        //         </form>
        //         <div>
        //             Isi Formulir Jika Ada Yang Ingin Ditanyakan
        //         </div>
        //     </div>
        // </div>
        <div className='w-full h-screen'>
            <div className='max-w-screen-lg'>
                <div>
                    <p className='text-3xl'>Kontak Kami</p>
                </div>
                <div className='flex flex-col '>
                    <p className='flex items-center gap-1'><BsWhatsapp /> 0893939393</p>
                    <p className='flex items-center gap-1'><BsWhatsapp /> 0893939393</p>
                    <p className='flex items-center gap-1'><BsWhatsapp /> 0893939393</p>
                </div>
            </div>
        </div>
    )
}

export default Contact