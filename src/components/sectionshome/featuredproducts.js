import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import box from '../../assets/Frame 102.png'
import flowers from '../../assets/Frame 101.png'
import gift from '../../assets/Frame 84.png'
import elipse2 from '../../assets/Ellipse 2.png'

function FeaturedProducts() {
    return (
        <>
            <div className='FeaturedProducts row m-0 p-0'>

            <div className='img-back d-flex '>
                    <img
                        src={elipse2}
                        alt='...'
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            right: '0',
                            zIndex: -1
                        }}
                    />
                </div>


                <div className='title-section col-md-10 col-11 mx-0'>
                    <p className='col-md-6 col-10'>منتجات مميزة</p>
                    <Link className='col-md-6 col-10'>عرض الكل  <FontAwesomeIcon icon={faArrowLeft} className='arrow-icon'/></Link>
                </div>
                <div className="allcards col-md-10">
                    <div className='everycard'>
                        <div className="card">
                            <div className='img-card'>
                                <img src={box} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <div className='price'>
                                    <p className="card-title">بوكس هدايا</p>
                                    <p>200$</p>
                                </div>
                                <div className='cart'>
                                    <a href="#" className="btn btn-primary">اضف الى السلة</a>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='everycard'>
                        <div className="card">
                            <img src={flowers} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className='price'>
                                    <p className="card-title">بوكس هدايا</p>
                                    <p>200$</p>
                                </div>
                                <div className='cart'>
                                    <a href="#" className="btn btn-primary">اضف الى السلة</a>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='everycard'>
                        <div className="card">
                            <img src={gift} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className='price'>
                                    <p className="card-title">بوكيه ورد</p>
                                    <p>200$</p>
                                </div>
                                <div className='cart'>
                                    <a href="#" className="btn btn-primary">اضف الى السلة</a>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='everycard'>
                        <div className="card">
                            <img src={box} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className='price'>
                                    <p className="card-title">بوكس هدايا</p>
                                    <p>200$</p>
                                </div>
                                <div className='cart'>
                                    <a href="#" className="btn btn-primary">اضف الى السلة</a>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FeaturedProducts
















// import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';

// function FeaturedProducts() {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // تحميل البيانات من API عند تحميل الصفحة
//     useEffect(() => {
//         // رابط الـ API
//         const apiUrl = 'https://api.tropicaal.store/public';

//         // جلب البيانات من الـ API
//         fetch(apiUrl)
//             .then(response => response.json())
//             .then(data => {
//                 setProducts(data);  // تخزين البيانات في الحالة
//                 setLoading(false);   // تغيير حالة التحميل
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//                 setLoading(false);
//             });
//     }, []);  // [] تعني أن الكود سينفذ مرة واحدة عند تحميل الصفحة

//     if (loading) {
//         return <p>جاري تحميل المنتجات...</p>;  // عرض رسالة عند التحميل
//     }

//     return (
//         <>
//             <div className="FeaturedProducts row m-0 p-0">
//                 <div className="title-section col-md-10">
//                     <p>منتجات مميزة</p>
//                     <p>عرض الكل <FontAwesomeIcon icon={faArrowLeft} /></p>
//                 </div>
//                 <div className="allcards col-md-10">
//                     {products.map(product => (
//                         <div className="everycard" key={product.id}>
//                             <div className="card">
//                                 <div className="img-card">
//                                     {/* <img src={product.image} className="card-img-top" alt={product.name} /> */}
//                                     <img src={product.image || 'default-image.jpg'} className="card-img-top" alt={product.name} />

//                                 </div>
//                                 <div className="card-body">
//                                     <div className="price">
//                                         <p className="card-title">{product.name}</p>
//                                         <p>{product.price}$</p>
//                                     </div>
//                                     <div className="cart">
//                                         <a href="#" className="btn btn-primary">اضف الى السلة</a>
//                                         <FontAwesomeIcon icon={faHeart} />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default FeaturedProducts;
