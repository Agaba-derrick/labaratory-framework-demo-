import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Test() {
    const [tests, setTests] = useState([]);

    useEffect(() => {
        // Make HTTP request to fetch tests when component mounts
        axios.get('/api/tests')
            .then(response => {
                setTests(response.data);
            })
            .catch(error => {
                console.error('Error fetching tests:', error);
            });
    }, []); // Empty dependency array means this effect runs only once on component mount

    return (
        <div>
            <h1>List of Tests</h1>
            <ul>
                {tests.map(test => (
                    <li key={test.id}>{test.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Test;
