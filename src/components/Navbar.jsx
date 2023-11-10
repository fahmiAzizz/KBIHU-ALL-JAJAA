import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"
import { RiArrowDropDownLine } from "react-icons/ri"
import { useState } from "react";

function Navbar() {

    const [nav, setNav] = useState(false);

    // const NavList = [
    //     {
    //         name: "Tentang Kami",
    //         to: ""
    //     },
    //     {
    //         name: "Basis Data",
    //         to: ""
    //     },
    //     {
    //         name: "Galery",
    //         to: ""
    //     },
    //     {
    //         name: "Regulasi",
    //         to: ""
    //     },
    //     {
    //         name: "Kontak Kami",
    //         to: ""
    //     },
    //     {
    //         name: "Berita",
    //         to: ""
    //     }
    // ]

    return (
        <div className="navbar w-full md:block flex-row items-center justify-between p-2 bg-green-200 ">
            <div className="flex items-center md:block justify-between">
                <div className="flex flex-row p-5  items-center gap-5">
                    <div className=" md:w-20  w-16">
                        <img src="./assets/logo.png" alt="" />
                    </div>
                    <div className="items-center">
                        <p className="md:text-5xl  text-2xl">KBIHU AL JAJAA</p>
                        <p className=" hidden md:block">Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet.</p>
                    </div>
                </div>
                <ul className="md:flex gap-5 justify-end w-[90%] pb-2 mx-auto hidden">
                    <li><Link exact to="/">Home</Link></li>
                    <li className="group">
                        <div className="relative">
                            <Link to="/about" className="flex items-center">Tentang Kami <RiArrowDropDownLine size={20} /></Link>
                            <div className="w-40  absolute pt-2 top-full -left-3 hidden bg-green-200 shadow-lg p-2 group-hover:block space-y-2 ">
                                <Link to="/visimisi" className="block px-4 py-2 text-sm border-b border-green-300 text-gray-700">Visi Misi</Link>
                                <Link to="/izinoperasional" className="block px-4 py-2 text-sm border-b border-green-300 text-gray-700">Izin Operasional</Link>
                                <Link to="/kepengurusan" className="block px-4 py-2 text-sm border-b border-green-300 text-gray-700">Kepengurusan</Link>
                                <Link to="/grafikjamaah" className="block px-4 py-2 text-sm border-b border-green-300 text-gray-700">Grafik Jamaah Haji KBIHU</Link>
                                <Link to="/partnership" className="block px-4 py-2 text-sm border-b border-green-300 text-gray-700">Patnership</Link>
                            </div>
                        </div>
                    </li>
                    <li className="group">
                        <div className="relative">
                            <Link to="/about" className="flex items-center">Basis Data <RiArrowDropDownLine size={20} /></Link>
                            <div className="w-40  absolute pt-2 top-full -left-3 hidden bg-green-200 shadow-lg p-2 group-hover:block space-y-2 ">
                                <Link to="/about" className="block px-4 py-2 text-sm border-b border-green-300 text-gray-700">Cek No Porsi</Link>
                            </div>
                        </div>
                    </li>
                    <li><Link to="/gallery">Galery</Link></li>
                    <li><Link to="/regulasi">Regulasi</Link></li>
                    <li><Link to="/kontak">Kontak</Link></li>
                    <li><Link to="/berita">Berita</Link></li>
                </ul >

                <div onClick={() => setNav(!nav)} className='cursor-pointer  pr-4 text-gray-800 md:hidden'>
                    {nav ? <GrClose size={30} /> : <GiHamburgerMenu size={30} />}
                </div>
            </div>

            <div>
                {nav && (
                    <ul className=" grid-cols-1 grid gap-5 justify-end w-full pb-2 mx-auto ">
                        <li><Link className="border-b border-green-300 flex " exact to="/">Home</Link></li>
                        <li className="group">
                            <div className="relative">
                                <Link to="/about" className="flex border-b border-green-300 justify-between items-center">Tentang Kami <RiArrowDropDownLine size={20} /></Link>
                                <div className="w-full  md:absolute pt-2 top-full -left-3 hidden bg-green-200 shadow-lg p-2 group-hover:block space-y-2 ">
                                    <Link to="/visimisi" className="block border-b border-green-300 px-4 py-2 text-sm text-gray-700">Visi Misi</Link>
                                    <Link to="/izinoperasional" className="block border-b border-green-300 px-4 py-2 text-sm text-gray-700">Izin Operasional</Link>
                                    <Link to="/kepengurusan" className="block border-b border-green-300 px-4 py-2 text-sm text-gray-700">Kepengurusan</Link>
                                    <Link to="/grafikjamaah" className="block border-b border-green-300 px-4 py-2 text-sm text-gray-700">Grafik Jamaah Haji KBIHU</Link>
                                    <Link to="/partnership" className="block border-b border-green-300 px-4 py-2 text-sm text-gray-700">Patnership</Link>
                                </div>
                            </div>
                        </li>
                        <li className="group">
                            <div className="relative">
                                <Link to="/about" className="flex border-b border-green-300 justify-between items-center">Basis Data <RiArrowDropDownLine size={20} /></Link>
                                <div className="w-full  md:absolute pt-2 top-full -left-3 hidden bg-green-200 shadow-lg p-2 group-hover:block space-y-2 ">
                                    <Link to="/about" className="block px-4 py-2 border-b border-green-300 text-sm text-gray-700">Cek No Porsi</Link>
                                </div>
                            </div>
                        </li>
                        <li><Link to="/gallery" className="border-b flex border-green-300">Galery</Link></li>
                        <li><Link to="/regulasi" className="border-b flex border-green-300">Regulasi</Link></li>
                        <li><Link to="/contact" className="border-b flex border-green-300">Kontak</Link></li>
                        <li><Link to="/berita" className="border-b flex border-green-300">Berita</Link></li>
                    </ul >
                )}
            </div>

        </div >
    )
}

export default Navbar;