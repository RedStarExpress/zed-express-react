import React, { useRef } from 'react'

export default function AddModal({ data, setData, addModal, setAddModal }) {
    const code = useRef()
    const trekCode = useRef()
    const addFunc = () => {
        const arr = trekCode?.current?.value?.split("\n")
        console.log(arr);
        console.log(code.current.value);
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header bg-primary">
                    <h5 className="modal-title text-white">Yangi mijoz qo'shish</h5>
                    <button type="button" className="btn-close text-white"
                    onClick={() => setAddModal(false)}></button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-lg-9">
                            <div class="mb-3">
                                <input class="form-control form-control-lg"
                                    ref={code} type="text"
                                    placeholder='Mijoz kodi' />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <button className="btn-lg btn btn-success w-100"
                                onClick={() => addFunc()}>
                                Qo'shish
                            </button>
                        </div>
                    </div>

                    <div class="mb-3">
                        <textarea class="form-control form-control-lg" rows="10"
                            ref={trekCode}
                            placeholder="Trek kodlar">
                        </textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}
