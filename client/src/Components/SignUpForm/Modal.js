import React from "react"
import Form from "./Form"
import ReactDom from "react-dom"

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '50px',
    zIndex: 1000,
    
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.5)",
    zIndex: 1000,
}

export default function Modal(props){
    if(props.isShown === false) {
        return null
    }else {
        return ReactDom.createPortal(
            <>
                <div style = {OVERLAY_STYLES}></div>
                <div style = {MODAL_STYLES}>
                    <Form />
                    
                    <button onClick={props.onClose}>Close Modal</button>
                </div>
            </>, document.getElementById('portal')
        )

    }


}