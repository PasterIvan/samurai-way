import React from "react";
import style from "./Users.module.css"
import {UserType} from "../../redux/usersReducer";
import avatar from './../../assets/images/avatar.png'
import {NavLink} from "react-router-dom";


export type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users: React.FC<UsersPropsType> = (
    {
        users, follow, unfollow, totalUsersCount, pageSize, currentPage, onPageChanged
    }
) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return (<div>
            <div>
                {pages.map(p => {
                    return <span
                        className={currentPage === p ? style.selectedPage : ''}
                        onClick={() => {
                            onPageChanged(p)
                        }}>
                            {p}
                        </span>
                })}

            </div>
            <div>
                {users.map(u => <div key={u.id}>
                    <span>
                        <div className={style.userPhoto}>
                            <NavLink to={'/profile/'+u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : avatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    follow(u.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>
                                {"u.location.country"}
                            </div>
                            <div>
                                {"u.location.city"}
                            </div>
                        </span>
                    </span>

                </div>)
                }
            </div>
        </div>
    )
}