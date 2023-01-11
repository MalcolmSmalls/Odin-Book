import logo from './logo.svg';
import './App.css';
import React from "react"
import LogIn from "./Components/LogIn"


function App() {
  const [ user, setUser ] = React.useState('')

  React.useEffect( () => {
    fetch('http://localhost:5000/')
      .then(res => res.text())
      .then(data => setUser(JSON.parse(data)))
      .catch(err => err)
    console.log(user)
  }, [])

  return (
    <div className="App">
      <LogIn />
        {/* <SignUpForm /> */}
        {/* {api} */}
        yurp
        {user.title}
    </div>
  );
}

export default App;
