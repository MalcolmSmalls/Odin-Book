import React from "react"
import Form from "./Form"
import ReactDom from "react-dom"

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    // padding: '10px',
    zIndex: 1000,
    boxShadow: "0px 5px 7px 3px rgba(0,0,0,.1)",
    borderRadius: 10,
    width:400
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255,255,255,.7)",
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
                    
                    <button onClick={props.onClose}>X</button>
                </div>
            </>, document.getElementById('portal')
        )

    }


}