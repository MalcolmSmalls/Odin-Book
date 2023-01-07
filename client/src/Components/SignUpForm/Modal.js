import React from "react"
import Form from "./Form"

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '50px',
    zIndex: 1000,
    
}

export default function Modal(props){
    if(props.isShown === false) {
        return null
    }else {
        return (
            <div style = {MODAL_STYLES}>
                <Form />
                <button onClick={props.onClose}>Close Modal</button>
            </div>
        )

    }


}