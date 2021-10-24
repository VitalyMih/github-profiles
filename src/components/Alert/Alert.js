import React, {useContext} from "react";
import './Alert.css';
import {AlertContext} from "../../context/alert/alertContext";

const Alert = () => {
    const {alert, hide} = useContext(AlertContext);

    if (!alert) return null

    return (
        <div className="Alert">
            <div className="Alert_text">{alert.text}</div>
            <button className="Alert_button" onClick={hide}>X</button>
        </div>
    )
}

export default Alert;