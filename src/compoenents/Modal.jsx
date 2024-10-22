import React from "react";
import ReactDOM from "react-dom";

function Modal(){
    return ReactDOM.createPortal(
        <h2>Portal Demo</h2>,
        document.getElementById("modal-root")
    )
}

export default Modal;