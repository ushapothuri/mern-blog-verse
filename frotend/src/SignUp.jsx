const SignUp = () => {
    return (
        <div className="flex items-center flex-col mt-10 gap-5">
            <h1 className="text-2xl text-blue-600 font-bold ">Join BlogVerse </h1>
            <p className="text-gray-600 text-centre text-xl font-semibold text-center">create your account and <br />start your Blogging journey today</p>
            <form className="flex flex-col border-black w-1/4 py-7  border-1 items-center gap-5 mb-5 rounded-2xl">
                <div className="w-[90%] flex flex-col gap-2" >
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <input type="text"
                        placeholder="enter your Full name"
                        className="border-1 w-full border-gray-700 px-4 py-3 rounded-2xl focus:outline-none focus:border-purple-500" />
                </div>

                <div className="w-[90%] flex flex-col gap-2" >
                    <p className="text-md text-gray-700 font-semibold">Email</p>
                    <input type="email"
                        placeholder="enter your email"
                        className="border-1 w-full border-gray-700 px-4 py-3 rounded-2xl focus:outline-none focus:border-purple-500" />
                </div>

                <div className="w-[90%] flex flex-col gap-2" >
                    <p className="text-md text-gray-700 font-semibold">Password</p>
                    <input type="password"
                        placeholder="enter your password"
                        className="border-1 w-full border-gray-700 px-4 py-3 rounded-2xl focus:outline-none focus:border-purple-500" />
                </div>

                <div className="w-[90%] flex flex-col gap-2" >
                    <p className="text-md text-gray-700 font-semibold">Confirm your  Password </p>
                    <input type="Password"
                        placeholder="Confirm your password"
                        className="border-1 w-full border-gray-700 px-4 py-3 rounded-2xl focus:outline-none focus:border-purple-500" />
                </div>

                <div className="flex gap-2 border-1  border-gray-800 w-[90%] py-5 px-4 rounded-xl items-center justify-center">
                    <input type="checkbox" name="" id=" "
                        className="h-5 w-5" />
                    <p>i agree to terms and conditions</p>
                </div>

                <button className="w-[90%] bg-purple-500 py-4 font-semibold text-white rounded-xl">Create Account</button>

                <div className=" border-[0.5px] border-gray-400 w-[90%] mt-4"></div>

                <p className="text-gray-700  font-semibold">Already have an account? <span className="text-purple-500">Sign In here</span></p>

                <button className="text-gray-700 font-semibold hover:bg-gray-200 py-4 w-[90%] rounded-xl cursor-pointer "> back to home</button>


            </form>
        </div>

    )
}

export default SignUp