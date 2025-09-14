const ProductCard = () => {
    return (
        <div className="border-1 border-black w-[350px] flex flex-col items-center gap-10 py-4 rounded-2xl">
            <img src="vite.svg" alt="" className="h-[150px] b-[150px] border-2 border-blue-300 rounded-full" />
            <div className="flex flex-col gap-5 items-center">
                <p className="font-bold text-4xl text-blue-500">pen</p>
                <p className="text-xl text-gray-700 text-center">this is a pen</p>
                <p className="font-bold text-2xl text-purple-500">$10</p>
               
            </div>
             <button className=" bg-blue-700 text-white w-[90%]  py-4 rounded=xl cursor-pointer hover:bg-blue-400">Add to cart </button>
        </div>
    )
}

export default ProductCard