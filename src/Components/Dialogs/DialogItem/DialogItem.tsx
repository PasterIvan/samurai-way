import React from "react";
import {NavLink} from "react-router-dom";
import style from './../Dialogs.module.css'
import {DialogsType} from "../../../redux/state";



const DialogItem: React.FC <DialogsType> = (props) => {

    let path = '/dialogs/' + props.id

    return <div className={style.dialog + ' ' + style.active}>
        <NavLink to={path}>
            <img src={props.ava}/>
            {props.name}
        </NavLink>
    </div>
}


export default DialogItem;