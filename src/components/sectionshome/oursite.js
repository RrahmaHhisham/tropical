import React from 'react'
import imgcard from '../../assets/Frame 118.png'
import { Link } from 'react-router-dom'

function OurSite() {
    return (
        <>
            <div className='oursite row m-0 p-0'>
                <div className="card mb-3 col-md-10">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="card-text">في موقعنا تجد كل ما تحتاجه للتعبير عن مشاعرك، من باقات ورد تنبض بالجمال، إلى هدايا مميزة تضيف لمسة حب لكل مناسبة</p>
                                <Link className="main-btn col-md-4 text-center">تسوق الآن</Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={imgcard} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurSite
