import React from 'react';
import style from './Header.module.css'
import logoPasternak from './logoPasternak.jpg'

const Header =()=>{
    return <header className={style.header}>
        <img
            src={logoPasternak}
            alt=""/>
    </header>
}
export default Header;