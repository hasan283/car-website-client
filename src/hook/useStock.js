import { useEffect, useState } from "react";

const useStock = stockUpdateId => {
    const [stock, setStock] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/stock/${stockUpdateId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setStock(data))
    }, [stockUpdateId]);
    return [stock, setStock];
}
export default useStock;