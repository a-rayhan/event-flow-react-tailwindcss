import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars } from 'react-icons/fa';
import { IoMdMicrophone } from "react-icons/io";



const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(!false);

    return (
        <div>
            <nav className="max-w-7xl mx-auto px-5 flex justify-between items-center py-8 md:py-16">
                <NavLink to='/' className='text-[40px] font-bold flex justify-center items-center'>
                    <IoMdMicrophone className="text-[#4845e3] text-5xl" />
                    <p>
                        Event<span className="text-[#4845e3]">Flow</span>
                    </p>
                </NavLink>

                <div className="hidden xl:flex justify-center items-center gap-9 text-lg font-medium">
                    <NavLink to='/' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#ff566a]" : ""}>
                        Home
                    </NavLink>

                    <NavLink to='/services' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#ff566a]" : ""}>
                        Services
                    </NavLink>

                    <NavLink to='/schedules' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#ff566a]" : ""}>
                        Schedules
                    </NavLink>

                    <NavLink to='/about' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#ff566a]" : ""}>
                        About
                    </NavLink>

                    <NavLink to='/tickets' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#ff566a]" : ""}>
                        Tickets
                    </NavLink>
                </div>

                <div className="hidden xl:block text-lg font-medium">
                    <NavLink to='/register' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "bg-[#ff566a] text-white py-4 px-8 rounded-md" : "bg-[#e8e8e8] py-4 px-8 rounded-md hover:bg-[#ff566a] hover:text-white"}>
                        Register
                    </NavLink>
                </div>

                <div onClick={() => setToggleMenu(!toggleMenu)} className="xl:hidden flex items-center cursor-pointer text-2xl">
                    {
                        toggleMenu === true ? <div className="bg-[#4845e3] p-4 rounded-lg text-white"><FaBars /></div> : <div className="bg-[#ff566a] p-4 rounded-lg text-white"><FaBars /></div>
                    }

                    <div className={`xl:hidden flex flex-col absolute top-32 z-40 left-0 w-full gap-6 text-lg font-medium bg-white shadow-lg px-8 py-12 rounded-xl ${toggleMenu ? 'hidden' : ''}`}>
                        <NavLink to='/' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#ff566a]" : ""}>
                            Home
                        </NavLink>

                        <NavLink to='/services' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#ff566a]" : ""}>
                            Services
                        </NavLink>

                        <NavLink to='/schedules' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#ff566a]" : ""}>
                            Schedules
                        </NavLink>

                        <NavLink to='/about' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#ff566a]" : ""}>
                            About
                        </NavLink>

                        <NavLink to='/tickets' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#ff566a]" : ""}>
                            Tickets
                        </NavLink>

                        <div className="xl:hidden text-lg font-medium mt-6">
                            <NavLink to='/register' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "bg-[#ff566a] text-white py-4 px-8 rounded-md" : "bg-[#e8e8e8] py-4 px-8 rounded-md hover:bg-[#ff566a] hover:text-white"}>
                                Register
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;