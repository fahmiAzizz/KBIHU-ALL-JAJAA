import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"
import { RiArrowDropDownLine } from "react-icons/ri"
import { useState } from "react";

function Navbar() {

    const [nav, setNav] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [dropdownVisible2, setDropdownVisible2] = useState(false);


    const navActiveStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'bold',
            color: isActive ? '	#f1c232' : '',
        }
    }

    const handleDropdownClick = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleDropdownClick2 = () => {
        setDropdownVisible2(!dropdownVisible2);
    };

    return (
        <div className="navbar w-full md:block flex-row items-center justify-between md:p-2 bg-gradient-to-r from-green-600 to-green-700 text-white z-10">
            <div className="flex items-center md:block justify-between">
                <div className="flex flex-row p-5  items-center gap-5">
                    <div className=" md:w-20  w-16">
                        <img src="./assets/logo.png" alt="" />
                    </div>
                    <div className="items-center">
                        <p className="md:text-5xl text-bold text-xl">KBIHU AL JAJAA</p>
                        <p className=" hidden md:block">Kelompok bimbingan ibadah haji dan umroh</p>
                    </div>
                </div>
                <ul className="md:flex gap-5 justify-end w-[90%] pb-2 mx-auto hidden text-whitetext-lg">
                    <li><NavLink style={navActiveStyle} className="nav-link" exact to="/">Home</NavLink></li>
                    <li className="group z-10">
                        <div className="relative">
                            <NavLink style={navActiveStyle} to="/about" className="flex items-center nav-link">Tentang Kami <RiArrowDropDownLine size={20} /></NavLink>
                            <div className="w-40  absolute pt-2 top-full -left-3 hidden bg-green-700 shadow-lg p-2 group-hover:block space-y-2 ">
                                <NavLink style={navActiveStyle} to="/visimisi" className="block px-4 py-2 text-sm border-b border-green-800 nav-link ">Visi Misi</NavLink>
                                <NavLink style={navActiveStyle} to="/izinoperasional" className="block px-4 py-2 text-sm border-b border-green-800 nav-link ">Izin Operasional</NavLink>
                                <NavLink style={navActiveStyle} to="/kepengurusan" className="block px-4 py-2 text-sm border-b border-green-800 nav-link ">Kepengurusan</NavLink>
                                <NavLink style={navActiveStyle} to="/grafikjamaah" className="block px-4 py-2 text-sm border-b border-green-800 nav-link ">Grafik Jamaah Haji KBIHU</NavLink>
                                <NavLink style={navActiveStyle} to="/partnership" className="block px-4 py-2 text-sm border-b border-green-800 nav-link ">Patnership</NavLink>
                            </div>
                        </div>
                    </li>
                    <li className="group z-10">
                        <div className="relative">
                            <NavLink style={navActiveStyle} to="/about" className="flex items-center nav-link">Basis Data <RiArrowDropDownLine size={20} /></NavLink>
                            <div className="w-40  absolute pt-2 top-full -left-3 hidden bg-green-700 shadow-lg p-2 group-hover:block space-y-2 ">
                                <NavLink style={navActiveStyle} to="/about" className="block px-4 py-2 text-sm border-b border-green-800 nav-link ">Cek No Porsi</NavLink>
                            </div>
                        </div>
                    </li>
                    <li><NavLink style={navActiveStyle} className="nav-link" to="/gallery">Galery</NavLink></li>
                    <li><NavLink style={navActiveStyle} className="nav-link" to="/regulasi">Regulasi</NavLink></li>
                    <li><NavLink style={navActiveStyle} className="nav-link" to="/contact">Kontak</NavLink></li>
                    <li><NavLink style={navActiveStyle} className="nav-link" to="/berita">Berita</NavLink></li>
                </ul >

                <div onClick={() => setNav(!nav)} className='cursor-pointer  pr-4 text-white md:hidden'>
                    {nav ? <GrClose size={30} /> : <GiHamburgerMenu size={30} />}
                </div>
            </div>

            <div>
                {nav && (
                    <ul className=" grid-cols-1 grid gap-5 justify-end w-full p-2 mx-auto ">
                        <li><NavLink style={navActiveStyle} onClick={() => setNav(!nav)} className="border-b border-green-800 nav-link flex " exact to="/">Home</NavLink></li>
                        <li className="group z-10">
                            <div className="relative">
                                <div onClick={
                                    handleDropdownClick2
                                } className="flex border-b border-green-800 nav-link justify-between items-center">Tentang Kami <RiArrowDropDownLine size={20} /></div>
                                <div className={`md:absolute pt-2 top-full  ${dropdownVisible2 ? "relative w-full" : "hidden"} bg-green-600 shadow-lg p-2 space-y-2`}>
                                    <NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/visimisi" className="block border-b w-full border-green-800 nav-link px-4 py-2 text-sm ">Visi Misi</NavLink>
                                    <NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/izinoperasional" className="block border-b border-green-800 nav-link px-4 py-2 text-sm ">Izin Operasional</NavLink>
                                    <NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/kepengurusan" className="block border-b border-green-800 nav-link px-4 py-2 text-sm ">Kepengurusan</NavLink>
                                    <NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/grafikjamaah" className="block border-b border-green-800 nav-link px-4 py-2 text-sm ">Grafik Jamaah Haji KBIHU</NavLink>
                                    <NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/partnership" className="block border-b border-green-800 nav-link px-4 py-2 text-sm ">Patnership</NavLink>
                                </div>
                            </div>
                        </li>
                        <li className="group z-10">
                            <div className="relative">
                                <div onClick={
                                    handleDropdownClick
                                } className="flex border-b border-green-800 nav-link font-bold justify-between items-center">Basis Data <RiArrowDropDownLine size={20} /></div>
                                <div className={` md:absolute pt-2 top-full ${dropdownVisible ? "relative w-full" : "hidden"} bg-green-600 shadow-lg p-2 space-y-2`}>
                                    <NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/about" className="block px-4 py-2 border-b border-green-800 nav-link text-sm ">Cek No Porsi</NavLink>
                                </div>
                            </div>
                        </li>
                        <li><NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/gallery" className="border-b flex border-green-800 nav-link">Galery</NavLink></li>
                        <li><NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/regulasi" className="border-b flex border-green-800 nav-link">Regulasi</NavLink></li>
                        <li><NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/contact" className="border-b flex border-green-800 nav-link">Kontak</NavLink></li>
                        <li><NavLink style={navActiveStyle} onClick={() => setNav(!nav)} to="/berita" className="border-b flex border-green-800 nav-link">Berita</NavLink></li>
                    </ul >
                )}
            </div>

        </div >
    )
}

export default Navbar;