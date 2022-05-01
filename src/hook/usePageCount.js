// import { useEffect, useState } from "react";

// const usePageCount = () => {
//     const [pageCount, SetPageCount] = useState(0);
//     useEffect(() => {
//         fetch('https://safe-escarpment-42110.herokuapp.com/stockCount')
//             .then(res => res.json())
//             .then(data => {
//                 const count = data.count;
//                 const pages = Math.ceil(count / 6);
//                 SetPageCount(pages);
//             })
//     }, [])
//     return [pageCount, SetPageCount]
// }