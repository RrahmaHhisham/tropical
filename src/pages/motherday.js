// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';
// import box from '../assets/Frame 102.png'
// import { Link } from 'react-router-dom';
// import Footer from '../components/footer';
// function Motherday({ addToCart, addToFavorites }) {
//   const product = {
//     name: "بوكس هدايا",
//     price: 200,
//     image: box,
//   };

//   return (
//     <>
//       <div className='category-page row m-0'>
//         <div className='title-header col-md-11'>
//           <p>هدايا عيد الام</p>
//         </div>

//         <div className='category-content col-md-11'>
//           <div className='all-cards'>
//             <div className='group-cards'>
//               <div className='category-every-card'>
//                 <div className="card">
//                   <div className='img-card'>
//                     <Link to="/details"><img src={product.image} className="card-img-top" alt="..." /></Link>
//                   </div>
//                   <div className="card-body">
//                     <div className='price'>
//                       <p className="card-title">{product.name}</p>
//                       <p>{product.price}$</p>
//                     </div>
//                     <div className='cart'>
//                       <button
//                         onClick={() => addToCart(product)}
//                         className="btn btn-primary">
//                         اضف الى السلة
//                       </button>
//                       <FontAwesomeIcon
//                         icon={faHeart}
//                         className='heart-cart cursor-pointer'
//                         onClick={() => addToFavorites(product)}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>



//               <div className='category-every-card'>
//                 <div className="card">
//                   <div className='img-card'>
//                     <img src={box} className="card-img-top" alt="..." />
//                   </div>
//                   <div className="card-body">
//                     <div className='price'>
//                       <p className="card-title">بوكس هدايا</p>
//                       <p>200$</p>
//                     </div>
//                     <div className='cart'>
//                       <a href="#" className="btn btn-primary">اضف الى السلة</a>
//                       <FontAwesomeIcon icon={faHeart} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className='category-every-card'>
//                 <div className="card">
//                   <div className='img-card'>
//                     <img src={box} className="card-img-top" alt="..." />
//                   </div>
//                   <div className="card-body">
//                     <div className='price'>
//                       <p className="card-title">بوكس هدايا</p>
//                       <p>200$</p>
//                     </div>
//                     <div className='cart'>
//                       <a href="#" className="btn btn-primary">اضف الى السلة</a>
//                       <FontAwesomeIcon icon={faHeart} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className='category-every-card'>
//                 <div className="card">
//                   <div className='img-card'>
//                     <img src={box} className="card-img-top" alt="..." />
//                   </div>
//                   <div className="card-body">
//                     <div className='price'>
//                       <p className="card-title">بوكس هدايا</p>
//                       <p>200$</p>
//                     </div>
//                     <div className='cart'>
//                       <a href="#" className="btn btn-primary">اضف الى السلة</a>
//                       <FontAwesomeIcon icon={faHeart} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default Motherday






































// import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Footer from '../components/footer';

// function Motherday({ addToCart, addToFavorites }) {
//   const [products, setProducts] = useState([]);

//   // useEffect(() => {
//   //   axios.get('https://api.tropicaal.store/public/api/products')
//   //     .then((response) => {
//   //       const motherDayProducts = response.data.data.filter(product =>
//   //         product.category && product.category.name === 'عيد الام'
//   //       );
//   //       setProducts(motherDayProducts);
//   //     })
//   //     .catch((error) => {
//   //       console.error('Error fetching products:', error);
//   //     });
//   // }, []);



//   useEffect(() => {
//     axios.get('https://api.tropicaal.store/public/api/products')
//       .then((response) => {
//         console.log('كل المنتجات:', response.data.data); // دي تطبعلك المنتجات وتشوفي الكاتيجوري
//         setProducts(response.data.data); // من غير فلترة خالص
//       })
//       .catch((error) => {
//         console.error('Error fetching products:', error);
//       });
//   }, []);



//   return (
//     <>
//       <div className='category-page row m-0'>
//         <div className='title-header col-md-11'>
//           <p>هدايا عيد الام</p>
//         </div>

//         <div className='category-content col-md-11'>
//           <div className='all-cards'>
//             <div className='group-cards'>
//               {products.map((product) => (
//                 <div className='category-every-card' key={product.id}>
//                   <div className="card">
//                     <div className='img-card'>
//                       <Link to={`/details/${product.id}`}>
//                         {/* <img src={product.image} className="card-img-top" alt={product.name} /> */}
//                         {/* <img src={`https://api.tropicaal.store/public${product.image}`} className="card-img-top" alt={product.name} /> */}
//                         <img
//                           src={product.image ? `https://api.tropicaal.store/public${product.image}` : require('../assets/Ellipse 10.png')}
//                           className="card-img-top"
//                           alt={product.name}
//                         />

//                       </Link>
//                     </div>
//                     <div className="card-body">
//                       <div className='price'>
//                         <p className="card-title">{product.name}</p>
//                         <p>{product.price}$</p>
//                       </div>
//                       <div className='cart'>
//                         <button
//                           onClick={() => addToCart(product)}
//                           className="btn btn-primary">
//                           اضف الى السلة
//                         </button>
//                         <FontAwesomeIcon
//                           icon={faHeart}
//                           className='heart-cart cursor-pointer'
//                           onClick={() => addToFavorites(product)}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               {products.length === 0 && (
//                 <p className="text-center w-100 mt-4">لا توجد منتجات لعيد الأم حالياً.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Motherday;












import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

function Motherday({ addToCart, addToFavorites }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://api.tropicaal.store/public/api/products')
      .then((response) => {
        console.log('كل المنتجات:', response.data.data); // طباعة المنتجات في الـ console
        setProducts(response.data.data); // تخزين المنتجات
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <>
      <div className='category-page row m-0'>
        <div className='title-header col-md-11'>
          <p>هدايا عيد الام</p>
        </div>

        <div className='category-content col-md-11'>
          <div className='all-cards'>
            <div className='group-cards'>
              {products.map((product) => (
                <div className='category-every-card' key={product.id}>
                  <div className="card">
                    <div className='img-card'>
                      <Link to={`/details/${product.id}`}>
                        {/* <img src={product.main_image} className="card-img-top" alt={product.name} /> */}
                        <img src={product.main_image || 'path/to/default/image.jpg'} className="card-img-top" alt={product.name} />

                      </Link>
                    </div>
                    <div className="card-body">
                      <div className='price'>
                        <p className="card-title">{product.name}</p>
                        <p>{product.price ? product.price : 'غير متوفر'}</p>
                      </div>
                      <div className='cart'>
                        <button
                          onClick={() => addToCart(product)}
                          className="btn btn-primary">
                          اضف الى السلة
                        </button>
                        <FontAwesomeIcon
                          icon={faHeart}
                          className='heart-cart cursor-pointer'
                          onClick={() => addToFavorites(product)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {products.length === 0 && (
                <p className="text-center w-100 mt-4">لا توجد منتجات حالياً.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Motherday;
