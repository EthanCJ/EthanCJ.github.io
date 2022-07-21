import { useState } from "react";
import { useHistory } from "react-router-dom";

const Answer = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [user,setUser]=useState('');
    const [topic,setTopic]=useState('sci');
    const history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const post={title,body,user,topic};

        fetch('http://localhost:8000/posts',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(post)
        })

        history.push('/')
    }

    return ( 
        <div className="answer">
            <h2>Answer a Question</h2>
            <form onSubmit={handleSubmit}>
                <label>Post Title:</label>
                <input type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
            <label>Post body:</label>
            <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
            ></textarea>

            <label>Name:</label>
            <textarea
                required
                value={user}
                onChange={(e)=>setUser(e.target.value)}
            ></textarea>

            <label>Catagory:</label>
            <select
                value={topic}
                onChange={(e)=>setTopic(e.target.value)}
            >
                <option value="sci">Science</option>
                <option value="tech">Technology</option>
                <option value="eng">Engineering</option>
                <option value="math">Mathematics</option>
            </select>
            

            <button>Post</button>

            </form>

            <button className="navButton">Find a different question -{">"}</button>
        </div>
     );
}
 
export default Answer;
