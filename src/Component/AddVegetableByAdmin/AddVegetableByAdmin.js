
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddVegetableByAdmin = () => {

    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        // console.log(data);
        const eventData = {
            name: data.vegeName,
            imageURL: imageURL,
            location: data.location,
            price: data.price,
            weight: data.weight
        };
        const url = `http://localhost:5000/vegetables`;
        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))

    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '51090633bdff019a70832aedeb5b330d');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                // console.log(data);
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <div className="container">
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
                            <h5>Add Vegetable</h5>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <p>Vegetable Name</p>
                                        <input  {...register("vegeName")}/>
                                        <p>Add price</p>
                                        <input {...register("price")} type="number" type="number"/>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <p>Weight</p>
                                        <input {...register("weight")} type="number" type="number"/>
                                        <p>Add Photo</p>
                                        <input type="file" onChange={handleImageUpload} />
                                    </div>
                                </div>
                                <br />
                                <input type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddVegetableByAdmin;