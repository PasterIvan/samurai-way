import React, {useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks'
import {updateStatus} from '../../../redux/profileReducer'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {maxLength100, required} from "../../../utils/validators/validators";
import {Input} from "../../common/formsControls/FormsControls";

type FormDataType = {
    status: string,
}

export const ProfileStatus = () => {
    const dispatch = useAppDispatch()
    const status = useAppSelector(state => state.profilePage.status)
    const [editMode, setEditMode] = useState<boolean>(false)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = (formData: FormDataType) => {
        dispatch(updateStatus(formData.status))
        setEditMode(false)
    }

    return (
        <div>
            {!editMode &&
                 <div>
                    <span onDoubleClick={activateEditMode}>{status || 'No Status'}</span>
                </div>}
            {editMode &&
                  <StatusReduxForm onSubmit={deactivateEditMode}/>
            }
        </div>
    )
}

const StatusForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'status'}
                       component={Input}
                       props={{autoFocus: true}}
                       validate={[required, maxLength100]}
                />
            </div>
        </form>
    )
}

const StatusReduxForm = reduxForm<FormDataType>({form: 'status'})(StatusForm)