import React from 'react';
import { useForm } from "react-hook-form";


const AddInventory = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1>Add Your Inventory!</h1>
            <div className='container my-5'>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4"></div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="my-2">
                                <input className='w-100 py-1 px-2' placeholder='Inventory Name' {...register("name", { required: true, maxLength: 20 })} />
                            </div>
                            <div className="my-2">
                                <input className='w-100 py-1 px-2' placeholder='Inventory Photo Url' {...register("img", { required: true, maxLength: 20 })} />
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