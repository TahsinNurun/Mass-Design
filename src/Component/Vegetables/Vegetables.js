
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Vegetables = (props) => {

    const { img, name, price } = props.vegetables;

    return (
        <div className="col-md-3 col-sm-12" style={{ paddingTop: "30px"}} >

            <Link to={`/orders/${name}`}>
                <Card style={{ width: '18rem', height: '30rem', paddingLeft: "30px"  }}>
                    <Card.Img variant="top" src={img} alt="" />
                    <Card.Body>
                        <Card.Text>{name}</Card.Text>
                        <Card.Text>Price: {price}</Card.Text>
                        <Button variant="primary">buy now</Button>
                    </Card.Body>
                </Card>
            </Link>

        </div>
    );
};

export default Vegetables;