import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faR, faUserGroup, faUsers, faBars, faBell } from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'

export default function NavBar(props){
    return (
        <nav>
            <FontAwesomeIcon icon={faR} />
            <input className = "searchbar" 
                   type = "text"
                   placeholder = "Search Rapbook"
            />
            <FontAwesomeIcon icon={faHouse} />
            <FontAwesomeIcon icon={faUserGroup} />
            <FontAwesomeIcon icon={faUsers} />

            <button>Find Friends</button>

            <button><FontAwesomeIcon icon={faBars} /></button>
            <button><FontAwesomeIcon icon={faFacebookMessenger} /></button>
            <button><FontAwesomeIcon icon={faBell} /></button>

        </nav>
    )
}