import { useEffect, useState } from "react"

const useInventory = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('https://safe-escarpment-42110.herokuapp.com/stock')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return [inventories, setInventories]
}
export default useInventory;