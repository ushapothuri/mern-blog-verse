import {Link} from 'react-router-dom'
const NavBar=()=>
{
    return(
        <div className="flex justify-around h-16 items-center w-full border-2 border-black ">
            <h1 className="text-2xl font-bold">BlogVerse</h1>
            <Link to='/home' className="text-gray-700 hover:bg-gray-300 px-5 py-2 rounded cursor-pointer">Home</Link>

            <div className=" flex justify-center gap-4">
                <Link to='/signin' className="font-semibold text-gray-700 cursor-pointer">Sign In</Link>
                <Link to='/signup' className="bg-blue-700 text-white px-4 py-2 rounded-xl cursor-pointer">Sign Up</Link>
            </div>

        </div>
    )
}

export default NavBar