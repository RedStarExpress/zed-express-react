import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import DeleteModal from './modal/DeleteModal';

export default function Contacs() {
    const [deleteModal, setDeleteModal] = useState({ isShow: false, id: 0 })
    const handlePageClick = (e) => {
        console.log(e);
    }
    return (
        <>
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h2 class="mb-sm-0 font-size-24">Sayt yoki bot orqali bog'langanlar</h2>

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
                                <th>Ism familiyasi</th>
                                <th>Telefon raqam</th>
                                <th>Email</th>
                                <th>Kelgan xabar</th>
                                <th>Kelgan vaqti</th>
                                <th>Qayerdan kelgani</th>
                                <th>Ko'rilganligi</th>
                                <th>Amallar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='text-center'>
                                <th>1</th>
                                <td>Raxmatov Keldiyor</td>
                                <td>+998 94 123 45 17</td>
                                <td>keldiyor@gmail.com</td>
                                <td>Assalom aleykum</td>
                                <td>13.03.2003 <br /> 15:40</td>
                                <td>Telegram bot</td>
                                <td>
                                    <div className="btn btn-success font-size-18 mx-1">
                                        <i className="bx bx-edit"
                                        // onClick={() => editModalFunc(item)}
                                        ></i>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="btn btn-success font-size-18 mx-1">
                                        <i className="bx bx-edit"
                                        // onClick={() => editModalFunc(item)}
                                        ></i>
                                        Javob yozish
                                    </div>
                                    <div className="btn btn-danger font-size-18 mx-1">
                                        <i className="bx bx-trash"
                                        // onClick={() => setDeleteModal({ isShow: true, id: item.id })}
                                        ></i>
                                        O'chirish
                                    </div>
                                </td>
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

            {
                deleteModal.isShow && (
                    <DeleteModal />
                )
            }
        </>
    )
}
