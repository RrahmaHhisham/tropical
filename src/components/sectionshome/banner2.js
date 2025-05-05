import React from 'react'
import { Link } from 'react-router-dom'
import banner2 from '../../assets/Frame 18.png'
function Banner2() {
    return (
        <>
            <div className='banner2 row mx-0 p-0'>
                <div className="card col-md-10 col-11">
                    <img src={banner2} className="card-img col-md-12 p-0" alt="..." />
                    <div className="card-img-overlay col-md-12 p-0">
                        <div className='desc-card col-md-12 col-lg-6'>
                            <h5 className="card-title">"احتفل بالمناسبات بأجمل الهدايا"</h5>
                            <p className="card-text">
                                تقديم الهدايا وسيلة للتعبير عن الحب والاهتمام في المناسبات الخاصة.
                                سواء كانت ذكرى ميلاد، عيد زواج، أو أي مناسبة سعيدة أخرى
                            </p>
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

export default Banner2