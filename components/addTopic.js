import React from 'react';

function AddTopic({topics, setTopics}) {
    function handleSubmit(e) {
        e.preventDefault();
        const [name] = e.target;
        const newTopic = {
            "id": Date.now(),
            'title': name.value,
            "upvotes": 0,
            'downvotes': 0,
            "discussedOn": ''
        };
        console.log(newTopic)
        topics.push(newTopic);
        setTopics([...topics])
        console.log(topics)
    }
    return (
        <>
            <h3>Add a topic</h3>
            <form onSubmit={handleSubmit}>
                <input name="input" placeholder="Write your topic idea here...." />
                <button className="orange-bg">Submit</button>
            </form>
        </>
    )
}

export default AddTopic