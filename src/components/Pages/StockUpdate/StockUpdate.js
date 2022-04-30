import React from 'react';
import { useParams } from 'react-router-dom';

const StockUpdate = () => {
    const { stockUpdateId } = useParams()
    return (
        <div>
            <h1>This is Stock Update {stockUpdateId}</h1>
        </div>
    );
};

export default StockUpdate;