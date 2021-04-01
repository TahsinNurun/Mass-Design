import React from 'react';
import fakeData from '../../Fake vege Data/data.json'

const Admin = () => {
    const handleAddVegetables = () => {
        fetch('http://localhost:5000/addVegetables', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-3 " style={{ backgroundColor: 'grey' }}>
                        <div id="list-example" className="list-group" style={{ margin: '30px' }}>
                            <a className="list-group-item list-group-item-action" href="#list-item-1">Manage Product</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-2">Add Vegetable</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-3">Edit Product</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-9">
                        <div className="container">
                            <h5>Add Product</h5>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <p>Vegetable Name</p>
                                    <input type="text" name="" id="" />
                                    <p>Add price</p>
                                    <input type="number" name="" id="" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>Weight</p>
                                    <input type="number" name="" id="" />
                                    <p>Add Photo</p>
                                    <input type="image" src="" alt="" />
                                </div>
                            </div>
                            <button onClick={handleAddVegetables}>Add Product</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <table style={{ margin: '50px' }}>
                    <thead >
                        <tr >
                            <th style={{ padding: ' 10px 50px' }}><h4>product name</h4></th>
                            <th style={{ padding: ' 10px 50px' }}><h4>weight</h4></th>
                            <th style={{ padding: ' 10px 50px' }}><h4>price</h4></th>
                            <th style={{ padding: ' 10px 50px' }}><h4>action</h4></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td style={{ padding: ' 10px 50px' }}><h4>dynamic product name</h4></td>
                            <td style={{ padding: ' 10px 50px' }}><h4>dynamic weight</h4></td>
                            <td style={{ padding: ' 10px 50px' }}><h4>dynamic price</h4></td>
                            <td style={{ padding: ' 10px 50px' }}><h4>action</h4></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Admin;