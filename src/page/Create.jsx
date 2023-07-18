import { useState } from 'react';
import { Navbar } from '../components/Navbar'
import { createPost } from '../utils';

export function Create() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    async function handleSubmit(event) {
        event.preventDefault();
        await createPost({ title, content })

        setTitle("");
        setContent("");
    }
    return (
        <div className='w-screen'>
            <Navbar />
            <h1 className="text-center text-xl my-6 text-gray-500 font-bold uppercase">Create Post</h1>
            <form className='p-4 flex flex-col items-center justify-center w-auto'
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
                    type='submit'>Create</button>
            </form>
        </div>
    )
}