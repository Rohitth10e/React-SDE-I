import { useState } from "react";
import NewPost from "./NewPost.jsx";
import Post from "./Post.jsx";

export default function PostList() {
    const [posts, setPosts] = useState([
        {
            name: 'Rohith',
            desc: 'React is awesome'
        },
        {
            name: 'Sneha',
            desc: 'Vue.js is awesome'
        },
        {
            name: 'Rohith',
            desc: 'Angular is awesome'
        }
    ]);
    const [createPost, setCreatePost] = useState(false);
    function handleAddPost(newpost) {
        setPosts((prev)=>[...prev, newpost]);
    }
    return (
        <>
            {createPost && <NewPost handleAddPost={handleAddPost} />}
            <button onClick={() => {
                setCreatePost(prev => !prev)
            }}>Add Post</button>
            <ul className="w-full p-4 flex list-none">
                {posts.map((post, idx) => <Post key={idx} name={post.name} desc={post.desc} />)}
            </ul>
        </>
    );
}