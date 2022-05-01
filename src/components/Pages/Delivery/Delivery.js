import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import useStock from '../../../hook/useStock';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios'
import { toast } from 'react-toastify';

const Delivery = () => {
    const { stockUpdateId } = useParams();
    const [stock, setStock] = useStock(stockUpdateId);
    const [user] = useAuthState(auth);
    if (user) {
        console.log(user);
    }

    const handleQuantityChange = event => {
        console.log(event.target.value);
        const { quantity, ...rest } = stock;
        const stockQuantity = event.target.value;
        const newQuantity = { quantity: stockQuantity, ...rest };
        setStock(newQuantity);
    }


    const placeOrder = event => {
        event.preventDefault()
        const order = {
            name: user.name,
            email: user.email,
            stock: stock.name,
            stockUpdateId: stockUpdateId,
            quantity: event.target.quantity.value,
            address: event.target.address.value,
            phone: event.target.phone.value

        }
        axios.post('https://safe-escarpment-42110.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Order Submitted successfully!');
                    event.target.reset();
                }
            })
    }



    return (
        <div className='container'>
            <Helmet>
                <title>Buy The Car</title>
            </Helmet>
            <h1 className='text-center text-danger my-5'>Please Order: {stock.name}</h1>
            <div className="row">
                <div className="col-lg-3 col-md-2 col-sm-12"></div>
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <form onSubmit={placeOrder}>

                        <div className="my-2">
                            <input className='w-100 py-1 px-2 fw-bold' type="text" name="name" value={user?.displayName} placeholder='Enter Your Name' required readOnly disabled />
                        </div>

                        <div className="my-2">
                            <input className='w-100 py-1 px-2 fw-bold' type="email" name="email" value={user?.email} placeholder='Enter Your Email' required readOnly disabled />
                        </div>

                        <div className="my-2">
                            <input className='w-100 py-1 px-2 fw-bold' type="number" name="quantity" onChange={handleQuantityChange} value={stock.quantity} placeholder='Quantity' required />
                        </div>

                        <div className="my-2">
                            <input className='w-100 py-1 px-2 text-primary' type="text" name="stock" value={stock.name} placeholder='Car Model Name' required readOnly disabled />
                        </div>

                        <div className="my-2">
                            <input className='w-100 py-1 px-2' type="number" name="phone" autoComplete='off' value={user.phone} placeholder='Your Phone Number' required />
                        </div>

                        <div className="my-2">
                            <input className='w-100 py-1 px-2' type="text" name="address" autoComplete='off' placeholder='Enter Your Address' required />
                        </div>

                        <center>
                            <input style={{ border: 'none' }} className='bg-dark rounded text-white my-4 py-2 px-5' type="submit" value="Place Order" />
                        </center>
                    </form>
                </div>
                <div className="col-lg-3 col-md-2 col-sm-12"></div>
            </div>
        </div>
    );
};

export default Delivery;