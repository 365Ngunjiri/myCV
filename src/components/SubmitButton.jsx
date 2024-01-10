import React from "react";
import '../styles/SubmitButton.css';
const SubmitButton = ({onClick, label}) => {
    return <button className="submit-btn" onClick={onClick}>{label}</button>;
};
export default SubmitButton;