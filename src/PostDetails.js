import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useTranslation } from "react-i18next";

const PostDetails = () => {
    const { t, i18n } = useTranslation();
    const {id}=useParams();
    const {data:post,error,isPending}=useFetch('https://my-json-server.typicode.com/EthanCJ/SEG-JSON-DB/posts/'+id);

    return ( 
    <div className="post-details">
        {isPending &&<p>Loading...</p>}
        {error && <div>{error}</div>}
        {post && (
            <article>
                <h2>{post.title}</h2>
                <p>{t("postTopic")} {post.topic}</p>
                <div>{post.body}</div>
            </article>
        )}
    </div> 
    );
}
 
export default PostDetails;