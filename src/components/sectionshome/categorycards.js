import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import mother_day from '../../assets/Frame 109.png'
import flowers from '../../assets/Frame 110.png'
import birthday from '../../assets/Frame 111.png'
import { Link } from 'react-router-dom';
import elipse1 from '../../assets/Ellipse 1.png'

function CategoryCards() {
    return (
        <>
            <div className='category-cards position-relative row mx-0 p-0'>
                <div className='content-category col-md-10'>
                    <div className='title-section col-md-12 col-11 mx-0'>
                                        <p className='col-md-6 col-10'>الاقسام</p>
                                        <Link className='col-md-6 col-10'>عرض الكل  <FontAwesomeIcon icon={faArrowLeft} className='arrow-icon'/></Link>
                                    </div>
                    <div className="allcards col-md-12">
                        <div className='everycard'>
                            <Link to="/Categoriespage" className='card-link'>
                                <div className='card'>
                                    <img src={mother_day} alt='Mother Day' />
                                </div>
                            </Link>
                        </div>
                        <div className='everycard'>
                            <div className='card'>
                                <Link>
                                    <img src={flowers} alt='' />
                                </Link>

                            </div>
                        </div>
                        <div className='everycard'>
                            <div className='card'>
                                <Link>
                                    <img src={birthday} alt='' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={elipse1}
                    alt='...'
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        transform: 'translateY(50%)',
                        width: '230px',
                        zIndex: -1,
                        padding: "0"
                    }}
                />

            </div>
        </>
    )
}

export default CategoryCards
