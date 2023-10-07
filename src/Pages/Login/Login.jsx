import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-5 py-20 md:py-28 lg:py-36">
                <div className="bg-[#211f54] max-w-3xl mx-auto p-10 md:p-20 rounded-3xl">
                    <div>
                        <h2 className="text-center text-2xl md:text-4xl font-semibold text-white mb-3">
                            Password Protection
                        </h2>

                        <p className="text-lg text-white text-center mb-8">
                            This page is protected. If you haven't account yet , please <NavLink to='/register' className='underline text-[#ff566a]'>Register</NavLink> your account. Or already have, please login below.
                        </p>
                    </div>

                    <div>
                        <form action="">
                            <div className="w-full md:w-[500px] mx-auto mb-3">
                                <div className="flex flex-col">
                                    <label className="text-white mb-1">
                                        Email
                                    </label>

                                    <input type="email" name="email" placeholder="Enter your email" className="max-w-2xl bg-[#5e5beb] py-4 px-6 rounded-lg text-white placeholder:text-lg placeholder:text-white" />
                                </div>
                            </div>

                            <div className="md:w-[500px] mx-auto">
                                <div className="flex flex-col">
                                    <label className="text-white mb-1">
                                        Password
                                    </label>

                                    <input type="password" name="password" placeholder="Enter your password" className="max-w-2xl bg-[#5e5beb] py-4 px-6 rounded-lg text-white placeholder:text-lg placeholder:text-white" />
                                </div>
                            </div>

                            <div className="flex justify-center items-center mt-7">
                                <button className="text-xl bg-[#ff566a] py-4 w-[500px] rounded-xl text-white font-medium">
                                    Login
                                </button>
                            </div>
                        </form>

                        <div>
                            <p className="text-white text-center mt-6">
                                If you're new here, please <NavLink to='/register' className='underline text-[#ff566a]'>Register</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;