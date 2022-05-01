import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../../../hook/useInventory';
import CarInventory from '../CarInventory/CarInventory';
import './Inventories.css'

const Inventorys = () => {
    const [inventories] = useInventory();
    return (
        <div id='inventory' className='container'>
            <div className="text-center py-5">
                <h1 className='pt-3'>Amazing Car Inventory</h1>
                <p>IT WILL HELP US FIND THE TOYOTA YOU'RE LOOKING FOR IN YOUR AREA.</p>
            </div>
            <div className='inventory-item'>
                {
                    inventories.map(inventory => <CarInventory key={inventory._id}
                        inventory={inventory}></CarInventory>)
                }
            </div>

            <Link to='/allInventory'>
                <center>
                    <button style={{ border: 'none', fontSize: '18px' }} className='bg-dark px-5 text-white py-3 my-5 rounded'>All Inventories</button>
                </center>
            </Link>
        </div>
    );
};

export default Inventorys;