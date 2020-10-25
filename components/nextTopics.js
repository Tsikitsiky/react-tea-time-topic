import React, { useState } from 'react';
import archive from '../assets/archive.svg';
import like from '../assets/thumb-up.svg';
import dislike from '../assets/thumb-down.svg'

function NextTopics({topics, setTopics}) {
    const [downvote, setDownvote] = useState(0);
    const [upvote, setUpvote] = useState(0);

    function upvoteting(id) {
        const topicToUpvote = topics.find(topic => topic.id === id);
        setUpvote(topicToUpvote.upvotes++);
        //console.log(upvote)
    }

    function downvoting(id) {
        const topicToDownvote = topics.find(topic => topic.id === id);
        setDownvote(topicToDownvote.downvotes++);
    }

    function archiving(id) {
        const topicToArchive = topics.find(topic => topic.id === id);
        topicToArchive.discussedOn = Date.now();
        console.log(topicToArchive);
        setTopics([...topics]);
    }
    return(
        <>
        <h3>Next Topics</h3>
        {topics.filter(topic => topic.discussedOn === '')
        .sort((topicA, topicB) => {
            const ratioA = topicA.upvotes - topicA.downvotes;
            const ratioB = topicB.upvotes - topicB.downvotes;
            return ratioB - ratioA})
        .map(topic => {
            return(<article key={topic.id}>
                <div>
                    <p>{topic.title}</p>
                    <button className="archive" onClick={() => archiving(topic.id)}><img src={archive} /></button>
                </div>
                <div>
                    <p className="pink-text">
                        <button className="upvote" className="orange-bg" onClick={() => upvoteting(topic.id)}><img src={like} /></button> 
                        {topic.upvotes}
                    </p>
                    <p className="pink-text">
                        <button className="downvote" className="orange-bg" onClick={() => downvoting(topic.id)}><img src={dislike} /></button> 
                        {topic.downvotes}
                    </p>
                </div>
                </article>)
        })}
        </>
    )

}

export default NextTopics;