import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'login'} type={'text'} placeholder={'Login'} /> {/*замість input*/}
            </div>
            <div>
                <Field component={'input'} name={'password'} type={'password'} placeholder={'Password'} />
            </div>
            <div>
                <Field component={'input'} name={'remember'} type={'checkbox'} /> remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form: 'login' // огортаємо контейнерною компонентою reduxForm, називаємо форму
})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
export default Login