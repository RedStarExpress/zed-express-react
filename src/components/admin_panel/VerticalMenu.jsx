import React from 'react'
import { NavLink } from 'react-router-dom'

export default function VerticalMenu() {
  return (
    <div className="vertical-menu">

                <div data-simplebar className="h-100">

                    <div id="sidebar-menu">
                        <ul className="metismenu list-unstyled" id="side-menu">
                            <li>
                                <NavLink to="/">
                                    <i className="bx bx-barcode"></i>
                                    <span data-key="t-dashboard">Skaner baza</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/">
                                    <i className="bx bx-globe"></i>
                                    <span data-key="t-dashboard">Xitoy skaner bazasi</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/">
                                    <i className="bx bx-news"></i>
                                    <span data-key="t-dashboard">Yangiliklar</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/">
                                    <i className="bx bx-key"></i>
                                    <span data-key="t-dashboard">Kod berish</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/admin/ustozlar">
                                    <i className="bx bx-user"></i>
                                    <span data-key="t-dashboard">Ustozlar</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/admin/contacs">
                                    <i className="bx bx-phone-call"></i>
                                    <span data-key="t-dashboard">Bog'langanlar</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
  )
}
