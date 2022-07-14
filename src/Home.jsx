import PostList from "./PostList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: posts,isPending,error}=useFetch('http://localhost:8000/posts');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {posts && <PostList posts={posts} title="All posts"/>}
        </div>
     );
}
 
export default Home;