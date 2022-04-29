import React from 'react';
import './CarInventory.css'

const CarInventory = props => {
    const { img, name, sellerName, price, description, quantity } = props.inventory;
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
                    <button>Stock Update</button>
                </div>
            </div>

        </div>
    );
};

export default CarInventory;