import { useState, useEffect } from 'react';

const Skills = () => {
    const restPath = 'https://fiona-yeung.com/wp-portfolio/wp-json/wp/v2/pages/9';
    const [restData, setData] = useState([]);
    const [isLoaded, setLoadStatus] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(restPath);
        if (response.ok) {
            const data = await response.json();
            setData(data);
            setLoadStatus(true);
        } else {
            setLoadStatus(false);
        }
        };
        fetchData();
    }, [restPath]);
  
    return (
        <section className='skills-container'>
            <h2>my tool-kit</h2>
            <h3>{"Front-end"}</h3>
            <ul>
                <li>{"Lorem"}</li>
                <li>{"Lorem"}</li>
                <li>{"Lorem"}</li>
                <li>{"Lorem"}</li>
            </ul>
            <h3>{"Back-end"}</h3>
            <ul>
                <li>{"Lorem"}</li>
                <li>{"Lorem"}</li>
                <li>{"Lorem"}</li>
                <li>{"Lorem"}</li>
            </ul>
            <h3>{"Mobile"}</h3>
            <ul>
                <li>{"Lorem"}</li>
                <li>{"Lorem"}</li>
            </ul>
            <h3>{"Tools/Systems"}</h3>
            <ul>
                <li>{"Lorem"}</li>
                <li>{"Lorem"}</li>
                <li>{"Lorem"}</li>
                <li>{"Lorem"}</li>
            </ul>
        </section>
    )
}

export default Skills;