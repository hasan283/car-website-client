import { useEffect, useState } from "react";

const useStock = stockUpdateId => {
    const [stock, setStock] = useState({});

    useEffect(() => {
        const url = `https://safe-escarpment-42110.herokuapp.com/stock/${stockUpdateId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setStock(data))
    }, [stockUpdateId]);
    return [stock, setStock];
}
export default useStock;