import {AlertContext} from "./alertContext";
import React, {useReducer} from "react";
import {AlertReducer} from "./alertReducer";
import {HIDE_ALERT, SHOW_ALERT} from "../types";

const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(AlertReducer, null);

    const hide = () => dispatch({type: HIDE_ALERT});

    const show = (text) => dispatch({
        type: SHOW_ALERT,
        payload: {text}
    })

    return (
        <AlertContext.Provider value={{
            hide, show, alert: state,
        }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertState;