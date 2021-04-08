
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';

const CheckOut = () => {

    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState({
        orderDate : new Date()
    });
   
    const handleOrderDate = (date) => {
        const newDates = { ...selectedDate };
        newDates.orderDate = date;
        setSelectedDate(newDates);
    };

    const handleCheckOut = () =>{
        const newCheckOut = {...loggedInUser, ...selectedDate};
        fetch('https://limitless-tor-49961.herokuapp.com/orderSummary', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newCheckOut)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    const [exactVegetable, setExactVegetable] = useState([]);
    const vege = exactVegetable.find(td => td.id == id);

    useEffect(() => {
        fetch('https://limitless-tor-49961.herokuapp.com/vegetables')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setExactVegetable(data));
    }, []);

    return (
        <div className="container text-center">
            <p>Description: {vege?.name}</p>
            <p>Quantity: 1</p>
            <p>price:$ {vege?.price} </p>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate.orderDate}
                        onChange={handleOrderDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>

            <Button variant="contained" color="primary" onClick={handleCheckOut}  >checkOut</Button>
        </div>
    );
};

export default CheckOut;