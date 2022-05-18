import React from "react";
import style from './../Dialogs.module.css'
import {MessageType} from "../../../redux/dialogsReducer";

const Message: React.FC <MessageType> = (props) => {
    return <div className={style.message}>{props.message}</div>
}

export default Message;