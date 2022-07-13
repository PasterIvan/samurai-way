import React from 'react';
import style from './Header.module.css'
import logoPasternak from './logoPasternak.jpg'
import {NavLink} from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { logout } from '../../redux/authReducer';


export const Header = () => {
    const dispatch = useAppDispatch()

    const login = useAppSelector(state=>state.auth.login)
    const isAuth = useAppSelector(state=>state.auth.isAuth)

    const onClickLogoutButton = () => {
        dispatch(logout())
    }

    return (
        <header className={style.header}>
            <img
                src={logoPasternak} alt=""/>

            <div className={style.loginBlock}>
                {isAuth ?
                    <div className={style.item}>{login} - <button onClick={onClickLogoutButton}>Log out</button></div>
                    : <NavLink to={'/login'} className={style.item}>Login</NavLink>}
            </div>
        </header>)
}