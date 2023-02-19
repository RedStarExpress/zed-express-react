import React from 'react'
import Pagination from '../../../components/Pagination';

export default function News() {
    const handlePageClick = (e) => {
        console.log(e);
    }
    return (
        <>
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h2 class="mb-sm-0 font-size-24">Yangiliklar</h2>

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
                                <th style={{ width: "5%" }}>№</th>
                                <th style={{ width: "15%" }}>Media</th>
                                <th style={{ width: "20%" }}>Sarlavha</th>
                                <th style={{ width: "40%" }}>Matn</th>
                                <th style={{ width: "20%" }}>Amallar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='text-center'>
                                <th>1</th>
                                <td><img src="https://cdn.trend.az/2019/03/20/novruz_200319.jpg" alt="" style={{ width: "100px" }} /></td>
                                <td>Navruz bayrami muborak</td>
                                <td>Navro‘z bayramining qachon vujudga kelgani haqida bizgacha yetib kelgan qadimiy manbalardan shu narsa ko‘rinadiki, u O‘rta Osiyo, Eron va Afg‘onistonda Ahamoniylar davrida (miloddan avvalgi VI asrlarda) keng tarqalgan. Shu ma'noda Navro‘zning tarixini 25-30 asrga ega deb taxmin qilish mumkin.</td>
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
