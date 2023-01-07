import React, { useCallback, useEffect, useRef   } from "react"

export default function LogIn () {

    const [ form, setForm ] = React.useState(
        {
            username: "",
            password: ""
        }
    
    )

    const [ status, setStatus ] = React.useState("")

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
                setStatus(text)
                console.log(status)
            }


        } catch (err) {
            console.log(err)
        }
    }

    const mainStyle = {
        flexDirection: status==="" ? 'row' : 'column',
        alignItems: status === "" ? null : 'center',
        justifyContent: status === "" ? 'center' : null
    }

    const loginStyle = {
        marginTop: status === "" ? "10%" : "1%"
    }

    // const handleFocus = useCallback((inputElement) => {
    //     console.log('nurp')
    //     inputElement.focus()
    //     if(status !== "" ){
    //         console.log('yurrrp')
    //         inputElement.focus()
    //     }
    // }, [])

    // React.useEffect( () => {
    //     handleFocus()
    // }, [status])

    const handleFocus = useRef(null);

    useEffect(() => {
        
        handleFocus.current.focus()
    }, [status]);

    return (
        <main style = {mainStyle}>
            {status==="" ? <div className = "left-container">
                <h1>Rapbook</h1>
                <p>Drop bars with friends about the world around you on Rapbook.</p>

            </div> : null
            }

            {status !== "" ? <div className = "title-ctn"><h1>Rapbook</h1></div> : null}

            <div className = "login-container" style = {loginStyle}>
                {status !== "" ? <p>Log Into Rapbook</p> : null}
                <form className = "login-form" onSubmit = {handleSubmit}>

                    <input name = "username"
                             id = "username"
                            ref = {handleFocus}
                           type = "text"
                          value = {form.username}
                       onChange = {handleChange}
                      className = {status === "Incorrect username" ? 'error-field' : 'field'}
                    placeholder = "Username"

                    />

                    {status === "Incorrect username" ? 
                        <p className = "wrong-p">
                            The username you entered isn’t connected to an account.  
                            <strong> Create a new Facebook account.</strong>
                        </p> : null}

                    <input name = "password"
                             id = "password"
                           type = "password"
                          value = {form.password}
                       onChange = {handleChange}
                      className = {status === "Incorrect password" ? 'error-field' : 'field'}
                    placeholder = "Password"
                    />
                    {status === "Incorrect password" ? 

                        <p className = "wrong-p">
                            The password you’ve entered is incorrect. 
                            <strong> Forgot Password?</strong>
                        </p> : null}

                    <button className = "login-btn">Log In</button>
                </form>

                {status === "" ? 
                <hr style = {{
                    color: '#dadde1',
                    height: .2,
                    backgroundColor: '#dadde1',
                    width: "90%",
                    border:0

                }}/> : null}

                {status === "" ? <button className = "create-btn">Create new account</button> : null}

            </div>
        </main>

    )
}