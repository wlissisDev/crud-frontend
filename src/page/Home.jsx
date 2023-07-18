import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Post } from '../components/Post'
import { getPosts } from '../utils';

export function Home() {
    const [posts, setPosts] = useState();

    useEffect(() => {
        getPosts().then(result => setPosts(result));
    }, []);

    return (
        <div className='bg-cyan-300 w-screen h-auto pb-6 min-h-screen'>
            <Navbar />
            <div className='md:flex md:flex-col md:items-center'>
                {
                    posts?.map((item) => <Post
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        content={item.content}
                        setPosts={setPosts}
                    />)
                }
            </div>

        </div>
    )
}