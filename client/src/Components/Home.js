import React from "react"
import { useLocation } from "react-router-dom"
import NavBar from "./NavBar"


export default function Home(props){

    const location = useLocation()
    return (
        <div>
            <NavBar />
            <h1>Hello, {location.state.username}</h1>
        </div>

    )
}