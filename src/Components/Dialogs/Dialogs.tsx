import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from './Dialogs.module.css'
import Message from "./Message/Message";
import {mapDispatchToPropsType, mapStateToPropsType} from "./DialogsContainer";

type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

export const Dialogs: React.FC <DialogsPropsType> = ({dialogs, messages, newMessageBody, sendNewMessageBody, updateNewMessageBody}) => {

    const dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava}/>);

    const messageElement = messages.map(m => <Message id={m.id} message={m.message} />)

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        updateNewMessageBody(body)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messageElement}
                <div>
                    <textarea value={newMessageBody}
                    onChange={onNewMessageChange}/>
                    <button onClick={sendNewMessageBody}>Push</button>
                </div>
            </div>
        </div>
    )
}
