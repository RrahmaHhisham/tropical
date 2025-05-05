import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import box from '../../assets/Frame 102.png'
import flowers from '../../assets/Frame 101.png'
import gift from '../../assets/Frame 84.png'
function SpecialGifts() {
    return (
        <>
            <div className='FeaturedProducts row m-0 p-0'>
                <div className='title-section col-md-10 col-11 mx-0'>
                    <p className='col-md-6 col-10'>الهدايا الخاصة</p>
                    <Link to="../Categoriespage" className=' col-md-6 col-10'>عرض الكل  <FontAwesomeIcon icon={faArrowLeft} className='arrow-icon' /></Link>
                </div>
                <div className="allcards col-md-10">
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

export default SpecialGifts
