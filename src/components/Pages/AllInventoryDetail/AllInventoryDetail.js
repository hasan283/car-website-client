import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Loading from '../LoginPage/Loading/Loading';

const ManageInventoryDetail = props => {
    const { _id, img, name, sellerName, price, description, quantity } = props.inventory;
    const navigate = useNavigate();
    const handleStockUpdate = id => {
        navigate(`/stockUpdate/${id}`)
    }
    return (
        <div className='inventory-container'>
            <Helmet>
                <title>Inventory Car Management</title>
            </Helmet>
            <div className="inventory">
                <img src={img} alt="" />
                <div className="inventory-info mt-3">
                    <h5>{name}</h5>
                    <h6><b>Supplier: </b>{sellerName}</h6>
                    <p><b>Price: </b>${price}</p>
                    <p className='pt-3 description'><b>Description: </b>{description.slice(0, 32)}</p>
                    <p><b>Quantity: </b>{quantity}</p>
                </div>
                <div className="inventory-btn">
                    <button onClick={() => handleStockUpdate(_id)}>Stock Update</button>
                </div>
            </div>

        </div>
    );
};

export default ManageInventoryDetail;