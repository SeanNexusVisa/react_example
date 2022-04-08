import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const SignUpForm = () => {
    const validateSchema = yup.object({
        fullname: yup
            .string('Enter your full name')
            .required('Full name is required')
            .max(50, 'The max length of full name is 50 characters'),
        age: yup
            .number('Enter your age')
            .required('Age is required')
            .typeError('Please enter digital numbers')
            .lessThan(150, 'the max number of age is 150')
            .moreThan(17, 'The min number of age is 18'),
        email: yup
            .string('Enter your email')
            .required('Email is required')
            .max(50, 'The max length of email is 50 characters')
            .email('Enter a valid email'),
    });

    const formik = useFormik({
        initialValues: {
            fullname: 'John Doe',
            age: '18',
            email: 'example@abc.com',
        },
        validationSchema: validateSchema,
        onSubmit: values => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
        },
    });
    
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="fullname"
                    name="fullname"
                    label="Fullname"
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                    helperText={formik.touched.fullname && formik.errors.fullname}
                />
                <TextField
                    fullWidth
                    id="age"
                    name="age"
                    label="Age"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    error={formik.touched.age && Boolean(formik.errors.age)}
                    helperText={formik.touched.age && formik.errors.age}
                />

                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Submit
                </Button>

            </form>
        </div>

    );

};


export default SignUpForm;
