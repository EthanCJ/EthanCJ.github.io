import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PostList = ({posts,title}) => {
    const { t, i18n } = useTranslation();

    return ( 
        <div className="post-list">
            {posts.map((post)=>(
                <div className="post-preview" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <h2>{post.title}</h2>
                        <p>{t("postTopic")} {post.topic}</p>
                        <button>{t("like")} {post.likes}</button>
                        <button>{t("share")}</button>
                        <button>{t("report")}</button>
                    </Link>
                </div>
            ))}
        </div>

     );
}
 
export default PostList;