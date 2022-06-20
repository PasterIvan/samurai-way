import React from "react";
import style from "./Users.module.css"
import {toggleFollowingProgress, UserType} from "../../redux/usersReducer";
import avatar from './../../assets/images/avatar.png'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {userAPI} from "../../api/api";


export type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
    followingInProgress: Array<number>
}

export const Users: React.FC<UsersPropsType> = (
    {
        users, follow, unfollow, totalUsersCount,
        pageSize, currentPage, onPageChanged, followingInProgress, toggleFollowingProgress
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
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : avatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={followingInProgress.some(id=>id===u.id)} onClick={() => {
                                    toggleFollowingProgress(true, u.id)
                                    userAPI.unfollow(u.id)
                                        .then(data => {
                                            if (data.resultCode == 0) {
                                                unfollow(u.id)
                                            }
                                            toggleFollowingProgress(false, u.id)
                                        })
                                }}>Unfollow</button>
                                : <button disabled={followingInProgress.some(id=>id===u.id)} onClick={() => {
                                    toggleFollowingProgress(true, u.id)
                                    userAPI.follow(u.id)
                                        .then(data => {
                                            if (data.resultCode == 0) {
                                                follow(u.id)
                                            }
                                            toggleFollowingProgress(false, u.id)
                                        })
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