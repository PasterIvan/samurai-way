import React, {useState} from 'react'

export const ProfileStatus = (props: any) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    const activateEditMode = () => {
        setEditMode(true)
    }

    return (
        <div>
            {editMode
                ? <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
                : <div>
                    <input value={props.status}></input>
                </div>
            }
        </div>
    )
}