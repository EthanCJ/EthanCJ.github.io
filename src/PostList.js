import { Link } from "react-router-dom";

const PostList = ({posts,title}) => {


    return ( 
        <div className="post-list">
            {posts.map((post)=>(
                <div className="post-preview" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <h2>{post.title}</h2>
                        <p>Sujet: {post.topic}</p>
                    </Link>
                </div>
            ))}
        </div>

     );
}
 
export default PostList;