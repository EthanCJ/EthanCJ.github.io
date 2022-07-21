import TopicsList from "./TopicsList";
import useFetch from "./useFetch";

const TopicsHome = () => {
    const {data: topics,isPending,error}=useFetch('https://my-json-server.typicode.com/EthanCJ/SEG-JSON-DB/topics');

    return ( 
        <div className="topicsHome">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {topics && <TopicsList topics={topics} title="All posts"/>}
        </div>
     );
}
 
export default TopicsHome;
