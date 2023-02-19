import React from 'react'
import Pagination from '../../../components/Pagination';

export default function Partiyalar() {
    const handlePageClick = (e) => {
        console.log(e);
    }
    return (
        <>
            <div class="card">
                <div class="card-header">
                    <div class="d-sm-flex align-items-center justify-content-between">
                        <h2 class="mb-sm-0 font-size-24">Mavjud partiyalar</h2>

                        <div class="page-title-right">
                            <div className="btn btn-primary btn-lg">Yangi qo'shish</div>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <table class="table table-bordered align-middle mb-0 table-striped table-hover">
                        <thead>
                            <tr className='bg-primary text-white text-center'>
                                <th>№</th>
                                <th>Partiya nomi</th>
                                <th>Kelgan sanasi</th>
                                <th>Faolligi</th>
                                <th>Amallar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='text-center'>
                                <th>1</th>
                                <td>R2</td>
                                <td>13.03.2023</td>
                                <td>
                                    <div style={{ display: "flex", gap: "4px", justifyContent: "center" }}>
                                        <input class="form-check-input font-size-16" type="checkbox" id="formCheck1" />
                                        <label class="form-check-label font-size-16" for="formCheck1">
                                            False
                                        </label>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="btn btn-success font-size-18 mx-1">
                                        <i className="bx bx-edit"
                                        // onClick={() => editModalFunc(item)}
                                        ></i>
                                    </div>
                                    <div className="btn btn-danger font-size-18 mx-1">
                                        <i className="bx bx-trash"
                                        // onClick={() => setDeleteModal({ isShow: true, id: 0 })}
                                        ></i>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                    <div className="col-lg-12 mt-2">
                        <Pagination />
                    </div>
                </div>

            </div>
        </>
    )
}
