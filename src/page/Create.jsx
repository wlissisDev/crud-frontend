import { Navbar } from '../components/Navbar'

export function Create() {
    return (
        <div className='w-screen'>
            <Navbar />
            <form className='p-4 flex flex-col items-center justify-center w-auto'>
                <div className='flex flex-col mb-4 w-full md:w-[50%]'>
                    <label className='text-gray-500 font-semibold'>Title</label>
                    <input type="text" className='outline-none border-[1px] rounded-sm text-gray-800 text-lg p-2 w-auto' />
                </div>
                <div className='flex flex-col mb-4 w-full md:w-[50%]'>
                    <label className='text-gray-500 font-semibold'>Content</label>
                    <textarea className='outline-none border-[1px] rounded-sm text-gray-800 text-lg resize-none p-2 h-40 w-auto'></textarea>
                </div>
                <button className='py-3 px-16 shadow  text-xl bg-cyan-300 text-black font-semibold rounded-sm'
                    type='submit'>Create</button>
            </form>
        </div>
    )
}