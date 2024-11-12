import React from 'react';
import Pagination from '../shared/Pagination/Pagination';

const Soups = () => {
    return (
        <Pagination
            category='soup'
        />
    );
};

export default Soups;














// import React from 'react';
// import Pagination from '../shared/Pagination/Pagination';
// import Cards from '../shared/Card/Card2';
// import Spinner2 from '../shared/Spinner/Spinner2';
// import usePagination from '../../Hooks/usePagination';

// const Soups = () => {
//     const [items, count, page, size, setPage,loading] = usePagination('soup');
//     const pages = Math.ceil(count / size);
//     if (loading) {
//         return <Spinner2></Spinner2>
//     }
//     console.log(items)
//     return (
//         <div>
//             <div className="grid md:grid-cols-3 gap-x-2 gap-y-10 mt-10 place-items-center">
//                 {
//                     items?.map((item, index) =>
//                         <Cards keys={index}>
//                             {item}
//                         </Cards>
//                     )
//                 }

//             </div>
//             <div className='flex justify-center mt-8'>
//             {
//                      <Pagination

//                         pages={pages}
//                         page={page}
//                         count={count}
//                         setPage={setPage}
//                     ></Pagination>
//                 }
//             </div>

//         </div>
//     );
// };

// export default Soups;
