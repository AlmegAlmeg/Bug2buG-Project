import { ChangeEventHandler } from 'react'
import './CustomInput.scss'

type CustomInputArgs = {
    name: string,
    label: string,
    errors: {},
    type?: string,
    handleChange: ChangeEventHandler<HTMLInputElement>,
    initialValue?: string,
}

const CustomInput = (args: CustomInputArgs) => {
    return (
        <div className="custom-input">
            <label htmlFor={args.name}>{ args.label }</label>
            <input 
                type={args.type}
                name={args.name} 
                id={args.name} 
                defaultValue={args.initialValue} 
                onChange={args.handleChange}
            />
            <span className='error'>{ args.errors[args.name] }</span>
        </div>
    )
}

export default CustomInput