import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from './Dialogs.module.css'
import Message from "./Message/Message";
import {ACType, addMessageAC, changeNewMessageTextAC, DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action:ACType)=>void
}

const Dialogs: React.FC <DialogsPropsType> = (props) => {

    const dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava}/>);

    const messageElement = props.dialogsPage.messages.map(m => <Message id={m.id} text={m.text} />)

    const fnAddMessage = ()=>{
        props.dispatch(addMessageAC(props.dialogsPage.newMessage));
    }

    const newTextMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewMessageTextAC(e.currentTarget.value))
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messageElement}
                <div>
                    <textarea value={props.dialogsPage.newMessage}
                    onChange={newTextMessageChangeHandler}/>
                    <button onClick={fnAddMessage}>Push</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;