
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Vegetables = (props) => {
    
    const { id, img, name, price } = props.vegetables;
    // console.log(img);

    return (
        <div className="col-md-3 col-sm-12 container" style={{ padding: "50px"}} >

            <Link to={`/checkOut/${id}`}>
                <Card style={{ width: '16rem', height: '30rem', padding: "40px", backgroundColor:"Honeydew"  }}>
                    <Card.Img variant="top" src={img} alt="" />
                    <Card.Body>
                        <Card.Text>{name}</Card.Text>
                        <Card.Text>Price:$ {price}</Card.Text>
                        <Button variant="primary">buy now</Button>
                    </Card.Body>
                </Card>
            </Link>

        </div>
    );
};

export default Vegetables;