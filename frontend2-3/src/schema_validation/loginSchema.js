import * as yup from 'yup';

const loginSchema = yup.object().shape({
    username: yup
    .string()
    .required()
    .min(6, "Six characters are required for a valid username"),

    password: yup
    .string()
    .required("Password is required to login to your account")
    .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
})

export default loginSchema