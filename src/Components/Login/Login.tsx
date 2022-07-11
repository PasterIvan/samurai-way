import React from 'react';
import { Navigate } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { Input } from '../common/formsControls/FormsControls';
import {required} from "../../utils/validators/validators";
import style from './Login.module.css'
import { login } from '../../redux/authReducer';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'email'}
                       component={Input}
                       placeholder={'Email'}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={'password'}
                       component={Input}
                       type={'password'}
                       placeholder={'Password'}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={'rememberMe'}
                       component={Input}
                       type={'checkbox'}/> remember me
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)

    const onSubmit = (formData: FormDataType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe))
    }

    return (
        <>
            <textarea></textarea>
            {isAuth ? <Navigate to="/"/>
                : <>
                    <h1>LOGIN</h1>
                    <LoginReduxForm onSubmit={onSubmit}/>
                </>
            }
        </>
    )
}