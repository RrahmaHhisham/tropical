import React from 'react'
import { Link } from 'react-router-dom'
import frame6 from '../../assets/Frame 6.png'
import elipse1 from '../../assets/Ellipse 1.png'
function Hero() {
    return (
        <>
            <div className='hero position-relative col-md-12'>
                <img
                    src={elipse1}
                    alt='...'
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        transform: 'translateY(-50%)',
                        width: '230px',
                        zIndex: -1
                    }}
                />
                <div id="carouselExampleCaptions"
                    className="carousel slide col-md-11"
                    data-bs-ride="carousel"
                    data-bs-interval="3000">

                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="d-flex justify-content-center align-items-center w-100" style={{ height: '500px', position: 'relative' }}>
                                <img src={frame6} className="d-block w-100 position-absolute top-0 start-0" style={{ height: '100%', objectFit: 'cover', zIndex: 0 }} alt="..." />
                                <div className="text-center text-white" style={{ zIndex: 1 }}>
                                    <p className='my-5'>استمتع معنا في عالم الهدايا</p>
                                    <Link className='col-md-3 main-btn'>تسوق الآن</Link>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="d-flex justify-content-center align-items-center w-100" style={{ height: '500px', position: 'relative' }}>
                                <img src={frame6} className="d-block w-100 position-absolute top-0 start-0" style={{ height: '100%', objectFit: 'cover', zIndex: 0 }} alt="..." />
                                <div className="text-center text-white" style={{ zIndex: 1 }}>
                                    <p className='my-5'>استمتع معنا في عالم الهدايا</p>
                                    <Link className='col-md-3 main-btn'>تسوق الآن</Link>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="d-flex justify-content-center align-items-center w-100" style={{ height: '500px', position: 'relative' }}>
                                <img src={frame6} className="d-block w-100 position-absolute top-0 start-0" style={{ height: '100%', objectFit: 'cover', zIndex: 0 }} alt="..." />
                                <div className="text-center text-white" style={{ zIndex: 1 }}>
                                    <p className='my-5'>استمتع معنا في عالم الهدايا</p>
                                    <Link className='col-md-3 main-btn'>تسوق الآن</Link>
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
