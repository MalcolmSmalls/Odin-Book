import React from "react"
import { useNavigate } from 'react-router-dom';




export default function SignUpForm() {
    const [ signUp, setSignUp ] = React.useState(
        {
            firstName: "",
            lastName: "",
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

    const navigate = useNavigate()

    // function handleSubmit(event){
    //     event.preventDefault(); 
    //     setSignUp(prevSignUp => {
    //         return {...prevSignUp}
    //     })
    // }

    let handleSubmit = async (event) => {
        event.preventDefault();

        try {
            let res = await fetch("http://localhost:9000/member/create", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: signUp.firstName,
                    lastName: signUp.lastName,
                    username: signUp.username,
                    email: signUp.email,
                    password: signUp.password
                }),
            });

            // let resJson = await res.json();

            if (res.status === 200) {
                setSignUp({
                    username: "",
                    email: "",
                    password: ""
                })
                console.log("User created successfully")
                navigate("/login")
            } else {
                console.log("Some error occured")
            }
                
    
        } catch (err) {
            console.log(err);
        }
    }


    return(
        <div className = "signup-container">
            <div className="top" style={{'padding': '10px'}}>
                <h1>Sign Up</h1>
                <span>It's quick and easy</span>
            </div>
            <hr />
            <form className ="signup-form" onSubmit={handleSubmit}>
                <div className = "name-fields">
                    <input type ="text"
                        name="firstName"
                        id="su-firstName"
                        placeholder = "First Name"
                        value={signUp.firstName}
                        onChange={handleChange}
                    />

                    <input type ="text"
                        name="lastName"
                        id="su-lastName"
                        placeholder = "Last Name"
                        value={signUp.lastName}
                        onChange={handleChange}
                    />

                </div>

                <input type ="text"
                       name="username"
                       id="su-username"
                       placeholder = "Username"
                       value={signUp.username}
                       onChange={handleChange}
                />

                <input type ="email"
                       placeholder="Email"
                       name="email"
                       id="su-email"
                       value={signUp.email}
                       onChange={handleChange}
                />

                <input type ="password"
                       name="password"
                       id="su-password"
                       placeholder="Password"
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