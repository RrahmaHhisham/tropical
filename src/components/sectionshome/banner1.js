import React from 'react'
import { Link } from 'react-router-dom'
import banner1 from '../../assets/Frame 115.png'
function Banner1() {
    return (
        <>
            <div className='banner1 row mx-0 p-0'>
                <div className="card col-md-10 col-11">
                    <img src={banner1} className="card-img col-md-12 p-0" alt="..." />
                    <div className="card-img-overlay col-md-12 p-0">
                        <div className='desc-card col-md-12 col-lg-6'>
                            <p className="card-text">"باقات ورد ساحرة بخصم يصل إلى 40% – فقط هذا الأسبوع!"</p>
                            <div className="main-btn col-md-6 ">
                                <Link to="#">تسوق الآن</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner1
