import React from "react"


export default function SignUpForm() {
    const [ signUp, setSignUp ] = React.useState(
        {
            username: "",
            email: "",
            password: ""
        }
    )

    function handleChange(event) {
        const { name, value } = event.target
        setSignUp( prevSignUp => {
            return (
                {...prevSignUp,
                    [name]: value
                })
        })        
    }


    return(
        <div className = "signup-container">
            <form >
                <label htmlFor = "username">Username:</label>
                <input type ="text"
                       name="username"
                       id="username"
                       value={signUp.username}
                       onChange={handleChange}
                />

                <label htmlFor = "email">E-mail:</label>
                <input type ="email"
                       placeholder="email@email.com"
                       name="email"
                       id="email"
                       value={signUp.email}
                       onChange={handleChange}
                />

                <label htmlFor = "password">Password:</label>
                <input type ="password"
                       name="password"
                       id="password"
                       value={signUp.password}
                       onChange={handleChange}
                />

                {/* <label htmlFor = "confirmPassword">Confirm Password:</label>
                <input type ="password"
                       name="confirmPassword"
                       id="confirmPassword"
                       value={signUp.password}
                       onChange={handleChange}
                /> */}
                <button>Sign-Up</button>

      </form>
        </div>

    )


}