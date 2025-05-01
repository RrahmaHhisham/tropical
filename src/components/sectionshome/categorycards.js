import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import mother_day from '../../assets/Frame 109.png'
import flowers from '../../assets/Frame 110.png'
import birthday from '../../assets/Frame 111.png'
function CategoryCards() {
    return (
        <>
            <div className='category-cards row m-0 p-0'>
                <div className='title-section col-md-10'>
                    <p>الاقسام</p>
                    <p>عرض الكل  <FontAwesomeIcon icon={faArrowLeft} /></p>
                </div>
                <div className="allcards col-md-10">
                    <div className='everycard'>
                        <div className='card'>
                            <img src={mother_day} alt='' />
                        </div>
                    </div>
                    <div className='everycard'>
                        <div className='card'>
                            <img src={flowers} alt='' />
                        </div>
                    </div>
                    <div className='everycard'>
                        <div className='card'>
                            <img src={birthday} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryCards
