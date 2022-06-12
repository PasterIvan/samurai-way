import React from 'react';
import style from './Header.module.css'
import logoPasternak from './logoPasternak.jpg'
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
    isAuth: boolean
    login: string
    setAuthUserData: (userId:string, email:string, login:string) => void
}

export const Header =(props:HeaderPropsType)=>{
    return <header className={style.header}>
        <img
            src={logoPasternak}
            alt=""/>
        <div className={style.loginBlock}>
            {props.isAuth
                ? <div>{props.login}</div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}