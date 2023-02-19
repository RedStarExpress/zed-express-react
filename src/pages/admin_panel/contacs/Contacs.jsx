import React, { useState } from 'react'
import AlertContent, { Alert } from '../../../components/Alert';
import DeleteModal from '../../../components/DeleteModal';
import Pagination from '../../../components/Pagination';

export default function Contacs() {
    const [alert, setAlert] = useState({ open: false, color: "", text: "" });
    const [deleteModal, setDeleteModal] = useState({ isShow: false, id: 0 })
    const handlePageClick = (e) => {
        console.log(e);
    }

    const deleteFunc = () => {
        setDeleteModal({ isShow: false, id: 0 })
        Alert(setAlert, "success", "Muvafaqqiyatli o'chirildi");
    }
    return (
        <>
            <div class="card">
                <div className="card-header">
                    <h2 class="mb-sm-0 font-size-24 text-center">Sayt yoki bot orqali bog'langanlar</h2>
                </div>

                <div className="card-body">
                    <table class="table table-bordered align-middle mb-0 table-striped table-hover">
                        <thead>
                            <tr className='bg-primary text-white text-center align-middle'>
                                <th style={{ width: "5%" }}>№</th>
                                <th style={{ width: "15%" }}>Ism familiyasi</th>
                                <th style={{ width: "10%" }}>Telefon raqam</th>
                                <th style={{ width: "10%" }}>Email</th>
                                <th style={{ width: "20%" }}>Kelgan xabar</th>
                                <th style={{ width: "10%" }}>Kelgan vaqti</th>
                                <th style={{ width: "10%" }}>Qayerdan kelgani</th>
                                <th style={{ width: "10%" }}>Ko'rilganligi</th>
                                <th style={{ width: "10%" }}>Amallar</th>
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
                                    <div style={{ display: "flex", gap: "4px", justifyContent: "center" }}>
                                        <input class="form-check-input font-size-16" type="checkbox" id="formCheck1" />
                                        <label class="form-check-label font-size-16" for="formCheck1">
                                            False
                                        </label>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <div className="btn btn-danger font-size-18 mx-1" title="o'chirish"
                                        onClick={() => setDeleteModal({ isShow: true, id: 0 })}>
                                        <i className="bx bx-trash"></i>
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

            {
                deleteModal.isShow && (
                    <DeleteModal
                        deleteFunc={deleteFunc}
                        Alert={Alert}
                        setAlert={setAlert}
                        deleteModal={deleteModal}
                        setDeleteModal={setDeleteModal}
                    />
                )
            }

            {/* alert */}
            <AlertContent alert={alert} />
        </>
    )
}
