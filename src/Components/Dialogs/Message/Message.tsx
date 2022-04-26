import React from "react";
import style from './../Dialogs.module.css'
import {MessageType} from "../../../redux/state";


const Message: React.FC <MessageType> = (props) => {
    return <div className={style.message}>{props.text}</div>
}

export default Message;