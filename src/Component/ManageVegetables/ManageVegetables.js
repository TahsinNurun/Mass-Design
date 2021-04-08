import React, { useEffect, useState } from 'react';
import AddVegetableByAdmin from '../AddVegetableByAdmin/AddVegetableByAdmin';

import VegetableData from '../VegetableData/VegetableData';

const ManageVegetables = () => {

    const [vegetableData, setVegetableData] = useState([]);

    useEffect(() => {
        fetch('https://limitless-tor-49961.herokuapp.com/vegetables')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setVegetableData(data));
    }, [])

    return (
        <div>
            <div className="container ">
                <div className="row">
                    <div className="col-6 col-md-3 " style={{ backgroundColor: 'grey' }}>
                        <div id="list-example" className="list-group" style={{ margin: '30px' }}>
                            <a className="list-group-item list-group-item-action" href="/manageVegetables">Manage Product</a>
                            <a className="list-group-item list-group-item-action" href="/addVegetableByAdmin">Add Vegetable</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-3">Edit Product</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-9">
                        <div className="container">
                            <div className="container">
                                <table style={{ margin: '50px' }}>
                                    <thead >
                                        <tr >
                                            <th style={{ padding: ' 10px 50px' }}><h6>Product name</h6></th>
                                            <th style={{ padding: ' 10px 50px' }}><h6>Weight</h6></th>
                                            <th style={{ padding: ' 10px 50px' }}><h6>Price</h6></th>
                                            <th style={{ padding: ' 10px 50px' }}><h6>Action</h6></th>
                                        </tr>
                                    </thead>
                                </table>
                                {
                                    vegetableData.map(vegetableData => <VegetableData vegetableData={vegetableData}>{vegetableData.name}</VegetableData>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageVegetables;