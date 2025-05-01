import React from 'react'
import { Link } from 'react-router-dom'
import banner1 from '../../assets/Frame 115.png'
function Banner1() {
    return (
        <>
            <div className='banner1 row mx-0 p-0'>
            <div class="card col-md-10">
                <img src={banner1} class="card-img" alt="..." />
                    <div class="card-img-overlay col-md-6">
                        <p class="card-text">"باقات ورد ساحرة بخصم يصل إلى 40% – فقط هذا الأسبوع!"</p>
                        <div className='btn-banner'>
                        <Link className='col-md-7 main-btn'>تسوق الآن</Link>
                        </div>
                    </div>
            </div>
            </div>
        </>
    )
}

export default Banner1
