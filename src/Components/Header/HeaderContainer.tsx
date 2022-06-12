import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {StoreType} from "../../redux/ReduxStore";
import {setAuthUserData} from "../../redux/authReducer";

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToProps = {
    setAuthUserData: (userId: string, email: string, login: string) => void
}
type HeaderRequestContainerType = mapStateToPropsType & mapDispatchToProps

class HeaderRequestContainer extends React.Component<HeaderRequestContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
                       setAuthUserData={this.props.setAuthUserData}
        />
    }
}

const mapStateToProps = (state: StoreType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderRequestContainer);