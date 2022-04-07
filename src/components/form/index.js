import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { getIn, useFormik } from 'formik';
import * as yup from 'yup';

const signUpForm = () => {

    const validateSchema = yup.object({
        fullname: yup
            .string('Enter your full name')
            .required('Full name is required')
            .max(50, 'The max length of full name is 50 characters'),
        age: yup
            .number('Enter your age')
            .required('Age is required')
            .lessThan(150, 'the max number of age is 150')
            .moreThan(18, 'The min number of age is 18')
            .positive('The number of age must be a positive number'),
        email: yup
            .string('Enter your email')
            .email()
            .required('Email is required')
            .max(50, 'The max length of email is 50 characters'),
        website: yup
            .string('Enter your website')
            .url()
            .required('Enter youe website')
            .max(200, 'The max length of website is 200 characters')
    });

    const formik = useFormik({
        initialValues: {
            age: 18
        },
        validationSchema: validateSchema,
        onSubmit: values => {
            console.log(values);
            alter(JSON.stringify(values, null, 2));
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>

            //to do 

        <button type="submit">Submit</button>
        </form>
    );

};


