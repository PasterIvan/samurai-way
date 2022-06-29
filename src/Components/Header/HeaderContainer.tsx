import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {StoreType} from "../../redux/ReduxStore";
import {getAuthUserData, setAuthUserData} from "../../redux/authReducer";

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToProps = {
    getAuthUserData: ()=>void
}
type HeaderRequestContainerType = mapStateToPropsType & mapDispatchToProps

class HeaderRequestContainer extends React.Component<HeaderRequestContainerType> {
    componentDidMount() {
       this.props.getAuthUserData()
    }

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}

        />
    }
}

const mapStateToProps = (state: StoreType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export const HeaderContainer = connect(mapStateToProps, {getAuthUserData})(HeaderRequestContainer);