import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {StoreType} from "../../redux/ReduxStore";
import {setAuthUserData} from "../../redux/authReducer";
import {authAPI} from '../../api/api';

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToProps = {
    setAuthUserData: (userId: string, email: string, login: string) => void
}
type HeaderRequestContainerType = mapStateToPropsType & mapDispatchToProps

class HeaderRequestContainer extends React.Component<HeaderRequestContainerType> {
    componentDidMount() {
        authAPI.getMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
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