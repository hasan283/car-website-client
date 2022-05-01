import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './StockUpdate.css'

const StockUpdate = () => {
    const { stockUpdateId } = useParams();
    const [stock, setStock] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/stock/${stockUpdateId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setStock(data))
    }, [])
    return (
        <div className='stock-container'>
            <Helmet>
                <title>Stock Update- Car Inventory</title>
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 my-5">
                        <h4 className='title'>Car Model: {stock.name}</h4>
                        <h5 className='name'>Supplier name: {stock.sellerName}</h5>
                        <h3>Price: ${stock.price}</h3>
                        <h5>Quantity: {stock.quantity}</h5>
                        <p><b><u>Description: </u></b>{stock.description}</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 my-5">
                        <img src={stock.img} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StockUpdate;