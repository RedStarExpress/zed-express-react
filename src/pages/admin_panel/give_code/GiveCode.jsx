import React from 'react'
import Pagination from '../../../components/Pagination';

export default function GiveCode() {
    const handlePageClick = (e) => {
        console.log(e);
    }
    return (
        <>
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h2 class="mb-sm-0 font-size-24">Berilgan kodlar bazasi</h2>

                        {/* <div class="page-title-right">
                            <div className="btn btn-primary">Yangi qo'shish</div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
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
                </div>

                <div className="col-lg-12 mt-2">
                    <Pagination />
                </div>
            </div>
        </>
    )
}
