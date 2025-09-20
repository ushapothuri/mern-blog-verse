import NavBar from "./NavBar"
import { Link } from 'react-router-dom'
import { CircleUser } from 'lucide-react'
import { Lock } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from 'react'

const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
     const [errors, setErrors] = useState({
            fullName: "",
            email: "",
            password: "",
            confirmPassword: ""

        })

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState(false)

    const handlePassword = () => {
        setShowPassword((password) => !password)
    }

    const handleConfirmPassword = () => {
        setConfirmPassword((confirmPassword) => !confirmPassword)
    }

    const handleChange = (event) => {
        setError("")
        setSuccess("")
        setFormData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value
        }))

        setErrors((errors) => ({
            ...errors,
            [event.target.name]: ""
        }))
    }

    const handledSubmit = () => {
        event.preventDefault();

        let newErrors = {}

        if (!formData.fullName) {
            newErrors.fullName = "enetr your fullname"
        }
        if (!formData.email) {
            newErrors.email = "enetr your email"
        }
        if (!formData.password) {
            newErrors.password = "enter your password"
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "confirm  password"
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "your passwords did not match"
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        } else {
            setSuccess("account created successfully")


            setFormData({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""

            })
        }
    }
        // if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
        //     setError("fill all the fields required")
        // } else if (formData.password !== formData.confirmPassword) {
        //     setError("passwords did not match")
        // } else {
        //     setSuccess("account created succesfully")
        //     setError("")
        //     setFormData({
        //         fullName: "",
        //         email: "",
        //         password: "",
        //         confirmPassword: ""

        //     })





       


        return (
            <div className="flex items-center flex-col  gap-5">
                <NavBar />
                <h1 className="text-2xl text-blue-600 font-bold ">Join BlogVerse </h1>
                <p className="text-gray-600 text-centre text-xl font-semibold text-center">create your account and <br />start your Blogging journey today</p>

                <form onSubmit={handledSubmit} className="flex flex-col border-black w-1/4 py-7  border-1 items-center gap-5 mb-5 rounded-2xl">
                    <div className="w-[90%] flex flex-col gap-2" >
                        <p className="text-md text-gray-700 font-semibold">Full Name</p>
                        <input
                            value={formData.fullName}
                            onChange={handleChange}
                            name="fullName"
                            type="text"
                            placeholder="enter your Full name"
                            className="border-1 w-full border-gray-700 px-4 py-3 rounded-2xl focus:outline-none focus:border-purple-500" />
                        {errors.fullName && <p>{errors.fullName}</p>}
                    </div>

                    <div className="w-[90%] flex flex-col gap-2" >
                        <p className="text-md text-gray-700 font-semibold">Email</p>
                        <div className="relative" >
                            <Mail className="absolute top-4 left-4 text-gray-700" />
                            <input
                                value={formData.email}
                                onChange={handleChange}
                                name="email"
                                type="email"
                                placeholder="enter your email"
                                className="border-1 pl-11 w-full border-gray-700 px-4 py-3 rounded-2xl focus:outline-none focus:border-purple-500" />

                            {errors.email && <p>{errors.email}</p>}
                        </div>

                    </div>

                    <div className="w-[90%] flex flex-col gap-2" >
                        <p className="text-md text-gray-700 font-semibold">Password</p>
                        <div className="relative">
                            <Lock className="absolute top-3 left-3 text-gray-600" />
                            <input
                                value={formData.password}
                                onChange={handleChange}
                                name="password"
                                type={showPassword ? "text" : 'password'}
                                placeholder="enter your password"
                                className=" pl-10 border-1 w-full border-gray-700 px-4 py-3 rounded-2xl focus:outline-none focus:border-purple-500" />
                            <p onClick={handlePassword}>
                                {showPassword ? <Eye className="absolute right-4 top-3  text-gray-600" /> : <EyeOff className="absolute right-4 top-3  text-gray-600" />}

                            </p>
                        </div>
                        {errors.password && <p>{errors.password}</p>}


                    </div>

                    <div className="w-[90%] flex flex-col gap-2" >
                        <p className="text-md text-gray-700 font-semibold">Confirm your  Password </p>
                        <div className="relative">
                            <Lock className="absolute top-3 left-3 text-gray-600" />
                            <input
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                name="confirmPassword"
                                type={confirmPassword ? "text" : 'password'}
                                placeholder="Confirm your password"
                                className=" pl-10 border-1 w-full border-gray-700 px-4 py-3 rounded-2xl focus:outline-none focus:border-purple-500" />
                            <p onClick={handleConfirmPassword}>
                                {confirmPassword ? <Eye className="absolute right-4 top-3  text-gray-600" /> : <EyeOff className="absolute right-4 top-3  text-gray-600" />}
                            </p>

                            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}


                        </div>
                    </div>

                    <div className="flex gap-2 border-1  border-gray-800 w-[90%] py-5 px-4 rounded-xl items-center justify-center">
                        <input type="checkbox" name="" id=" "
                            className="h-5 w-5" />
                        <p>i agree to terms and conditions</p>
                    </div>


                    {error && <p className="text-red-600">{error}</p>}
                    {success && <p className="text-green-500">{success}</p>}

                    <button type="submit" className="w-[90%] flex justify-center gap-1 bg-purple-500 py-4 font-semibold text-white rounded-xl"> <CircleUser /><p>Create Account</p></button>

                    <div className=" border-[0.5px] border-gray-400 w-[90%] mt-4"></div>

                    <p className="text-gray-700  font-semibold">Already have an account? <Link to='/signin' className="text-purple-500">Sign In here</Link></p>

                    <button className="text-gray-700 font-semibold hover:bg-gray-200 py-4 w-[90%] rounded-xl cursor-pointer "> back to home</button>


                </form>
            </div>

        )
    }


export default SignUp