import './App.css'; // eslint-disable-next-line
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

// Importing React Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light")

  const [alert, setAlert] = useState(null) // eslint-disable-next-line
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled.", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled.", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtilsAnalyzer" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route>
            <Route path="/">
              <TextForm heading="Enter your text below to modify" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>

        </div>
      </Router>
    </>
  );
}

export default App;
