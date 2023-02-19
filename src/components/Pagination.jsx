import React from 'react'
import ReactPaginate from 'react-paginate'

export default function Pagination() {
    return (
        <div className="d-flex align-items-center justify-content-between" style={{flexWrap: "wrap-reverse"}}>
            <div style={{display: "flex", gap: "1rem"}}>
                <div className="col-lg-6">
                    <input class="form-control" type="text" value="42"
                        style={{ height: "50px" }} />
                </div>

                <div className="col-lg-6">
                    <button className="btn btn-primary"
                    style={{height: "50px", width: "100%"}}>
                        ga o'tish
                    </button>
                </div>
            </div>

            <div style={{ paddingTop: "4px" }}>
                <ReactPaginate
                    previousLabel="<<"
                    nextLabel=">>"
                    pageCount={1000 / 10}
                    breakLabel="..."
                    className="paginate"
                    activeClassName="active"
                    pageRangeDisplayed={3}
                    // onPageChange={handlePageClick}
                    forcePage={1}
                    onPageActive={1}
                />
            </div>
        </div>
    )
}
