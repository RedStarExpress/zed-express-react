import React from 'react'
import Header from '../components/admin_panel/Header'
import VerticalMenu from '../components/admin_panel/VerticalMenu'

export default function AdminLayout({ children }) {
    const toggleFunc = () => {
        document.body.classList.toggle("sidebar-enable");
        const element = document.body.getAttribute("data-sidebar-size")
        if (element === "lg") {
            document.body.setAttribute("data-sidebar-size", "sm")
        } else {
            document.body.setAttribute("data-sidebar-size", "lg")
        }
    }

    return (
        <div id="layout-wrapper">
            <Header toggleFunc={toggleFunc}/>

            <VerticalMenu />

            <div class="main-content">

                <div class="page-content">
                    <div class="container-fluid">
                        {children}
                    </div>
                </div>
            </div>


        </div>
    )
}
