import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import insta from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import whatsapp from '../assets/whatsapp-icon.png'
import logo from '../assets/logo_1.png'
import tajadud from '../assets/tajadud.png'
function Footer() {
  return (
    <>
      <footer className="bg-body-tertiary text-center">
        <div className="container p-4">
          <section className="desc-footer mb-4">
            <div className='col-md-8'>
              <p>
                نهتم بتوصيل مشاعرك بأجمل الطرق، من خلال باقات ورد وهدايا تنبض بالجمال في كل مناسبة.
              </p>
            </div>
            <div className='col-md-4'>
              <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
                <img src={whatsapp} alt='' />
              </a>
              <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
                <img src={insta} alt='' />
              </a>
              <a className="btn btn-outline btn-floating m-1" href="#!" role="button">
                <img src={facebook} alt='' />
              </a>


            </div>
          </section>

          {/* <!-- Section: Links --> */}
          <section className="">
            {/* <!--Grid row--> */}
            <div className="row">
              {/* <!--Grid column--> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <img src={logo} alt='' />
                <p><a><img src={tajadud} alt='' />powered</a></p>
                
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-2 col-md-5 mb-4 mb-md-0 text-end">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-body" href="#!">الرئيسية</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">المفضلة</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">السلة</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">الاقسام</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!">تواصل معنا</a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-4 col-md-7 mb-4 mb-md-0 text-end">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a className="text-body" href="#!"><FontAwesomeIcon icon={faLocationDot} className='icon-social-media'/>المنصورة حي الجامعه</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!"><FontAwesomeIcon icon={faPhone} className='icon-social-media'/>852-200-7644</a>
                  </li>
                  <li>
                    <a className="text-body" href="#!"><FontAwesomeIcon icon={faMessage} className='icon-social-media'/>Domenica.Wilderman90@hotmail.com</a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                <ul className="list-unstyled mb-0 text-center">
                  <li>
                    <p>اشترك فى عروضنا عبر الواتس آب</p>
                  </li>
                  <li>
                    <p><small>تصلك رساله عند وجود خصومات وعروض</small></p>
                  </li>
                  <li>
                    <a className="text-body" href="#!">852-200-7644</a>
                    <p>الاشتراك</p>
                  </li>
                  
                </ul>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </section>
        </div>

      </footer>
    </>
  );
}

export default Footer;
