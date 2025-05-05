import React from 'react'
// import formimg from '../../assets/Frame 213.png'
function Form() {
    return (
        <>
            <div className='app row m-0'>
                <div className="card col-md-11">
                    <h5 className="card-header">نسعد دائمًا بسماعك! إذا كان لديك أي استفسار أو ملاحظة، لا تتردد في مراسلتنا.</h5>
                    <div className="card-body col-md-12">
                        <form>
                            <div className="row mb-4">
                                <div className="col">
                                    <div data-mdb-input-init className="form-outline">
                                        <label className="form-label" for="form6Example1">الاسم</label>
                                        <input type="text" id="form6Example1" className="form-control" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div data-mdb-input-init className="form-outline">
                                        <label className="form-label" for="form6Example2">البريد الالكتروني</label>
                                        <input type="text" id="form6Example2" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col">
                                    <div data-mdb-input-init className="form-outline">
                                        <label className="form-label" for="form6Example1">رقم الهاتف</label>
                                        <input type="text" id="form6Example1" className="form-control" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div data-mdb-input-init className="form-outline">
                                        <label className="form-label" for="form6Example2">رسالتك</label>
                                        <input type="text" id="form6Example2" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">تواصل معنا</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
