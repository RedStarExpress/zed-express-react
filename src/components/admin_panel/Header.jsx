import React from 'react'

export default function Header({ toggleFunc }) {
    return (
        <header id="page-topbar">
            <div className="navbar-header">
                <div className="d-flex">
                    <div className="navbar-brand-box">
                        <a href="index.html" className="logo logo-dark">
                            <span className="logo-sm">
                                <img src="/assets/images/logo-sm.svg" alt="" height="24" />
                            </span>
                            <span className="logo-lg">
                                <img src="/assets/images/logo-sm.svg" alt="" height="24" /> <span className="logo-txt">ZedCargo</span>
                            </span>
                        </a>

                        <a href="index.html" className="logo logo-light">
                            <span className="logo-sm">
                                <img src="/assets/images/logo-sm.svg" alt="" height="24" />
                            </span>
                            <span className="logo-lg">
                                <img src="/assets/images/logo-sm.svg" alt="" height="24" /> <span className="logo-txt">Minia</span>
                            </span>
                        </a>
                    </div>

                    <button type="button" className="btn btn-sm px-3 font-size-16 header-item" id="vertical-menu-btn"
                        onClick={() => toggleFunc()}>
                        <i className="fa fa-fw fa-bars"></i>
                    </button>
                </div>

                <div className="d-flex">

                    <div className="dropdown d-none d-lg-inline-block ms-1">
                        <button type="button" className="btn header-item"
                            data-bs-toggle="dropdown" aria-haspopup="true" ariaExpanded="false">
                            <i data-feather="grid" className="icon-lg"></i>
                        </button>
                    </div>

                    <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item bg-soft-light border-start border-end" id="page-header-user-dropdown"
                            data-bs-toggle="dropdown" aria-haspopup="true" ariaExpanded="false">
                            <img className="rounded-circle header-profile-user" src="/assets/images/users/avatar-1.jpg"
                                alt="Header Avatar" />
                            <span className="d-none d-xl-inline-block ms-1 fw-medium">Admin</span>
                            <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="apps-contacts-profile.html"><i className="bx bx-user-circle font-size-16 align-middle me-1"></i> Profile</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item danger text-danger" href="auth-logout.html"><i className="bx bx-log-out font-size-16 align-middle me-1"></i> Chiqish</a>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}
