import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CarInventory.css'

const CarInventory = props => {
    const { id, img, name, sellerName, price, description, quantity } = props.inventory;
    const navigate = useNavigate();
    const handleStockUpdate = id => {
        navigate(`/stockUpdate/${id}`)
    }
    return (
        <div className='inventory-container'>
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
                    <button onClick={() => handleStockUpdate(id)}>Stock Update</button>
                </div>
            </div>

        </div>
    );
};

export default CarInventory;