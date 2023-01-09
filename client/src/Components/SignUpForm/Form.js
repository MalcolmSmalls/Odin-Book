import React from "react"
import { useNavigate } from 'react-router-dom';




export default function SignUpForm(props) {
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
        console.log(signUp)  
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
            <div className="top" style={{'padding': '15px'}}>
                <div className = "top-text">
                    <h1>Sign Up</h1>
                    <span className = "alt-text">It's quick and easy</span>
                </div>
                <div className = "top-btn">
                    <button className = "close-btn" onClick={props.onClose}>&#xd7;</button>
                </div>
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

                <div className="column-fields">
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

                </div>

                <p className = "disclaimer-text">People who use our service may have uploaded your contact information to Rapbook. Learn more.</p>

                <p className = "disclaimer-text">By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>


                <button className = "signup-btn">Sign-Up</button>

            </form>
        </div>

    )


}