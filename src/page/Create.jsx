import { Navbar } from '../components/Navbar'

export function Create() {
    return(
        <div>
            <Navbar/>
            <form>
                <div className='flex flex-col'>
                    <label>Title</label>
                    <input type="text" className='outline-none border-[1px] rounded-sm text-gray-800 text-lg p-2'/>
                </div>
                <div className='flex flex-col'>
                    <label>Content</label>
                    <textarea  className='outline-none border-[1px] rounded-sm text-gray-800 text-lg resize-none p-2 h-40'></textarea>
                </div>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}