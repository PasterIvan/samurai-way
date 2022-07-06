import React from 'react';
import style from './Post.module.css'

type PostType = {
    message: string
    likes: number
}
export const Post: React.FC<PostType> = (props) => {
    return (
        <>
            <div className={style.item}>
                <img
                    src={'https://sankt-peterburg.vse-footbolki.ru/image/cache/catalog/vsm/0/2/2927/2927545/previews/people_1_sign_front_white_700-280x280.jpg'}/>
                {props.message}
                <div>
                    <span>Like </span> {props.likes}
                </div>
            </div>
        </>
    )
}

