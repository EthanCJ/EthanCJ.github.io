const TopicsList = ({topics,title}) => {


    return ( 
        <div className="topics-list">
            {topics.map((topic)=>(
                <div className="select-topic" key={topic.id}>
                        <input type="checkbox" className="checkbox1"></input>
                        <label class="custom-control-label" for="checkbox1"></label>
                        <h2>{topic.engName}</h2>
                </div>
            ))}
        </div>

     );
}
 
export default TopicsList;