import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventory from '../../../hook/useInventory';
import './ManageInventory.css'

const ManageInventory = () => {
    const [inventories, setInventories] = useInventory();

    // Handle Delete Item 
    const handleDeleteItem = id => {
        const proceed = window.confirm('You want ot delete this item?');
        if (proceed) {
            const url = `https://safe-escarpment-42110.herokuapp.com/stock/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast('Delete Item Now!')
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining);
                })
        }
    }


    return (
        <div className='manage-inventory'>
            <Helmet>
                <title>Manage Inventory-Car Management</title>
            </Helmet>
            <div className='container my-5'>
                <h1 className='text-center my-5'>Manage Your Inventory</h1>
                <div className="row">
                    <div className="col-lg-3 col-md-2 col-sm-12"></div>
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        {
                            inventories.map(inventory =>
                                <div key={inventory._id} className="manage-item my-3">
                                    <div>
                                        <img src={inventory.img} alt="" />
                                        <div className="mt-3 px-2">
                                            <h4><b>Name: </b>{inventory.name}</h4>
                                            <h6><b>Supplier: </b>{inventory.sellerName}</h6>
                                            <p><b>Price: </b>{inventory.price}</p>
                                            <div>
                                                <p><b>Description: </b>{inventory.description}</p>
                                                <p><b>Quantity: </b>{inventory.quantity}</p>
                                            </div>
                                        </div>
                                        <button onClick={() => handleDeleteItem(inventory._id)} className='w-100 d-block mx-auto py-2'>Delete Item</button>
                                    </div>
                                </div>
                            )
                        }
                        <center>
                            <Link to='/addInventory'>
                                <button className='addBtn w-100 d-block mx-auto py-2'>Add New Item</button>
                            </Link>
                        </center>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-12"></div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;