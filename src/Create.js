import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [user,setUser]=useState('');
    const history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,user};

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        })

        history.push('/')
    }

    return ( 
        <div className="create">
            <h2>Create a post</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
            <label>Blog body:</label>
            <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
            ></textarea>
            <label>Catagory:</label>
            <select
                value={user}
                onChange={(e)=>setUser(e.target.value)}
            >
                <option value="sci">Science</option>
                <option value="tech">Technology</option>
                <option value="eng">Engineering</option>
                <option value="math">Mathematics</option>
            </select>
            

            <button>Post</button>


            </form>
        </div>
     );
}
 
export default Create;
