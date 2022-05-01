import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import useStock from '../../../hook/useStock';

const Delivery = () => {
    const { stockUpdateId } = useParams();
    const [stock] = useStock(stockUpdateId);
    const [user, setUser] = useState({
        name: 'Md Hasan Ali',
        email: 'hasan@gmail.com',
        address: 'Jashore, Khulna, Manirampur-7440',
        phone: '0174165566'
    })



    return (
        <div className='container'>
            <Helmet>
                <title>Buy The Car</title>
            </Helmet>
            <h1 className='text-center text-danger my-5'>Please Order: {stock.name}</h1>
            <div className="row">
                <div className="col-lg-3 col-md-2 col-sm-12"></div>
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <form>

                        <div className="my-2">
                            <input className='w-100 py-1' type="text" name="name" value={user.name} placeholder='Enter Your Name' required />
                        </div>

                        <div className="my-2">
                            <input className='w-100 py-1' type="email" name="email" value={user.email} placeholder='Enter Your Email' required />
                        </div>

                        <div className="my-2">
                            <input className='w-100 py-1' type="number" name="quantity" placeholder='Quantity' required />
                        </div>

                        <div className="my-2">
                            <input className='w-100 py-1' type="text" name="model" value={stock.name} placeholder='Car Model Name' required />
                        </div>

                        <div className="my-2">
                            <input className='w-100 py-1' type="number" name="phone" value={user.phone} placeholder='Your Phone Number' required />
                        </div>

                        <div className="my-2">
                            <input className='w-100 py-1' type="text" name="address" value={user.address} placeholder='Enter Your Address' required />
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