import Joi from 'joi-browser'

const pattern  = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/

export const loginSchema: { email: string, password: string } = {
    email: Joi.string().min(3).email().required(),
    password: Joi.string().min(6).max(16).regex(new RegExp(pattern)).required()
}

export const registerSchema: { email: string, password: string, userName: string, passwordConfirm: string } = {
    userName: Joi.string().min(3).max(16).required(),
    ...loginSchema,
    passwordConfirm: Joi.string().min(6).max(16).regex(new RegExp(pattern)).required()
}