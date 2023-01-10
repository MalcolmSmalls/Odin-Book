import React from "react"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import App from "../App"
import LogIn from "./LogIn"

export default function RouteSwitch(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<LogIn />} />
                {/* <Route path="/login" element = {<LogIn />} /> */}
                <Route path="/home" element = {<App />} />
            </Routes>
        </BrowserRouter>
    )


}