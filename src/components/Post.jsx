import { Link } from "react-router-dom"
export function Post({ id, title, content }) {
    return (
        <div className="w-auto md:w-[90%] m-4 p-4 rounded-sm bg-white shadow">
            <h1 className="text-2xl text-center text-gray-700">{title}</h1>
            <hr />
            <p className="mt-2 text-gray-500">{content}</p>
            <div className="text-end">
                <span className="m-4 cursor-pointer text-2xl text-red-500">
                    <ion-icon name="trash-outline"></ion-icon>
                </span>
                <Link to={`update/${id}`} className="m-4 cursor-pointer text-2xl text-green-700">
                    <ion-icon name="create-outline"></ion-icon>
                </Link>
            </div>
        </div>
    )
}