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
                    username: signUp.username,
                    email: signUp.email,
                    password: signUp.password
                }),
            });
            let resJson = await res.json();

            if (res.status === 200) {
                setSignUp({
                    username: "",
                    email: "",
                    password: ""
                })
                console.log("User created successfully")
            } else {
                console.log("Some error occured")
            }
                
    
        } catch (err) {
            console.log(err);
        }
    }


    return(
        <div className = "signup-container">
            <h1>RAP BOOK</h1>
            <h2>Sign Up</h2>
            <form className ="signup-form" onSubmit={handleSubmit}>
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