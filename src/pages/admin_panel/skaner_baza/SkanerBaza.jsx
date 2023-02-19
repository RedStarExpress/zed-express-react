import React, { useState } from 'react'
import Pagination from '../../../components/Pagination';
import AddModal from './AddModal';

export default function SkanerBaza() {
    const [addModal, setAddModal] = useState(false)
    const [data, setData] = useState([])
    const handlePageClick = (e) => {
        console.log(e);
    }
    return (
        <>
            <div class="card">
                <div class="card-header">
                    <div class="d-sm-flex align-items-center justify-content-between">
                        <h2 class="mb-sm-0 font-size-24">Skaner baza</h2>

                        <div class="page-title-right">
                            <div className="btn btn-primary btn-lg"
                                onClick={() => setAddModal(true)}>
                                Yangi qo'shish
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
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
                                        <th>Mijoz kodi</th>
                                        <th>Trek kodi</th>
                                        <th>Amallar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-center'>
                                        <th rowSpan={3}>1</th>
                                        <td rowSpan={3}>Z1</td>
                                        <td>121ewewe323232</td>
                                        <td rowSpan={3} className="text-center">
                                            <div className="btn btn-success font-size-18 mx-1">
                                                <i className="bx bx-plus"
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
                                    <tr className='text-center'>
                                        <td>ewew43232432erw</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>ewew43232432erw</td>
                                    </tr>

                                    <tr className='text-center'>
                                        <th rowSpan={4}>2</th>
                                        <td rowSpan={4}>Z2</td>
                                        <td>121ewewe323232</td>
                                        <td rowSpan={4} className="text-center">
                                            <div className="btn btn-success font-size-18 mx-1">
                                                <i className="bx bx-plus"
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
                                    <tr className='text-center'>
                                        <td>ewew43232432erw</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>ewew43232432erw</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>ewew43232432erw</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="col-lg-12 mt-2">
                                <Pagination />
                            </div>
                        </div>
                        <div class="tab-pane" id="profile1" role="tabpanel">
                            <table class="table table-bordered align-middle mb-0 table-striped table-hover">
                                <thead>
                                    <tr className='bg-primary text-white text-center'>
                                        <th>№</th>
                                        <th>Mijoz kodi</th>
                                        <th>Trek kodi</th>
                                        <th>Amallar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-center'>
                                        <th rowSpan={3}>1</th>
                                        <td rowSpan={3}>Z1</td>
                                        <td>121ewewe323232</td>
                                        <td rowSpan={3} className="text-center">
                                            <div className="btn btn-success font-size-18 mx-1">
                                                <i className="bx bx-plus"
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
                                    <tr className='text-center'>
                                        <td>ewew43232432erw</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>ewew43232432erw</td>
                                    </tr>

                                    <tr className='text-center'>
                                        <th rowSpan={4}>2</th>
                                        <td rowSpan={4}>Z2</td>
                                        <td>121ewewe323232</td>
                                        <td rowSpan={4} className="text-center">
                                            <div className="btn btn-success font-size-18 mx-1">
                                                <i className="bx bx-plus"
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
                                    <tr className='text-center'>
                                        <td>ewew43232432erw</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>ewew43232432erw</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>ewew43232432erw</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="col-lg-12 mt-2">
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {
                addModal && (
                    <AddModal
                        data={data}
                        setData={setData}
                        addModal={addModal}
                        setAddModal={setAddModal}
                    />
                )
            }
        </>
    )
}
