import { Navbar } from '../components/Navbar'
import { Post } from '../components/Post'

export function Home() {
    return (
        <div className='bg-cyan-300 w-screen h-auto pb-6 min-h-screen'>
            <Navbar />
            <div className='md:flex md:flex-col md:items-center'>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>

        </div>
    )
}