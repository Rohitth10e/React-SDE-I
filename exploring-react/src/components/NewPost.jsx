import { useState } from "react";


export default function NewPost({handleAddPost}) {
    const [post, setPost] = useState({name: '', desc: ''});
    function handleChange(e) {
        const {name, value} = e.target;
        setPost(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleAddPost(post);
        setPost({name:"", desc: ""});
    }
    return(
        <form className="fixed inset-10 bg-zinc-800 shadow-lg shadow-zinc-900 h-72 w-1/4 mx-auto my-0 p-4 tracking-tight rounded-md z-50" onSubmit={handleSubmit}>
            <p className="text-center text-zinc-300 font-semibold">New post</p>
            <label htmlFor="name" className="font-semibold text-zinc-300">Name</label>
            <input type="text" id="name" name="name" value={post.name} className="outline-none border-[1px] border-blue-500 rounded-md p-2 w-full bg-zinc-800" onChange={handleChange} />
            <label htmlFor="desc" className="font-semibold text-zinc-300">Description</label>
            <textarea id="desc" name="desc" className="outline-none rounded-md p-2 w-full border-[1px] border-blue-500  bg-zinc-800 shadow-zinc-900 resize-none" value={post.desc} onChange={handleChange}/>
            <button type="submit" className="bg-blue-500 text-white rounded-md px-8 py-1 mt-4">Submit</button>
        </form>
    );
}