import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Answer = () => {
    const { t, i18n } = useTranslation();
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [user,setUser]=useState('');
    const [topic,setTopic]=useState('sci');
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const post={title,body,user,topic};

        fetch('https://my-json-server.typicode.com/EthanCJ/SEG-JSON-DBs/posts',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(post)
        })

        navigate('/')
    }

    return ( 
        <div className="answer">
            <h2>{t("answerQuestion")}</h2>
            <form onSubmit={handleSubmit}>

            <label>{t("answerQuestion")}</label>
            <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
            ></textarea>

            <label>{t("postName")}</label>
            <textarea
                required
                value={user}
                onChange={(e)=>setUser(e.target.value)}
            ></textarea>

            <label>{t("catagory")}</label>
            <select
                value={topic}
                onChange={(e)=>setTopic(e.target.value)}
            >
                <option value="sci">Science</option>
                <option value="tech">Technology</option>
                <option value="eng">Engineering</option>
                <option value="math">Mathematics</option>
            </select>
            

            <button>{t("post")}</button>

            </form>

            <button className="navButton">{t("navButton")} -{">"}</button>
        </div>
     );
}
 
export default Answer;
