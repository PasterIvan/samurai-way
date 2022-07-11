import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";
import {useAppDispatch} from "../../../../hooks/hooks";
import {maxLength300, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/formsControls/FormsControls";
import {addPost} from "../../../../redux/profileReducer";

export const NewPost = () => {
    const dispatch = useAppDispatch()

    const addNewPost = (formData: FormDataType) => {
        dispatch(addPost(formData.newPostText))
        dispatch(reset('profileAddNewPostFormRedux'))
    }

    return (
        <div>
            <AddNewPostFormRedux onSubmit={addNewPost}/>
        </div>
    )
}

type FormDataType = {
    newPostText: string
}

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'}
                       component={Textarea}
                       placeholder={'New post text'}
                       validate={[required, maxLength300]}/>
            </div>
            <div>
                <button>New Post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'profileAddNewPostFormRedux'})(AddPostForm)