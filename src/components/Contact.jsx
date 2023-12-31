import React from 'react'
import { BsInstagram, BsYoutube, BsWhatsapp } from "react-icons/bs"
import { MdEmail, MdMapsHomeWork } from "react-icons/md"

const Contact = () => {
    return (
        <div className='w-full h-auto '>
            <div className="container mx-auto m-2 md:px-6 max-w-screen-lg bg-gradient-to-br from-green-500 to-green-700">

                <section className="">
                    <div className="flex justify-center">
                        <div className="text-center md:max-w-xl lg:max-w-3xl">
                            <h2 className="mb-12 p-6 text-3xl font-semibold text-white">Kontak Kami</h2>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                            <form>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input type="text"
                                        className="peer  block min-h-[auto] w-full rounded border bg-white py-[0.32rem] px-3"
                                        id="exampleInput90" placeholder="Name" />
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input type="email"
                                        className="peer  block min-h-[auto] w-full rounded border bg-white py-[0.32rem] px-3"
                                        id="exampleInput91" placeholder="Email address" />
                                </div>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <textarea
                                        className="peer px-3 py-[0.32rem] block min-h-[auto] w-full rounded border bg-white"
                                        id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                                </div>
                                <button type="button"
                                    className="mb-6  w-full rounded-lg border-green-600 bg-green-900 bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white border-1">
                                    Send
                                </button>
                            </form>
                        </div>
                        <div className="w-full lg:w-7/12 pb-7 md:pb-0">
                            <div className="grid grid-cols-2 justify-center text-white gap-y-7">
                                <div className='flex items-center justify-center gap-x-3'>
                                    <BsWhatsapp size={50} /> 086726262626
                                </div>
                                <div className='flex items-center justify-center gap-x-3'>
                                    <BsInstagram size={50} /> 086726262626
                                </div>
                                <div className='flex items-center justify-center gap-x-3'>
                                    <BsYoutube size={50} /> 086726262626
                                </div>
                                <div className='flex items-center justify-center gap-x-3'>
                                    <MdEmail size={50} /> 086726262626
                                </div>
                                <div className='flex items-center justify-center gap-x-3'>
                                    <MdMapsHomeWork size={50} /> 086726262626
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        </div >
    )
}

export default Contact