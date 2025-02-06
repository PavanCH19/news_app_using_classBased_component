import { useState } from "react";
import PropTypes from 'prop-types';

function TextForm(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }

    const handleLowClick = () => {
        setText(text.toLowerCase());
    }

    const handleClear = () => {
        setText("");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }

    return (
        <>
            <div className="container my-3">
                <h1 style={props.mode}>Enter the text to analyze</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={props.mode}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
            </div>

            <div className="container" style={props.mode}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter(word => word !== "").length} words and {text.replace(/\s/g, "").length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter(word => word !== "").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}

TextForm.propTypes = {
    mode: PropTypes.object.isRequired,
};


export default TextForm;

