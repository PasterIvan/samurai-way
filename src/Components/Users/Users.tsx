import React from "react";
import {mapDispatchToPropsType, mapStateToPropsType} from "./UsersContainer";
import style from "./Users.module.css"
import {v1} from "uuid";


type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

export const Users: React.FC<UsersPropsType> = ({users, follow, unfollow, setUsers}) => {

    if (users.length === 0 ) {
        setUsers([{
            id: v1(),
            followed: true,
            fullName: 'Vasya',
            photoUrl: 'https://vjoy.cc/wp-content/uploads/2019/12/4wx8ecia-min.jpg',
            status: 'sdfsfsf',
            location: {city: 'Minsk', country: 'Belarus'}
        },
            {
                id: v1(),
                followed: false,
                fullName: 'Kolya',
                photoUrl: 'https://meragor.com/files/styles//ava_800_800_wm/starnoff_23.jpg',
                status: 'vervrverv',
                location: {city: 'Brest', country: 'Belarus'}
            },
            {
                id: v1(),
                followed: true,
                fullName: 'Pasha',
                photoUrl: 'https://freelance.ru/img/portfolio/pics/00/36/88/3573970.jpg',
                status: 'erverv',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: v1(),
                followed: false,
                fullName: 'Lesha',
                photoUrl: 'https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg',
                status: 'sdfseghyu,fsf',
                location: {city: 'New York', country: 'USA'}
            },
            {
                id: v1(),
                followed: false,
                fullName: 'Misha',
                photoUrl: 'https://static.wikia.nocookie.net/0c9787f8-4011-4dbe-9ca0-44fafba10dec/scale-to-width/755',
                status: 'sdf,umynybvtsfsf',
                location: {city: 'Minsk', country: 'Belarus'}
            }])
    }

    return (
        <div>
            {
                users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={style.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={()=>{unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={()=>{follow(u.id)}}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}
                            </div>
                        </span>
                    </span>

                </div>)
            }
        </div>
    )
}