import * as yup from 'yup';

const signUpSchema = yup.object().shape({
    firstname: yup
        .string()
        .required("First name input is required")
        .min(2, "First name must have at least two characters"),
    lastname: yup
        .string()
        .required("Last name input is required")
        .min(2, "Last name must have at least two characters"),
    username: yup
        .string()
        .required("Username input is required")
        .min(6, "Username must have at least six characters"),

    //PASSWORD WILL NEED SPECIAL REQUIREMENTS/ NEED ASSISTANCE/RESEARCH
    password: yup
        .string()
        .required("Password input is required")
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
});

export default signUpSchema