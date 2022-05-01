import React, { useEffect, useState } from 'react';
import AllInventoryDetail from '../AllInventoryDetail/AllInventoryDetail';
import './AllInventory.css';

const AllInventory = () => {
    const [pageCount, SetPageCount] = useState(0);
    const [page, setPage] = useState(0)
    const [size] = useState(6)


    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch(`https://safe-escarpment-42110.herokuapp.com/stock?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [page, size])


    useEffect(() => {
        fetch('https://safe-escarpment-42110.herokuapp.com/stockCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 6);
                SetPageCount(pages);
            })
    }, []);
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
            <div className="my-5 pagination">
                {
                    [...Array(pageCount).keys()].map(number => <button
                        onClick={() => setPage(number)} className={page === number ? 'selected' : ''}>{number}</button>)
                }
                {/* <select onChange={e => setSize(e.target.value)}>
                    <option value="5" selected>5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select> */}
            </div>
        </div>
    );
};

export default AllInventory;