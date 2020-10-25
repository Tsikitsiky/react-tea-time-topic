import React from 'react';
import trash from '../assets/trash.svg'

function PastTopics({topics, setTopics}) {
    function deleting(id) {
        const topicToDelete = topics.find(topic => topic.id === id);
        topics = topics.filter(topic => topic.id !== id);
        setTopics(topics)
        console.log(topics)
    }
    return(
        <>
        <h3>Past Topics</h3>
        {topics.filter(topic => topic.discussedOn !== '')
        .sort((a,b) => b.discussedOn - a.discussedOn)
        .map(topic => {
            const discussedOnDate = new Date(Number(topic.discussedOn));
            return(<article key={topic.id}>
                <div>
                    <p>{topic.title}</p>
                    <button onClick={() => deleting(topic.id)}><img src={trash} /></button>
                </div>
                <p className='orange-text'>Discussed on: {discussedOnDate.toLocaleDateString()}</p>
            </article>)
        } )}
        </>
    )

}

export default PastTopics;