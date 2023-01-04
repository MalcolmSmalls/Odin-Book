import logo from './logo.svg';
import './App.css';
import React from "react"
import SignUpForm from "./Components/SignUpForm"

function App() {

  const [ form, setForm ] = React.useState({

  })

  const [ api, setApi ] = React.useState( () => {
    ""
  })

  React.useEffect(() => {
    fetch("http://localhost:9000/testapi")
      .then(res => res.text())
      .then(res => setApi(res))

  })

  return (
    <div className="App">
        <SignUpForm />
        {/* {api} */}
    </div>
  );
}

export default App;
