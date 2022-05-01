import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const AddInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/stock`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast('Your Item Added Successfully!!')
            })
    };
    return (
        <div>
            <Helmet>
                <title>Add Inventory-Car Management</title>
            </Helmet>
            <h1 className='text-center my-5'>Add Your Inventory!</h1>
            <div className='container my-5'>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4"></div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="my-2">
                                <input className='w-100 py-1 px-2' type="text" placeholder='Inventory Name' {...register("name", { required: true, maxLength: 20 })} />
                            </div>

                            <div className="my-2">
                                <input className='w-100 py-1 px-2' placeholder='Supplier Name' type="text" {...register("SellerName")} />
                            </div>

                            <div className="my-2">
                                <input className='w-100 py-1 px-2' placeholder='Price' type="number" {...register("price")} />
                            </div>

                            <div className="my-2">
                                <textarea className='w-100 py-1 px-2' placeholder='Description' {...register("description")} />
                            </div>

                            <div className="my-2">
                                <input className='w-100 py-1 px-2' type="text" placeholder='Inventory Photo Url' {...register("img")} />
                            </div>

                            <div className="my-2">
                                <input className='w-100 py-1 px-2' placeholder='Quantity' type="number" {...register("quantity")} />
                            </div>

                            <input style={{ border: 'none' }} className='w-100 mx-auto bg-primary text-white rounded py-2' type="submit" value='Add Inventory' />
                        </form>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4"></div>
                </div>
            </div>
        </div>
    );
};

export default AddInventory;