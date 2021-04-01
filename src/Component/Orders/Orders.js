import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import fakeData from '../../Fake vege Data/data.json'
import SingleVeg from '../SingleVeg/SingleVeg';


const Orders = (props) => {
    
    // const {name} = useParams();
    const {id} = useParams();
    const [singleVeg, setSingleVeg] = useState({});

    useEffect(()=> {
        fetch('http://localhost:5000/vegetables/'+id)
        .then(res =>res.json())
        .then(data => setSingleVeg(data))
    },[id])

    // const singleVeg = fakeData.find(singleVeg => singleVeg.name === name);
    console.log(singleVeg);
    
    return (
        <div className = "container" style={{height:"50px", margin: "2px 20px"}} >
            <SingleVeg veg ={singleVeg}></SingleVeg>
        </div>
    );
};

export default Orders;