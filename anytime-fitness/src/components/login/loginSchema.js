import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    username_or_email: yup
        .string()
        .required('First Name is Required'),
    password: yup
        .string()
        .min(6, 'Must be at least 6 characters!')
        .required('Password is Required'),
    auth_code: yup
        .string(),
    remember_me: yup
        .boolean(),
})