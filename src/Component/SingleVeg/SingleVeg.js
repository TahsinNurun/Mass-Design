import React from 'react';

const SingleVeg = (props) => {

    const {name, price} = props.veg;
    console.log(props)
    
    const style ={border: '1px solid darkSeaGreen', 
                    backgroundColor:'HoneyDew', 
                    width:'30rem',
                    borderRadius:'6px',
                    padding: '20px'
                }
    
    return (
        <div className="container text-center" style={style}>
           <p>Description:{name}</p>
            <br/>
            <p>Quantity: 1</p>
            <br/>
            <p>price: {price}</p>
            <br/>
            <button>Checkout</button>  
        </div>
    );
};

export default SingleVeg;