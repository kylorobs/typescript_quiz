import React, {useState} from 'react';

export const fetchTopics = (): string[] => {
    const [topics, updateTopics] = useState([]);
    
    fetch('https://opentdb.com/api_category.php')
        .then(res=> res.json())
        .then(results => dispatch())
        .catch(er =>  console.log(er))

    return topics;
}