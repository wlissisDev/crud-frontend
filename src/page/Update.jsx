import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import { getOnePosts, updatePost } from "../utils";

export function Update() {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate= useNavigate();

    async function GetPot() {
        const { title, content } = await getOnePosts(id);
        setTitle(title)
        setContent(content)
    }

    useEffect(() => {
        GetPot();
    }, [])


    async function handleSubmit(event) {
        event.preventDefault();
        await updatePost(id,title,content);
        navigate("/");
    }

    return (
        <div>
            <Navbar />
            <h1 className="text-center text-xl my-6 text-gray-500 font-bold uppercase">Update Post</h1>
            <form 
            className='p-4 flex flex-col items-center justify-center w-auto'
            onSubmit={handleSubmit}
            >
                <div className='flex flex-col mb-4 w-full md:w-[50%]'>
                    <label className='text-gray-500 font-semibold'>Title</label>
                    <input
                        className='outline-none border-[1px] rounded-sm text-gray-800 text-lg p-2 w-auto'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type="text"
                    />
                </div>
                <div className='flex flex-col mb-4 w-full md:w-[50%]'>
                    <label className='text-gray-500 font-semibold'>Content</label>
                    <textarea
                        className='outline-none border-[1px] rounded-sm text-gray-800 text-lg resize-none p-2 h-40 w-auto'
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    ></textarea>
                </div>
                <button className='py-3 px-16 shadow  text-xl bg-cyan-300 text-black font-semibold rounded-sm'
                    type='submit'>Confirme</button>
            </form>
        </div>
    )
}