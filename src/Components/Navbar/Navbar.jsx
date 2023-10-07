import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaBars } from 'react-icons/fa';
import { IoMdMicrophone } from "react-icons/io";
import { AuthContext } from "../../Hooks/AuthProvider";



const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(!false);

    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }

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

                    <NavLink to='/about' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#ff566a]" : ""}>
                        About
                    </NavLink>

                    <NavLink to='/services' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#ff566a]" : ""}>
                        Services
                    </NavLink>

                    <NavLink to='/schedules' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#ff566a]" : ""}>
                        Schedules
                    </NavLink>

                    <NavLink to='/tickets' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#ff566a]" : ""}>
                        Tickets
                    </NavLink>
                </div>

                <div className="hidden xl:block text-lg font-medium">
                    {
                        user ? <>
                            <div className="flex justify-center items-center gap-4 cursor-pointer">
                                <div className="dropdown dropdown-end">
                                    <div className="avatar online m-1" tabIndex={0}>
                                        <div className="w-14 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
                                        <li className="py-4 px-8">{user?.displayName}</li>
                                        <li className="py-4 px-8">{user?.email}</li>
                                        <li>
                                            <NavLink onClick={handleLogOut} to='/login' className='py-4 px-8'>
                                                Logout
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </> : <>
                            <NavLink to='/login' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "bg-[#ff566a] text-white py-4 px-8 rounded-md" : "bg-[#ff566a] py-4 px-8 text-white rounded-md hover:bg-[#ff566a] hover:text-white"}>
                                Login
                            </NavLink>
                        </>
                    }
                </div>

                <div onClick={() => setToggleMenu(!toggleMenu)} className="xl:hidden flex items-center cursor-pointer text-2xl">
                    {
                        toggleMenu === true ? <div className="bg-[#4845e3] p-4 rounded-lg text-white"><FaBars /></div> : <div className="bg-[#ff566a] p-4 rounded-lg text-white"><FaBars /></div>
                    }

                    <div className={`xl:hidden flex flex-col absolute top-32 z-40 left-0 w-full gap-6 text-lg font-medium bg-white shadow-lg px-8 py-12 rounded-xl ${toggleMenu ? 'hidden' : ''}`}>
                        <NavLink to='/' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#ff566a]" : ""}>
                            Home
                        </NavLink>

                        <NavLink to='/about' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#ff566a]" : ""}>
                            About
                        </NavLink>

                        <NavLink to='/services' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#ff566a]" : ""}>
                            Services
                        </NavLink>

                        <NavLink to='/schedules' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#ff566a]" : ""}>
                            Schedules
                        </NavLink>

                        <NavLink to='/tickets' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "text-[#ff566a]" : ""}>
                            Tickets
                        </NavLink>

                        <div className="xl:hidden text-lg font-medium mt-6">
                            {
                                user ? <>
                                    <div className="flex flex-col xl:flex-row xl:items-center items-start gap-4">

                                        <NavLink onClick={handleLogOut} to='/login' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "bg-[#e8e8e8] text-black py-4 px-8 rounded-md" : "bg-[#e8e8e8] py-4 px-8 rounded-md hover:bg-[#ff566a] hover:text-white"}>
                                            Logout
                                        </NavLink>

                                        <p>
                                            {user?.displayName || user.email}
                                        </p>
                                    </div>
                                </> : <>
                                    <NavLink to='/login' className={({ isActive, isPending }) => isPending ? "text-black" : isActive ? "bg-[#ff566a] text-white py-4 px-8 rounded-md" : "bg-[#e8e8e8] py-4 px-8 rounded-md hover:bg-[#ff566a] hover:text-white"}>
                                        Login
                                    </NavLink>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;