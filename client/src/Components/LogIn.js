import React from "react"

export default function LogIn () {

    const [ form, setForm ] = React.useState(
        {
            username: "",
            password: ""
        }
    
    )

    function handleChange(e){
        const { name, value } = e.target
        setForm( prevForm => {
            return {...prevForm, [name]: value}
        })
    }


    return (
        <main>
            <div className = "left-container">
                <h1>Rapbook</h1>
                <p>Drop bars with friends and the world around you on Rapbook.</p>

            </div>
            <div className = "login-container">
                <form className = "login-form">

                    <input name = "username"
                             id = "username"
                           type = "text"
                          value = {form.username}
                       onChange = {handleChange}
                    placeholder = "Username"
                    />

                    <input name = "password"
                             id = "password"
                           type = "password"
                          value = {form.password}
                       onChange = {handleChange}
                    placeholder = "Password"
                    />

                    <button className = "login-btn">Log In</button>
                </form>

                <hr style = {{
                    color: '#dadde1',
                    height: .2,
                    backgroundColor: '#dadde1',
                    width: "90%",
                    border:0

                }}/>

                <button className = "create-btn">Create new account</button>

            </div>
        </main>

    )
}