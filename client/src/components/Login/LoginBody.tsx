import CustomInput from '../Shared/CustomInput'
import useValidator from '../../hooks/useValidator'
import { loginSchema } from '../../config/schema'
import './LoginBody.scss'
import { FormEvent, useState } from 'react'

type LoginType = {
    email: string,
    password: string
}

const LoginBody = () => {

    const login: LoginType = {
        email: '',
        password: ''
    }

    const [localErr, setLocalErr] = useState<string>('')

    const { values, errors, handleChange, validateForm } = useValidator(login, loginSchema)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!validateForm()) return
        //This is where we await
    }

    return (
        <div className="login-body">
            <form onSubmit={handleSubmit}>
                <h3>Login To Our System</h3>
                <CustomInput 
                    name='email'
                    label='Email'
                    errors={errors}
                    handleChange={handleChange}
                />
                <CustomInput 
                    name='password'
                    label='Password'
                    errors={errors}
                    handleChange={handleChange}
                    type='password'
                />
                {localErr && <p>{ localErr }</p>}

                <button className='submit-btn' type='submit'>Login</button>

            </form>
        </div>
    )
}

export default LoginBody