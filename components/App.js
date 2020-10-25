import React, {useState, useEffect} from 'react';
import AddTopic from './addTopic';
import NextTopics from './nextTopics';
import PastTopics from './pastTopics'

function App() {
    let [topics, setTopics] = useState([]);
    async function fetchTopics() {
        const res = await fetch('https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json');
        const data = await res.json();
        setTopics(data);
    }

    useEffect(() => {
        fetchTopics()
    }, [])
 

    return(
        <>
            <header>
                <h1>Tea Time Topic</h1>
            </header>
            <div>
                <AddTopic topics={topics} setTopics={setTopics} />
                <NextTopics topics={topics} setTopics={setTopics} />
                <PastTopics topics={topics} setTopics={setTopics} />
            </div>
        </>
    )
}

export default App;