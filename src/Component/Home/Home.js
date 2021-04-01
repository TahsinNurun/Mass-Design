import React, { useEffect, useState } from 'react';
import fakeData from '../../Fake vege Data/data.json';
import Vegetables from '../Vegetables/Vegetables';
const Home = () => {

    // const first12 = fakeData.slice(0, 9);
    const [vegetables, setVegetables] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/vegetables')
        .then(res => res.json())
        .then(data => setVegetables(data))
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