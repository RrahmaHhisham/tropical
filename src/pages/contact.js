import React from 'react'
import Form from '../components/sectionshome/form'
import Footer from '../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock
} from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <>
            <div className='contact row m-0'>
                <div className='title-header col-md-11'>
                    <p>تواصل معنا</p>
                </div>
                <div className='call col-md-11'>
                    <div class="card col-md-12">
                        <div class="card-body">
                            <div class="card col-md-4 col-lg-2">
                                <div class="card-body">
                                    <h6 class="card-subtitle mb-2 text-body-secondary"><FontAwesomeIcon icon={faPhone} className='icon-call' /></h6>
                                    <p class="card-text">551-635-7450</p>
                                    
                                </div>
                            </div>
                            <div class="card col-md-4 col-lg-2">
                                <div class="card-body">
                                    <h6 class="card-subtitle mb-2 text-body-secondary"><FontAwesomeIcon icon={faEnvelope} className='icon-call' /></h6>
                                    <p class="card-text">Reggie85@gmail.com</p>
                                    
                                </div>
                            </div>
                            <div class="card col-md-4 col-lg-2">
                                <div class="card-body">
                                    <h6 class="card-subtitle mb-2 text-body-secondary"><FontAwesomeIcon icon={faLocationDot} className='icon-call' /></h6>
                                    <p class="card-text">المنصورة, حي الجامعة</p>
                                    
                                </div>
                            </div>
                            <div class="card col-md-4 col-lg-2">
                                <div class="card-body">
                                    <h6 class="card-subtitle mb-2 text-body-secondary"><FontAwesomeIcon icon={faClock} className='icon-call' /></h6>
                                    <p class="card-text">مواعيد العمل من 9 الي 10</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Form />
                <Footer />
            </div>
        </>
    )
}

export default Contact
