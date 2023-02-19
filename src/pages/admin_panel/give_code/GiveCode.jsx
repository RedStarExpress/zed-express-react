import React from 'react'
import Pagination from '../../../components/Pagination';

export default function GiveCode() {
    const handlePageClick = (e) => {
        console.log(e);
    }
    return (
        <>
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title font-size-24 mb-0 text-center">Berilgan kodlar bazasi</h2>
                </div>

                <div class="card-body">
                    <ul class="nav nav-tabs nav-tabs-custom nav-justified" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-bs-toggle="tab" href="#home1" role="tab" aria-selected="true">
                                <span class="d-block d-sm-none"><i class="fas fa-home"></i></span>
                                <span class="d-none d-sm-block">Home</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#profile1" role="tab" aria-selected="false">
                                <span class="d-block d-sm-none"><i class="far fa-user"></i></span>
                                <span class="d-none d-sm-block">Keldiyor Raxmatov</span>
                            </a>
                        </li>
                    </ul>

                    <div class="tab-content p-0 pt-3">
                        <div class="tab-pane active" id="home1" role="tabpanel">
                            <table class="table table-bordered align-middle mb-0 table-striped table-hover">
                                <thead>
                                    <tr className='bg-primary text-white text-center'>
                                        <th>№</th>
                                        <th>Ism familiyasi</th>
                                        <th>Pasport seriasi</th>
                                        <th>PNFL</th>
                                        <th>Yashash manzili</th>
                                        <th>Telefon raqami</th>
                                        <th>Telegram ID</th>
                                        <th>Berilgan kalit so'zi</th>
                                        <th>Amallar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-center'>
                                        <th>1</th>
                                        <td>Raxmatov Keldiyor</td>
                                        <td>AC1991767</td>
                                        <td>50303531320525</td>
                                        <td>Buxoro viloyati G'ijduvon tumani</td>
                                        <td>+998 94 123 45 17</td>
                                        <td>2030151716</td>
                                        <td>Z1</td>
                                        <td className="text-center">
                                            <div className="btn btn-success font-size-18 mx-1">
                                                <i className="bx bx-edit"
                                                // onClick={() => editModalFunc(item)}
                                                ></i>
                                            </div>
                                            <div className="btn btn-danger font-size-18 mx-1">
                                                <i className="bx bx-trash"
                                                // onClick={() => setDeleteModal({ isShow: true, id: item.id })}
                                                ></i>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="mt-2">
                                <Pagination />
                            </div>
                        </div>
                        <div class="tab-pane" id="profile1" role="tabpanel">
                            <table class="table table-bordered align-middle mb-0 table-striped table-hover">
                                <thead>
                                    <tr className='bg-primary text-white text-center'>
                                        <th>№</th>
                                        <th>Ism familiyasi</th>
                                        <th>Pasport seriasi</th>
                                        <th>PNFL</th>
                                        <th>Yashash manzili</th>
                                        <th>Telefon raqami</th>
                                        <th>Telegram ID</th>
                                        <th>Berilgan kalit so'zi</th>
                                        <th>Amallar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-center'>
                                        <th>1</th>
                                        <td>Raxmatov Keldiyor</td>
                                        <td>AC1991767</td>
                                        <td>50303531320525</td>
                                        <td>Buxoro viloyati G'ijduvon tumani</td>
                                        <td>+998 94 123 45 17</td>
                                        <td>2030151716</td>
                                        <td>Z1</td>
                                        <td className="text-center">
                                            <div className="btn btn-success font-size-18 mx-1">
                                                <i className="bx bx-edit"
                                                // onClick={() => editModalFunc(item)}
                                                ></i>
                                            </div>
                                            <div className="btn btn-danger font-size-18 mx-1">
                                                <i className="bx bx-trash"
                                                // onClick={() => setDeleteModal({ isShow: true, id: item.id })}
                                                ></i>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="mt-2">
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
