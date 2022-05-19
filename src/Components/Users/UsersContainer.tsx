import React from "react";
import {StoreType} from "../../redux/ReduxStore";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/usersReducer";
import {Users} from "./Users";

export type mapStateToPropsType = {
    users: Array<UsersType>
}

export type mapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<UsersType>) => void
}

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (setUsers) => {
            dispatch(setUsersAC(setUsers))
        }
    }
}
export default connect<mapStateToPropsType,mapDispatchToPropsType,{},StoreType>
(mapStateToProps,mapDispatchToProps )(Users)