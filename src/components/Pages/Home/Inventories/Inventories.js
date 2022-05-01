import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CarInventory from '../CarInventory/CarInventory';
import './Inventories.css'

const Inventorys = () => {
    const [pageCount, SetPageCount] = useState(0);
    const [page] = useState(0)
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
    }, [])
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