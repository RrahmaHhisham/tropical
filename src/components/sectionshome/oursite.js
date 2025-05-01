import React from 'react'
import imgcard from '../../assets/Frame 118.png'
function OurSite() {
    return (
        <>
            <div className='oursite row m-0 p-0'>
                <div class="card mb-3 col-md-10">
                    <div class="row g-0">
                        <div class="col-md-8">
                            <div class="card-body">
                                <p class="card-text">في موقعنا تجد كل ما تحتاجه للتعبير عن مشاعرك، من باقات ورد تنبض بالجمال، إلى هدايا مميزة تضيف لمسة حب لكل مناسبة</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src={imgcard} class="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurSite
