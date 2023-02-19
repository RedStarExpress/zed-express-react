import React from 'react'
import styled from 'styled-components'

export default function DeleteModal({ Alert, setAlert, deleteModal, setDeleteModal, deleteFunc }) {
  return (
    <Wrapper>
      <div class="modal">
        <div class="modal-content">
          <div class="swal2-icon swal2-warning swal2-icon-show" style={{ display: "flex" }}>
            <div class="swal2-icon-content">!</div>
          </div>
          <h2 class="swal2-title">Ushbu ma'lumot o'chirilsinmi?</h2>
          <div className="d-flex justify-content-center mt-4 gap-2" >
            <div className="btn btn-success font-size-18"
              onClick={() => deleteFunc()}>
              Ha, albatda
            </div>
            <div className="btn btn-danger font-size-18"
              onClick={() => setDeleteModal({ isShow: false, id: 0 })}>
              Bekor qilish
            </div>
          </div>
        </div>

      </div>
    </Wrapper>

  )
}

const Wrapper = styled.div`
    .modal {
        display: inline-block;
        position: absolute;
        z-index: 9999;
        left: 0;
        top: 0;
        width: 100vw; 
        height: 100vh;
        overflow: auto; 
        background-color: rgba(0,0,0,0.3); 
    }

    .modal-content {
      position: relative;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fefefe;
      border: 1px solid #888;
      border-radius: 0.5rem;
      width: fit-content;
      padding: 1rem 2.5rem;
      padding-bottom: 2.5rem;
    }
`
