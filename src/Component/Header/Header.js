import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    const textStyle = { backgroundColor: 'yellowGreen', color: 'black', fontSize: 'bold' }
    return (
        <div className="container" style={{backgroundColor: 'DarkSeaGreen'}}>
            <div className="row">
                <div className="col-md-6 col-sm-12" style={{ padding: "40px"}} >
                    <h3>NATURAL MART</h3>
                </div>
                <div className="col-md-6 col-sm-12" style={{ padding: "40px" }} >
                    <Nav className="justify-content-end container" >
                        <Nav.Item>
                            <Nav.Link style={textStyle} as={Link} to="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={textStyle} as={Link} to="/orders">Orders</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={textStyle} as={Link} to="/admin">Admin</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={textStyle} as={Link} to="/deals">Deals</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <img src="" alt="" />
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        </div>
    );
};

export default Header;