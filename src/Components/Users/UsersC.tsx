import React from "react";
import {mapDispatchToPropsType, mapStateToPropsType} from "./UsersContainer";
import style from "./Users.module.css"
import axios from "axios";


type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

export class UsersC extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }

        return (<div>
                <div>
                    {pages.map(p => {
                        return <span
                            className={this.props.currentPage === p ? style.selectedPage : ''}
                            onClick={()=>{this.onPageChanged(p)}}
                        >
                            {p}
                        </span>
                    })}

                </div>
                <div>
                    {this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={style.userPhoto}>
                            <img src={u.photos.small !== null ? u.photos.small : ""}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
}