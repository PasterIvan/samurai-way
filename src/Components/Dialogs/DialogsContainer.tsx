import {Dispatch} from "redux";
import {StoreType} from "../../redux/ReduxStore";
import {DialogsType, MessageType, sendNewMessageBodyAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

export type mapStateToPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type mapDispatchToPropsType = {
    sendNewMessageBody: () => void
    updateNewMessageBody: (body: string) => void
}

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return ({
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
    })
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return ({
            sendNewMessageBody: () => {
                dispatch(sendNewMessageBodyAC())
            },
            updateNewMessageBody: (body) => {
                dispatch(updateNewMessageBodyAC(body))
            }
        }
    )
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)