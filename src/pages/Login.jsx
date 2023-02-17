import React from 'react'

export default function Login() {
    return (
        <div className="auth-page" style={{ height: "100vh", overflow: "hidden" }}>
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-xxl-3 col-lg-4 col-md-5">
                        <div className="auth-full-page-content d-flex p-sm-5 p-4">
                            <div className="w-100">
                                <div className="d-flex flex-column h-100">
                                    <div className="mb-4 mb-md-5 text-center">
                                        <a href="index.html" className="d-block auth-logo">
                                            <img src="assets/images/logo-sm.svg" alt="" height="28" /> <span className="logo-txt">ZedCargo</span>
                                        </a>
                                    </div>
                                    <div className="auth-content my-auto">
                                        <div className="text-center">
                                            <h5 className="mb-0 fs-4">Xush kelibsiz!</h5>
                                            <p className="text-muted mt-2 fs-5">
                                                ZedCargo xizmatiga o‘tish uchun tizimga kiring.</p>
                                        </div>
                                        <form className="mt-4 pt-2" action="https://themesbrand.com/minia/layouts/index.html">
                                            <div className="mb-3">
                                                <label className="form-label">Login</label>
                                                <input type="text" className="form-control" id="username" placeholder="loginni kiriting" />
                                            </div>
                                            <div className="mb-3">
                                                <div className="d-flex align-items-start">
                                                    <div className="flex-grow-1">
                                                        <label className="form-label ">Parol</label>
                                                    </div>
                                                </div>

                                                <div className="input-group auth-pass-inputgroup">
                                                    <input type="password" className="form-control" placeholder="parolni kiriting" aria-label="Password" aria-describedby="password-addon" />
                                                    <button className="btn btn-light shadow-none ms-0" type="button" id="password-addon"><i className="mdi mdi-eye-outline"></i></button>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <button className="btn btn-primary w-100 waves-effect waves-light" type="submit">Kirish</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="mt-4 mt-md-5 text-center">
                                        {/* <i className="mdi mdi-heart text-danger"></i>  */}
                                        <p className="mb-0">© <script>document.write(new Date().getFullYear())</script> ZedCargo. Keldiyor tomonidan yaratildi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-9 col-lg-8 col-md-7">
                        <div className="auth-bg pt-md-5 p-4 d-flex">
                            <div className="bg-overlay bg-primary"></div>
                            <ul className="bg-bubbles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
