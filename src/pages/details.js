import React from 'react'
import imddetail from '../assets/Frame 109.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

import Footer from '../components/footer'

function Details() {
    return (
        <>
            <div className='datail row m-0'>
                <div class="card mb-3 col-md-11">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={imddetail} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <div className='details-card'>
                                    <h5 class="card-title">بوكس هدايا</h5>
                                    <p class="card-text">بوكس مثالي لعشاق التفاصيل , يجمع بين الذوق والرقي في كل اختيار.</p>
                                    <div className='price'>
                                        <p>السعر</p>
                                        <p>200$</p>
                                    </div>
                                    <div className='price'>
                                        <p>اللون</p>
                                        <p className='colors'>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </p>
                                    </div>
                                    <div className='price'>
                                        <p>الفئة</p>
                                        <p>حريمي</p>
                                    </div>
                                    <div className='price'>
                                        <p>الححجم</p>
                                        <p>120x120</p>
                                    </div>
                                    <div className='price'>
                                        <p><FontAwesomeIcon icon={faPlus} /><span>1</span><FontAwesomeIcon icon={faMinus} /></p>
                                        <p><FontAwesomeIcon icon={faHeart} /></p>
                                    </div>
                                </div>
                                <div className='btn-details'>
                                    <button className='col-md-5'><FontAwesomeIcon icon={faBagShopping} className='mx-2'/>اضف الى السلة</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Details
