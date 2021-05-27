import * as yup from 'yup'

export const schema = yup.object().shape({
    first_name: yup
        .string()
        .required('First Name is Required'),
    last_name: yup
        .string()
        .required('Last Name is Required'),
    city: yup
        .string()
        .required('Must Enter a City Name'),
    zipcode: yup 
        .string()
        .required('Must Enter a Zipcode'),
    username: yup
        .string()
        .required('Must Choose a Username'),
    email: yup 
        .string()
        .email('Must Be a Valid Email!')
        .required('Email is Required'),
    password: yup
        .string()
        .min(6, 'Must be at least 6 characters!')
        .required('Password is Required'),
    terms: yup
        .boolean()
        .oneOf([true], 'You must accept the Terms of Service and Privacy Policy'),
})