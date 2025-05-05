import React from 'react'
import { Link } from 'react-router-dom'
import frame6 from '../../assets/Frame 6.png'
import frame7 from '../../assets/photo_2025-05-05_12-32-19.jpg'
import frame8 from '../../assets/photo_2025-05-05_12-32-39.jpg'
// import frame9 from '../../assets/photo_2025-05-05_12-32-44.jpg'
import elipse1 from '../../assets/Ellipse 1.png'
function Hero({ t }) {
    return (
        <>
            <div className='hero position-relative row m-0 p-0'>
                <img
                    src={elipse1}
                    alt='...'
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        transform: 'translateY(-50%)',
                        width: '230px',
                        zIndex: -1,
                        padding: "0"
                    }}
                />
                <div id="carouselExampleCaptions"
                    className="carousel slide col-md-11"
                    data-bs-ride="carousel"
                    data-bs-interval="3000">

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner col-md-12">
                        <div className="carousel-item active">
                            <div className="d-flex justify-content-center align-items-center w-100" style={{ height: '500px', position: 'relative' }}>
                                <img src={frame6} className="d-block w-100 position-absolute top-0 start-0" style={{ height: '100%', objectFit: 'cover', zIndex: 0 }} alt="..." />
                                <div className="caption-hero text-center text-white col-xl-5" style={{ zIndex: 1 }}>
                                    <p className='my-5'>استمتع معنا في عالم الهدايا</p>
                                    <div className="main-btn col-md-6 ">
                                        <Link to="#">تسوق الآن</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-center align-items-center w-100" style={{ height: '500px', position: 'relative' }}>
                                <img src={frame7} className="d-block w-100 position-absolute top-0 start-0" style={{ height: '100%', objectFit: 'cover', zIndex: 0 }} alt="..." />
                                <div className="caption-hero text-center text-white col-xl-5" style={{ zIndex: 1 }}>
                                    <p className='my-5'>استمتع معنا في عالم الهدايا</p>
                                    <div className="main-btn col-md-6 ">
                                        <Link to="#">تسوق الآن</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex justify-content-center align-items-center w-100" style={{ height: '500px', position: 'relative' }}>
                                <img src={frame8} className="d-block w-100 position-absolute top-0 start-0" style={{ height: '100%', objectFit: 'cover', zIndex: 0 }} alt="..." />
                                <div className="caption-hero text-center text-white col-xl-5" style={{ zIndex: 1 }}>
                                    <p className='my-5'>استمتع معنا في عالم الهدايا</p>
                                    <div className="main-btn col-md-6 ">
                                        <Link to="#">تسوق الآن</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
