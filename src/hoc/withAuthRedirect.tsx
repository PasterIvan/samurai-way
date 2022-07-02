import {Component, ComponentType} from "react";
import {StoreType} from "../redux/ReduxStore";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

type mapStateToPropsTypeForRedirect = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: StoreType): mapStateToPropsTypeForRedirect => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStateToPropsTypeForRedirect) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)

}