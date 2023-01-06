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

    async function handleSubmit(event){
        event.preventDefault();
        try{
            let res = await fetch("http://localhost:9000/log-in", {
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: form.username,
                    password: form.password
                })
            });

            if(res.status === 200){
                setForm({
                    username: "",
                    password: ""
                })
                console.log("Successfully logged in")
            }else{
                let text = await res.text()
                console.log(text)
                console.log("Wrong credientials")
            }


        } catch (err) {
            console.log(err)
        }
    }


    return (
        <main>
            <div className = "left-container">
                <h1>Rapbook</h1>
                <p>Drop bars with friends on the world around you on Rapbook.</p>

            </div>
            <div className = "login-container">
                <form className = "login-form" onSubmit = {handleSubmit}>

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