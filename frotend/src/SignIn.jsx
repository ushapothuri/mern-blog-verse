const SignIn = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center mt-40 h-110 w-100  gap-3 border-1 rounded-xl ">
                <div className="flex flex-col items-center gap-0.5">
                    <h1 className="font-bold text-2xl text-gray-900  mt-5">Sign In</h1>
                    <p className=" text-gray-400">Access your account</p>
                </div>

                <div className="w-[85%] flex flex-col gap-2" >
                    <p className=" text-gray-400 font-semibold">Email Address</p>
                    <input type="email"
                        placeholder="enter your email"
                        className="border-1 w-full border-gray-700 px-4 py-3 rounded-2xl" />
                </div>

                <div className="flex flex-col gap-2 w-[85%]">
                    <p className="text-gray-500 font-semibold ">Password</p>
                    <input type="password"
                        placeholder="enter password"
                        className="border-1 border-gray-700 px-4 py-3 rounded-xl " />
                </div>

                <div className="flex w-full justify-around ">
                    <div className="flex">
                        <input type="checkbox" />
                        <p>Remember me</p>
                    </div>

                    <div>
                        <p>Forgot password?</p>
                    </div>
                </div>

                <div className="gap-2">
                    <button className=" bg-blue-700 font-semibold text-gray-700 cursor-pointer rounded-xl  px-20 py-2">Sign In</button>
                </div>

                <div className=" border-[0.5px] border-gray-200 w-[90%] "></div>

                <div className="flex ">
                    <p>Don't have an account?</p>
                    <span>Create one here</span>
                </div>
            </div>
        </div>
    )
}


export default SignIn