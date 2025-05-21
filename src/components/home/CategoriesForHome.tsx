// import React from 'react'
// import { Link } from 'react-router-dom';

// const CategoriesForHome = () => {
//   return (
//     <div className=" mb-16 py-10">
//         <div className=" grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5  p-4  mx-auto rounded-xl shadow gap-3 bg-white">
//           {categories.map((cat, index) => {
//             return (
//               <Link
//                 to={`/products?category=${cat.title.toLowerCase()}}`}
//                 key={index}
//                 className="flex py-2 px-6 cats-center justify-between hover:bg-gray-200 rounded-md "
//               >
//                 <div>
//                   <h6 className="capitalize font-medium">{cat.title}</h6>
//                   <span className="mt-2 text-gray-500 text-xs">8 cats</span>
//                 </div>
//                 <div className="w-20">
//                   <img
//                     src={"cat.image_Url"}
//                     alt="img"
//                     className="object-cover"
//                   />
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//   )
// }

// export default CategoriesForHome
