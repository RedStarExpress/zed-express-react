import styled from "styled-components";

export const Alert = (setAlert, color, text) => {
    setAlert({ open: true, color: color, text: text });
    setTimeout(() => {
        setAlert({ open: false, color: "", text: "" });
    }, (text?.length / 8) * 1000);
}

export default function AlertContent({ alert }) {
    return (
        alert.open && (
            <Wrapper>
                <div class={`alert alert-${alert.color} alert-dismissible alert-label-icon label-arrow fade show`} 
                role="alert" style={{width: "500px"}}>
                    <i class="mdi mdi-check-all label-icon"></i> {alert.text}
                    {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                </div>
            </Wrapper>
        )
    )
}

const Wrapper = styled.div`
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 99999;
`