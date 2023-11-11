import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"
import { RiArrowDropDownLine } from "react-icons/ri"
import { useState } from "react";

function Navbar() {

    const [nav, setNav] = useState(false);

    const navActiveStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'green' : 'black'
        }
    }

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
        <div className="navbar w-full md:block flex-row items-center justify-between md:p-2 bg-green-200 z-10">
            <div className="flex items-center md:block justify-between">
                <div className="flex flex-row p-5  items-center gap-5">
                    <div className=" md:w-20  w-16">
                        <img src="./assets/logo.png" alt="" />
                    </div>
                    <div className="items-center">
                        <p className="md:text-5xl text-semibold text-xl">KBIHU AL JAJAA</p>
                        <p className=" hidden md:block">Kelompok bimbingan ibadah haji dan umroh</p>
                    </div>
                </div>
                <ul className="md:flex gap-5 justify-end w-[90%] pb-2 mx-auto hidden">
                    <li><NavLink style={navActiveStyle} exact to="/">Home</NavLink></li>
                    <li className="group z-10">
                        <div className="relative">
                            <NavLink style={navActiveStyle} to="/about" className="flex items-center">Tentang Kami <RiArrowDropDownLine size={20} /></NavLink>
                            <div className="w-40  absolute pt-2 top-full -left-3 hidden bg-green-200 shadow-lg p-2 group-hover:block space-y-2 ">
                                <NavLink style={navActiveStyle} to="/visimisi" className="block px-4 py-2 text-sm border-b border-green-300 text-gray-700">Visi Misi</NavLink>
                                <NavLink style={navActiveStyle} to="/izinoperasional" className="block px-4 py-2 text-sm border-b border-green-300 text-gray-700">Izin Operasional</NavLink>
                                <NavLink style={navActiveStyle} to="/kepengurusan" className="block px-4 py-2 text-sm border-b border-green-300 text-gray-700">Kepengurusan</NavLink>
                                <NavLink style={navActiveStyle} to="/grafikjamaah" className="block px-4 py-2 text-sm border-b border-green-300 text-gray-700">Grafik Jamaah Haji KBIHU</NavLink>
                                <NavLink style={navActiveStyle} to="/partnership" className="block px-4 py-2 text-sm border-b border-green-300 text-gray-700">Patnership</NavLink>
                            </div>
                        </div>
                    </li>
                    <li className="group z-10">
                        <div className="relative">
                            <NavLink style={navActiveStyle} to="/about" className="flex items-center">Basis Data <RiArrowDropDownLine size={20} /></NavLink>
                            <div className="w-40  absolute pt-2 top-full -left-3 hidden bg-green-200 shadow-lg p-2 group-hover:block space-y-2 ">
                                <NavLink style={navActiveStyle} to="/about" className="block px-4 py-2 text-sm border-b border-green-300 text-gray-700">Cek No Porsi</NavLink>
                            </div>
                        </div>
                    </li>
                    <li><NavLink style={navActiveStyle} to="/gallery">Galery</NavLink></li>
                    <li><NavLink style={navActiveStyle} to="/regulasi">Regulasi</NavLink></li>
                    <li><NavLink style={navActiveStyle} to="/contact">Kontak</NavLink></li>
                    <li><NavLink style={navActiveStyle} to="/berita">Berita</NavLink></li>
                </ul >

                <div onClick={() => setNav(!nav)} className='cursor-pointer  pr-4 text-gray-800 md:hidden'>
                    {nav ? <GrClose size={30} /> : <GiHamburgerMenu size={30} />}
                </div>
            </div>

            <div>
                {nav && (
                    <ul className=" grid-cols-1 grid gap-5 justify-end w-full p-2 mx-auto ">
                        <li><NavLink style={navActiveStyle} onClick={() => setNav(!nav)} className="border-b border-green-300 flex " exact to="/">Home</NavLink></li>
                        <li className="group z-10">
                            <div className="relative">
                                <NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/about" className="flex border-b border-green-300 justify-between items-center">Tentang Kami <RiArrowDropDownLine size={20} /></NavLink>
                                <div className="w-full  md:absolute pt-2 top-full -left-3 hidden bg-green-200 shadow-lg p-2 group-hover:block space-y-2 ">
                                    <NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/visimisi" className="block border-b border-green-300 px-4 py-2 text-sm text-gray-700">Visi Misi</NavLink>
                                    <NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/izinoperasional" className="block border-b border-green-300 px-4 py-2 text-sm text-gray-700">Izin Operasional</NavLink>
                                    <NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/kepengurusan" className="block border-b border-green-300 px-4 py-2 text-sm text-gray-700">Kepengurusan</NavLink>
                                    <NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/grafikjamaah" className="block border-b border-green-300 px-4 py-2 text-sm text-gray-700">Grafik Jamaah Haji KBIHU</NavLink>
                                    <NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/partnership" className="block border-b border-green-300 px-4 py-2 text-sm text-gray-700">Patnership</NavLink>
                                </div>
                            </div>
                        </li>
                        <li className="group z-10">
                            <div className="relative">
                                <NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/about" className="flex border-b border-green-300 justify-between items-center">Basis Data <RiArrowDropDownLine size={20} /></NavLink>
                                <div className="w-full  md:absolute pt-2 top-full -left-3 hidden bg-green-200 shadow-lg p-2 group-hover:block space-y-2 ">
                                    <NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/about" className="block px-4 py-2 border-b border-green-300 text-sm text-gray-700">Cek No Porsi</NavLink>
                                </div>
                            </div>
                        </li>
                        <li><NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/gallery" className="border-b flex border-green-300">Galery</NavLink></li>
                        <li><NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/regulasi" className="border-b flex border-green-300">Regulasi</NavLink></li>
                        <li><NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/contact" className="border-b flex border-green-300">Kontak</NavLink></li>
                        <li><NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/berita" className="border-b flex border-green-300">Berita</NavLink></li>
                    </ul >
                )}
            </div>

        </div >
    )
}

export default Navbar;