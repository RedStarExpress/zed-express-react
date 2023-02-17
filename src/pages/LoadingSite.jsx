import React from 'react'
import logo from "./2.png"


export default function LoadingSite() {
    return (
        <div class="bg-soft-light min-vh-100" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className='pb-5'>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-center">
                                <div class="mb-5">
                                    <a href="index.html">
                                        <img src={logo} alt="" height="100" class="me-1" /><span class="logo-txt text-dark font-size-22"></span>
                                    </a>
                                </div>

                                <div class="maintenance-cog-icon text-primary pt-4">
                                    <i class="mdi mdi-cog spin-right display-3"></i>
                                    <i class="mdi mdi-cog spin-left display-4 cog-icon"></i>
                                </div>
                                <h3 class="mt-4">Site is Under Maintenance</h3>
                                <p>Please check back in sometime.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
