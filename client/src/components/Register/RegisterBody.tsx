import { FormEvent, useState } from 'react'
import { registerSchema } from '../../config/schema'
import useValidator from '../../hooks/useValidator'
import CustomInput from '../Shared/CustomInput'
import './RegisterBody.scss'

type RegisterType = {
    userName: string,
    email: string,
    password: string,
    passwordConfirm: string
}

const RegisterBody = () => {

    const register: RegisterType = {
        userName: '',
        email: '',
        password: '',
        passwordConfirm: ''
    }

    const [localErr, setLocalErr] = useState<string>('')

    const { values, errors, handleChange, validateForm } = useValidator(register, registerSchema)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!validateForm()) return
        //This is where we await
    }

    return (
        <div className="register-body">
            <form onSubmit={handleSubmit}>
                <h3>Register To Our System</h3>
                <CustomInput
                    name='userName'
                    label='Username'
                    errors={errors}
                    handleChange={handleChange}
                />
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
                <CustomInput 
                    name='passwordConfirm'
                    label='Confirm password'
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

export default RegisterBody