import {StoreType} from "../../redux/ReduxStore";
import {DialogsType, MessageType, sendNewMessageBodyAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";


export type mapStateToPropsType = {
    dialogs: Array<DialogsType>;
    messages: Array<MessageType>
    newMessageBody: string
}

export type mapDispatchToPropsType = {
    sendNewMessageBody: () => void
    updateNewMessageBody: (body: string) => void
}

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
            sendNewMessageBody: () => {
                dispatch(sendNewMessageBodyAC())
            },
            updateNewMessageBody: (body) => {
                dispatch(updateNewMessageBodyAC(body))
            }
        }
}

export const DialogsContainer = compose<React.ComponentType>(connect<mapStateToPropsType,mapDispatchToPropsType,{},StoreType>
(mapStateToProps,mapDispatchToProps ), withAuthRedirect)(Dialogs)