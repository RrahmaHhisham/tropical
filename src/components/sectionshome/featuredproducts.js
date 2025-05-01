import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import box from '../../assets/Frame 102.png'
import flowers from '../../assets/Frame 101.png'
import gift from '../../assets/Frame 84.png'
function FeaturedProducts() {
    return (
        <>
            <div className='FeaturedProducts row m-0 p-0'>
                <div className='title-section col-md-10'>
                    <p>منتجات مميزة</p>
                    <p>عرض الكل  <FontAwesomeIcon icon={faArrowLeft} /></p>
                </div>
                <div className="allcards col-md-10">
                    <div className='everycard'>
                        <div class="card">
                            <img src={box} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <div className='price'>
                                    <p class="card-title">بوكس هدايا</p>
                                    <p>200$</p>
                                </div>
                                <div className='cart'>
                                    <a href="#" class="btn btn-primary">اضف الى السلة</a>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='everycard'>
                        <div class="card">
                            <img src={flowers} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <div className='price'>
                                    <p class="card-title">بوكس هدايا</p>
                                    <p>200$</p>
                                </div>
                                <div className='cart'>
                                    <a href="#" class="btn btn-primary">اضف الى السلة</a>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='everycard'>
                        <div class="card">
                            <img src={gift} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <div className='price'>
                                    <p class="card-title">بوكيه ورد</p>
                                    <p>200$</p>
                                </div>
                                <div className='cart'>
                                    <a href="#" class="btn btn-primary">اضف الى السلة</a>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='everycard'>
                        <div class="card">
                            <img src={box} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <div className='price'>
                                    <p class="card-title">بوكس هدايا</p>
                                    <p>200$</p>
                                </div>
                                <div className='cart'>
                                    <a href="#" class="btn btn-primary">اضف الى السلة</a>
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
