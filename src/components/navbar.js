import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo 1.png';

function Navbar() {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [showModal]);



    const [inputDir, setInputDir] = useState('rtl');
    const [isInputEmpty, setIsInputEmpty] = useState(true);
    const [isLanguageSet, setIsLanguageSet] = useState(false);

    const handleInput = (e) => {
        const value = e.target.value;

        if (!isLanguageSet) {
            if (/[\u0600-\u06FF]/.test(value)) {
                setInputDir('rtl');
                setIsLanguageSet(true);
            } else if (/^[a-zA-Z]/.test(value)) {
                setInputDir('ltr');
                setIsLanguageSet(true);
            }
        }

        if (value.trim() === '') {
            setIsInputEmpty(true);
        } else {
            setIsInputEmpty(false);
        }
    };



    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg row my-5 mx-0 p-0 ">
                <div className="container-fluid col-md-11">
                    <Link className="navbar-brand col-md-2" to="#">
                        <img src={logo} alt='' />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarSupportedContent">
                        <ul className="nav justify-content-center col-md-10 col-xl-8">
                            <li className="nav-item"><Link className="nav-link active" to="#">الرئيسية</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#">المفضلة</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#">السلة</Link></li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={handleShow}>
                                    الاقسام <FontAwesomeIcon icon={faSquareCaretDown} />
                                </button>
                            </li>

                            {showModal && (
                                <>
                                    <div className="modal-backdrop fade show"></div>
                                    <div
                                        className="modal show fade"
                                        style={{ display: 'block', marginTop: '150px' }}
                                        onClick={handleClose}
                                        tabIndex="-1"
                                    >
                                        <div className="modal-dialog">
                                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                                <div className="modal-body text-center p-0">
                                                    <ul className="list-group list-group-flush p-0">
                                                        <li className="list-group-item border-0">هدايا عيد الام</li>
                                                        <li className="list-group-item border-0">هدايا العيد</li>
                                                        <li className="list-group-item border-0">هدايا رمضان</li>
                                                        <li className="list-group-item border-0">هدايا عيد ميلاد</li>
                                                        <li className="list-group-item border-0">بوكيه ورد</li>
                                                        <li className="list-group-item border-0">بوكس ورد</li>
                                                        <li className="list-group-item border-0">بوكيه شيكولاته</li>
                                                        <li className="list-group-item border-0">بوكس شيكولاته</li>
                                                        <li className="list-group-item border-0">هدايا واكسسوارات</li>
                                                        <li className="list-group-item border-0">عيد الحب (بوكس -بوكيه)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}


                            <li className="nav-item"><Link className="nav-link" to="#">تواصل معنا</Link></li>
                        </ul>

                        <form className="d-flex col-xl-4 col-md-2" role="search">
                            <div className="input-group position-relative">
                                {isInputEmpty && (
                                    <span
                                        className="input-group-text bg-transparent border-0"
                                        style={{
                                            position: 'absolute',
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            background: '#F5F5F5',
                                            color: '#00000',
                                            zIndex: '1',
                                            pointerEvents: 'none',
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        <p style={{ margin: 0 }}>ابحث عن هديتك</p>
                                    </span>
                                )}
                                <input
                                    className="form-control"
                                    type="search"
                                    aria-label="Search"
                                    dir={inputDir}
                                    onInput={handleInput}
                                    style={{
                                        boxShadow: 'none',
                                        outline: 'none',
                                    }}
                                />
                            </div>
                        </form>

                    </div>
                </div>
            </nav>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
                <div className="offcanvas-header flex-row-reverse justify-content-between">
                    <h5 className="offcanvas-title" id="mobileMenuLabel">القائمة</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="nav flex-column p-0">
                        <li className="nav-item"><Link className="nav-link" to="#">الرئيسية</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">المفضلة</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#">السلة</Link></li>
                        <div className="custom-dropdown">
                            <button className="nav-link btn btn-link" onClick={() => setOpen(!open)}>
                                الاقسام <FontAwesomeIcon icon={faSquareCaretDown} />
                            </button>
                            <div className={`dropdown-content ${open ? 'open' : ''}`}>
                                <ul className="list-group list-group-flush p-0">
                                    <li className="list-group-item border-0">هدايا عيد الام</li>
                                    <li className="list-group-item border-0">هدايا العيد</li>
                                    <li className="list-group-item border-0">هدايا رمضان</li>
                                    <li className="list-group-item border-0">هدايا عيد ميلاد</li>
                                    <li className="list-group-item border-0">بوكيه ورد</li>
                                    <li className="list-group-item border-0">بوكس ورد</li>
                                    <li className="list-group-item border-0">بوكيه شيكولاته</li>
                                    <li className="list-group-item border-0">بوكس شيكولاته</li>
                                    <li className="list-group-item border-0">هدايا واكسسوارات</li>
                                    <li className="list-group-item border-0">عيد الحب (بوكس -بوكيه)</li>
                                </ul>
                            </div>
                        </div>
                        <li className="nav-item"><Link className="nav-link" to="#">تواصل معنا</Link></li>
                    </ul>
                    {/* <form className="d-flex mt-3" role="search">
                        <input className="form-control w-100" type="search" placeholder="ابحث عن هديتك" aria-label="Search" />
                    </form> */}
                    <form className="d-flex col-xl-6 " role="search">
                        <div className="input-group position-relative" style={{borderRadius: '20px'}}>
                            {isInputEmpty && (
                                <span
                                    className="input-group-text bg-transparent border-0"
                                    style={{
                                        position: 'absolute',
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        background: '#F5F5F5',
                                        color: '#00000',
                                        zIndex: '1',
                                        pointerEvents: 'none',
                                    }}
                                    >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    <p style={{ margin: '0 , 5px' }}>ابحث عن هديتك</p>
                                </span>
                            )}
                            <input
                                className="form-control"
                                type="search"
                                aria-label="Search"
                                dir={inputDir}
                                onInput={handleInput}
                                style={{
                                    
                                    boxShadow: 'none',
                                    outline: 'none',
                                }}
                            />
                        </div>
                    </form>
                </div>
            </div>


        </>
    );
}

export default Navbar;


































































// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons';
// import logo from '../assets/logo 1.png';
// function Navbar() {
//     const [showModal, setShowModal] = useState(false);

//     const handleShow = () => setShowModal(true);
//     const handleClose = () => setShowModal(false);


//     useEffect(() => {
//         if (showModal) {
//             document.body.classList.add('modal-open');
//         } else {
//             document.body.classList.remove('modal-open');
//         }

//         return () => {
//             document.body.classList.remove('modal-open');
//         };
//     }, [showModal]);


//     return (
//         <>
//             <nav class="navbar navbar-expand-lg row my-5 mx-0 p-0 ">
//                 <div class="container-fluid col-md-11">
//                     <Link class="navbar-brand col-md-2" href="#"><img src={logo} alt='' /></Link>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul class="nav justify-content-center col-md-8">
//                             <li class="nav-item">
//                                 <Link class="nav-link active" aria-current="page" href="#">الرئيسية</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link class="nav-link" aria-current="page" href="#">المفضلة</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link class="nav-link" aria-current="page" href="#">السلة</Link>
//                             </li>

//                             <li className="nav-item">
//                                 <button className="nav-link btn btn-link" onClick={handleShow}>
//                                     الاقسام <FontAwesomeIcon icon={faSquareCaretDown} />
//                                 </button>
//                             </li>







//                             {showModal && (
//                                 <>
//                                     <div
//                                         className="modal-backdrop fade show"
//                                     ></div>
//                                     <div
//                                         className="modal show fade"
//                                         style={{
//                                             display: 'block',
//                                             marginTop: '110px',
//                                         }}
//                                         onClick={handleClose}
//                                         tabIndex="-1"
//                                     >
//                                         <div className="modal-dialog">
//                                             <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//                                                 <div className="modal-body text-center p-0">
//                                                     <ul className="list-group list-group-flush p-0">
//                                                         <li className="list-group-item border-0">هدايا عيد الام</li>
//                                                         <li className="list-group-item border-0">هدايا العيد</li>
//                                                         <li className="list-group-item border-0">هدايا رمضان</li>
//                                                         <li className="list-group-item border-0">هدايا عيد ميلاد</li>
//                                                         <li className="list-group-item border-0">بوكيه ورد</li>
//                                                         <li className="list-group-item border-0">بوكس ورد</li>
//                                                         <li className="list-group-item border-0">بوكيه شيكولاته</li>
//                                                         <li className="list-group-item border-0">بوكس شيكولاته</li>
//                                                         <li className="list-group-item border-0">هدايا واكسسوارات</li>
//                                                         <li className="list-group-item border-0">عيد الحب (بوكس -بوكيه)</li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </>
//                             )}
//                             <li class="nav-item">
//                                 <Link class="nav-link" aria-current="page" href="#">تواصل معنا</Link>
//                             </li>
//                         </ul>
//                         <form class="d-flex col-md-2" role="search">
//                             <input class="form-control me-2 w-100" type="search" placeholder="ابحث عن هديتك" aria-label="Search" />
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Navbar
