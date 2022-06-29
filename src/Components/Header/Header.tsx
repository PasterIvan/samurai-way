import React from 'react';
import style from './Header.module.css'
import logoPasternak from './logoPasternak.jpg'
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
    isAuth: boolean
    login: string
}

export const Header =(props:HeaderPropsType)=>{
    return <header className={style.header}>
        <img
            src={logoPasternak}
            alt=""/>
        <div className={style.loginBlock}>
            {props.isAuth
                ? <div className={style.item}>{props.login}</div>
                : <NavLink to={'/login'} className={style.item}>Login</NavLink>}
        </div>
    </header>
}