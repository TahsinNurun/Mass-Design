import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data));
    },[])
    
    return (
        <div style={{textAlign:'center'}}>
            <h5>This is {loggedInUser.email}'s order summary</h5>
            <p>You have: {orders.length} orders</p>
            {
                orders.map(order => <li>To be delivered on {(new Date(order.orderDate).toDateString('dd/MM/yyyy'))} for {order.email}</li>)
            }
        </div>
    );
};

export default Orders;