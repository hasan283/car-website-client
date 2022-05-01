// import { useEffect, useState } from "react";

// const usePageCount = () => {
//     const [pageCount, SetPageCount] = useState(0);
//     useEffect(() => {
//         fetch('http://localhost:5000/stockCount')
//             .then(res => res.json())
//             .then(data => {
//                 const count = data.count;
//                 const pages = Math.ceil(count / 6);
//                 SetPageCount(pages);
//             })
//     }, [])
//     return [pageCount, SetPageCount]
// }