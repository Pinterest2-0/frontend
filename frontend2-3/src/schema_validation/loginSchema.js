import * as yup from 'yup';

const logInSchema = yup.object().shape({
    username: yup
    .string()
    .required()
    .min(6, "Six characters are required for a valid username"),

    password: yup
    .string()
    .required("Password is required to login to your account")
})

export default logInSchema