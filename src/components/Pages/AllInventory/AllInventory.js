import React from 'react';
import useInventory from '../../../hook/useInventory';
import AllInventoryDetail from '../AllInventoryDetail/AllInventoryDetail';

const AllInventory = () => {
    const [inventories] = useInventory();
    return (
        <div id='inventory' className='container'>
            <div className="text-center py-5">
                <h1 className='pt-3'>Amazing Car Inventory</h1>
                <p>IT WILL HELP US FIND THE TOYOTA YOU'RE LOOKING FOR IN YOUR AREA.</p>
            </div>
            <div className='inventory-item'>
                {
                    inventories.map(inventory => <AllInventoryDetail
                        key={inventory._id}
                        inventory={inventory}></AllInventoryDetail>)
                }
            </div>
        </div>
    );
};

export default AllInventory;