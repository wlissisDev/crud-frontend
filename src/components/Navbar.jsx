import { useState } from "react"
import { Link } from "react-router-dom"
export function Navbar() {
    const [menu, setMenu] = useState(false);
    return (
        <nav className="p-4 md:px-6 md:py-2 bg-white shadow md:flex md:items-center md:justify-between  relative">
            <div className="flex justify-between items-center">
                <span className="text-2xl font-extrabold text-zinc-600 border-4 px-2 border-zinc-500">CRUD</span>
                <span className="text-3xl cursor-pointer md:hidden mx-2">
                    <ion-icon name={`${menu == false ? "menu" : "close"}`} onClick={() => setMenu(!menu)}></ion-icon>
                </span>
            </div>
            <div className={`flex flex-col md:flex-row md:items-center z-[1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto
            md:py-0 py-4 md:pl-0 pl-4 md:opacity-100  transition-all ease duration-500  
            ${menu == false ? "opacity-0 top-[-400px]" : "opacity-100 top-[70px]"}`}>
                <Link className="mx-4 font-medium text-xl m-4 text-gray-600" to="/">Home</Link>
                <Link className="mx-4 font-medium text-xl m-4 text-gray-600" to="/create">Create</Link>
            </div>
        </nav>

    )
}