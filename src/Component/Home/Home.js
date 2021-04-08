import React, { useEffect, useState } from 'react';

import Vegetables from '../Vegetables/Vegetables';
const Home = () => {

    
    const [vegetables, setVegetables] = useState([]);

    useEffect(() => {
        fetch('https://limitless-tor-49961.herokuapp.com/vegetables')
        .then(res => res.json())
        // .then(data => console.log(data));
        .then(data => setVegetables(data));
    },[])
    
    return (
        <div className="container">
            <div className ="row">
                {
                    vegetables.map(vegetables => <Vegetables vegetables ={vegetables}>{vegetables.name}</Vegetables>)
                }
            </div>
        </div>
    );
};

export default Home;