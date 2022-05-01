import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axiosPrivet from '../../../api/axiosPrivet';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `https://safe-escarpment-42110.herokuapp.com/order?email=${email}`;
            try {
                const { data } = await axiosPrivet.get(url);
                setOrders(data);
            }
            catch (error) {
                console.log(error);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getOrders();
    }, [user])
    return (
        <div className='container my-5'>
            <h1>Your Orders: {orders.length}</h1>
        </div>
    );
};

export default Order;