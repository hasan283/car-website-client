import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './StockUpdate.css'
import useStock from '../../../hook/useStock';

const StockUpdate = () => {
    const { stockUpdateId } = useParams();
    const [stock] = useStock(stockUpdateId);
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
                        <Link to={`/delivery/${stockUpdateId}`}>
                            <button>Buy Now</button>
                        </Link>
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