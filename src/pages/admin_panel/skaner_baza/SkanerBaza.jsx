import React from 'react'
import ReactPaginate from 'react-paginate'

export default function SkanerBaza() {
    const handlePageClick = (e) => {
        console.log(e);
    }
    return (
        <>
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h2 class="mb-sm-0 font-size-24">Skaner baza</h2>

                        <div class="page-title-right">
                            <div className="btn btn-primary">Yangi qo'shish</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
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
                </div>

                <div className="col-lg-12 mt-2">
                    <ReactPaginate
                        previousLabel="<<"
                        nextLabel=">>"
                        pageCount={100 / 10}
                        breakLabel="..."
                        className="paginate"
                        activeClassName="active"
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        forcePage={1}
                        onPageActive={1}
                    />
                </div>
            </div>
        </>
    )
}
