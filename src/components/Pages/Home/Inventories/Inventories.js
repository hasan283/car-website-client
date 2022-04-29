import React from 'react';
import useInventory from '../../../../hook/useInventory';
import CarInventory from '../CarInventory/CarInventory';
import './Inventories.css'

const Inventorys = () => {
    const [inventories] = useInventory();
    return (
        <div className='container'>
            <div className="text-center py-5">
                <h1>Amazing Car Inventory</h1>
                <p>IT WILL HELP US FIND THE TOYOTA YOU'RE LOOKING FOR IN YOUR AREA.</p>
            </div>
            <div className='inventory-item'>
                {
                    inventories.map(inventory => <CarInventory key={inventory.id}
                        inventory={inventory}></CarInventory>)
                }
            </div>
        </div>
    );
};

export default Inventorys;