import { useState } from "react"
import React from 'react'

export default function TextForm(props) {

    // Text analyze functions
    const [text, setText] = useState("")

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = () => {
        let upperText = text.toUpperCase()
        setText(upperText)
    }

    const handleLoClick = () => {
        let lowerText = text.toLowerCase()
        setText(lowerText)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text copied", "success")
    }

    const handleClearText = () => {
        setText("")
    }


    return (
        <>
            <div className="container" >

                <h3 style={{ color: props.mode === "dark" ? "white" : "#042743" }}>{props.heading}</h3>

                <div className="mb-3 ">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="textBox" rows="8" style={{ backgroundColor: props.mode === "dark" ? "#224a69" : "white", color: props.mode === "dark" ? "white" : "black" }} />
                </div>

                {/* Buttons to modify text */}
                <button className="btn btn-primary btn-sm mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary btn-sm mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary btn-sm mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary btn-sm mx-2 my-2" onClick={handleClearText}>Clear Text</button>

            </div>

            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
                <h3>Your Text Summary</h3>
                {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} charecters
            </div>

        </>
    )
}

