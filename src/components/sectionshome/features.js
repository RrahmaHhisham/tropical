import React from 'react'
import truck from '../../assets/truck-fast.png'
import medel from '../../assets/medal-star.png'
import gift from '../../assets/gift.png'
import elipse2 from '../../assets/Ellipse 2.png'
function Features() {
    return (
        <>
            <div className='features row m-0 p-0'>
                <div className='wrapper col-md-10 d-flex flex-wrap justify-content-center align-items-center position-relative'>
                    <div className='everycard col-lg-4 col-md-5'>
                        <div className='img-feature'>
                            <img src={truck} alt='' />
                        </div>
                        <div className='col-md-9'>
                            <p className='title-feature'>شحن سريع</p>
                            <p className='desc-feature'>توفر خدمة الشحن السريع لضمان وصول منتجاتك اليك بأسرع وقت ممكن</p>
                        </div>
                    </div>
                    <div className='everycard col-lg-4 col-md-5'>
                        <div className='img-feature'>
                            <img src={medel} alt='' />
                        </div>
                        <div className='col-md-9'>
                            <p className='title-feature'>جودة مضمونة</p>
                            <p className='desc-feature'>نستخدم أجود أنواع الزهور والمواد، لضمان تجربة لا تُنسى.</p>
                        </div>
                    </div>
                    <div className='everycard col-lg-4 col-md-6'>
                        <div className='img-feature'>
                            <img src={gift} alt='' />
                        </div>
                        <div className='col-md-9'>
                            <p className='title-feature'>تنوع كبير في الهدايا</p>
                            <p className='desc-feature'>زهور، شوكولاتة، عطور، وتغليف فاخر – كل ما تحتاجه في مكان واحد.</p>
                        </div>
                    </div>

                </div>
                <div className='img-back d-flex '>
                    <img
                        src={elipse2}
                        alt='...'
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            right: '0',
                            width: '500px',  
                            zIndex: -1
                        }}
                    />
                </div>

            </div>
        </>
    )
}

export default Features
