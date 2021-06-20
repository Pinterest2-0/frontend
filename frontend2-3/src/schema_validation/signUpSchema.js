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
    password: '',
    passwordconfirm: '',

    terms: yup
    .boolean()
})