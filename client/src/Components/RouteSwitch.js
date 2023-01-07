import React from "react"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import App from "../App"
import LogIn from "./LogIn"
import SignUpForm from "./SignUpForm"

export default function RouteSwitch(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<LogIn />} />
                {/* <Route path="/login" element = {<LogIn />} /> */}
            </Routes>
        </BrowserRouter>
    )


}