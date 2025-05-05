import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import charachter from "../../assets/Ellipse 8.png"
function Opinions() {
    return (
        <>
            <div className='opinions row m-0'>
                <div className="card col-md-10">
                    <h5 className="card-header">اراء العملاء</h5>
                    <div className="card-body">
                        <div className="card">
                            <div className="card-body">
                                <div className='info'>
                                    <div className='username col'>
                                        <img src={charachter} alt='' />
                                    </div>
                                    <div className='rate col-md-8'>
                                        <h5 className="card-title">زياد الجرداوي</h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">
                                            <FontAwesomeIcon icon={faStar} style={{ color: '#0B8D43' }} />
                                            <FontAwesomeIcon icon={faStar} style={{ color: '#0B8D43' }} />
                                            <FontAwesomeIcon icon={faStar} style={{ color: '#0B8D43' }} />
                                            <FontAwesomeIcon icon={faStar} style={{ color: '#0B8D43' }} />
                                            <FontAwesomeIcon icon={faStar} style={{ color: '#089247' }} />
                                        </h6>
                                    </div>
                                </div>
                                <div className='desc'>
                                    <p className="card-text">طلبت باقة ورد كهدية، وكانت أجمل من المتوقع! التغليف راقٍ والتوصيل كان في الوقت المحدد تمامًا. شكراً لكم على الخدمة الرائعة!</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className='info'>
                                    <div className='username col'>
                                        <img src={charachter} alt='' />
                                    </div>
                                    <div className='rate col-md-8'>
                                        <h5 className="card-title">زياد الجرداوي</h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">
                                            <FontAwesomeIcon icon={faStar} style={{ color: '#0B8D43' }} />
                                            <FontAwesomeIcon icon={faStar} style={{ color: '#0B8D43' }} />
                                            <FontAwesomeIcon icon={faStar} style={{ color: '#0B8D43' }} />
                                            <FontAwesomeIcon icon={faStar} style={{ color: '#0B8D43' }} />
                                            <FontAwesomeIcon icon={faStar} style={{ color: '#089247' }} />
                                        </h6>
                                    </div>
                                </div>
                                <div className='desc'>
                                    <p className="card-text">طلبت باقة ورد كهدية، وكانت أجمل من المتوقع! التغليف راقٍ والتوصيل كان في الوقت المحدد تمامًا. شكراً لكم على الخدمة الرائعة!</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className='info'>
                                    <div className='username col'>
                                        <img src={charachter} alt='' />
                                    </div>
                                    <div className='rate col-md-8'>
                                        <h5 className="card-title">زياد الجرداوي</h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">
                                            <FontAwesomeIcon icon={faStar} style={{ color: '#0B8D43' }} />
                                            <FontAwesomeIcon icon={faStar} style={{ color: '#0B8D43' }} />
                                            <FontAwesomeIcon icon={faStar} style={{ color: '#0B8D43' }} />
                                            <FontAwesomeIcon icon={faStar} style={{ color: '#0B8D43' }} />
                                            <FontAwesomeIcon icon={faStar} style={{ color: '#089247' }} />
                                        </h6>
                                    </div>
                                </div>
                                <div className='desc'>
                                    <p className="card-text">طلبت باقة ورد كهدية، وكانت أجمل من المتوقع! التغليف راقٍ والتوصيل كان في الوقت المحدد تمامًا. شكراً لكم على الخدمة الرائعة!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Opinions
