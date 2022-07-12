import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from './Dialogs.module.css'
import Message from "./Message/Message";
import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Textarea} from "../common/formsControls/FormsControls";
import {sendNewMessageBodyAC} from "../../redux/dialogsReducer";
import {maxLength300, required} from "../../utils/validators/validators";

export const DialogsForRedirect = () => {
    const dispatch = useAppDispatch()

    const dialogs = useAppSelector((state) => state.dialogsPage.dialogs)
    const messages = useAppSelector((state) => state.dialogsPage.messages)

    const dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    const messageElement = messages.map(m => <Message id={m.id} message={m.message}/>)

    const addNewMessage = (formData: FormDataType) => {
        dispatch(sendNewMessageBodyAC(formData.newMessageBody))
        dispatch(reset('dialogAddMessageForm'))
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messageElement}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} clearSubmit={() => {
            }}/>
        </div>
    )
}

export const Dialogs = withAuthRedirect(DialogsForRedirect)

type FormDataType = {
    newMessageBody: string
}
const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='newMessageBody'
                       placeholder='Enter your message'
                       validate={[required, maxLength300]}/>
            </div>
            <div>
                <button>Push</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)
