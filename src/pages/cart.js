import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/footer'
function Cart({ cart, setCart }) {


  const removeFromCart = (productIndex) => {
    const newCart = cart.filter((_, index) => index !== productIndex);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart)); // حفظ التغييرات في localStorage
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // تحميل السلة من localStorage عند التحميل
    }
  }, [setCart]);




  return (
    <>
      <div className='cart row m-0'>

        <div className='title-header col-md-11'>
          <p>السلة</p>
        </div>
        <div className='box-section col-md-11'>
          <div className='right-side col-md-8'>

            {cart.length === 0 ? (
              <p>لا يوجد منتجات في السلة.</p>
            ) : (
              cart.map((product, index) => (
                <div class="card mb-3" key={index} >
                  <div class="row p-2 g-0">
                    <div className='remove'>
                      <div
                        className="icon-container"
                        style={{
                          position: 'absolute',
                          top: '10px',
                          left: '10px',
                          cursor: 'pointer'
                        }}
                        onClick={() => removeFromCart(index)}
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </div>
                    </div>
                    <div className='item-cart'>
                      <div class="col-md-3">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div className="col-md-9">
                        <div className="card-body">
                          <div>
                            <h5 className="card-title">{product.name}</h5>
                          </div>
                          <div>
                            <p className="card-text"><FontAwesomeIcon icon={faPlus} className='add-or-minus' /><span>1</span><FontAwesomeIcon icon={faMinus} className='add-or-minus' /></p>
                          </div>
                          <div></div>
                          <div>{product.price}$</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}




          </div>


          <div className='left-side col-md-4'>
            <div class="card">
              <div class="card">
                <div class="card-body">
                  <div className='total-price'>
                    <div className='price'>
                      <p>السعر</p>
                      <p>$ 800</p>
                    </div>
                    <div className='price'>
                      <p>الاجمالي</p>
                      <p>$ 800</p>
                    </div>
                    <div className='price'>
                      <input placeholder='ادخل الكود الخاص بك' />
                    </div>
                  </div>
                  <div className='data-Cash'>
                    <div>
                      <input type='radio' id='pickup' name='deliveryOption' className='check' />
                      <label htmlFor='pickup'>استلام من الفرع</label>
                    </div>
                    <div>
                      <input type='radio' id='delivery' name='deliveryOption' className='check' />
                      <label htmlFor='delivery'>توصيل</label>
                    </div>
                    <p><small>مصاريف الشحن تحدد حسب المنطقة</small></p>
                  </div>
                  <div className='form-user col-md-12'>
                    <div className='user'>
                      <label>الاسم</label>
                      <input placeholder='الاسم' />
                    </div>
                    <div className='user-num'>
                      <div className='col-md-5'>
                        <label>رقم الهاتف</label>
                        <input placeholder='رقم الهاتف' />
                      </div>
                      <div className='col-md-5'>
                        <label>رقم هاتف اخر</label>
                        <input placeholder='رقم الهاتف' />
                      </div>
                    </div>
                    <div className='user'>
                      <label>العنوان</label>
                      <input placeholder='العنوان' />
                    </div>
                    <div className='user'>
                      <label>ملاحظات</label>
                      <textarea placeholder='ملاحظات' rows="4"></textarea>
                    </div>
                    <div className='btn-order col-md-4'>
                      <button>اطلب الان</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Cart





















{/* <div className='left-side col-md-4'>
            <div class="card">
              <div class="card">
                <div class="card-body">
                  <div className='total-price'>
                    <div className='price'>
                      <p>السعر</p>
                      <p>$ 800</p>
                    </div>
                    <div className='price'>
                      <p>الاجمالي</p>
                      <p>$ 800</p>
                    </div>
                    <div className='price'>
                      <input placeholder='ادخل الكود الخاص بك' />
                    </div>
                  </div>
                  <div className='data-user'>
                    <div>
                      <input type='radio' id='pickup' name='deliveryOption' className='check' />
                      <label htmlFor='pickup'>استلام من الفرع</label>
                    </div>
                    <div>
                      <input type='radio' id='delivery' name='deliveryOption' className='check' />
                      <label htmlFor='delivery'>توصيل</label>
                    </div>
                    <p><small>مصاريف الشحن تحدد حسب المنطقة</small></p>
                  </div>
                  <div className='form-user col-md-12'>
                    <div className='user'>
                      <label>الاسم</label>
                      <input placeholder='الاسم' />
                    </div>
                    <div className='user-num'>
                      <div className='col-md-5'>
                        <label>رقم الهاتف</label>
                        <input placeholder='رقم الهاتف' />
                      </div>
                      <div className='col-md-5'>
                        <label>رقم هاتف اخر</label>
                        <input placeholder='رقم الهاتف' />
                      </div>
                    </div>
                    <div className='user'>
                      <label>العنوان</label>
                      <input placeholder='العنوان' />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div> */}